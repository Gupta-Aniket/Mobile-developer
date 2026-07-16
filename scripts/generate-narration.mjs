#!/usr/bin/env node
/**
 * Generate a natural-voice narration MP3 for a blog post, so the on-page
 * "Listen" player upgrades from the browser voice to ChatGPT/ElevenLabs quality.
 *
 * It reads the post HTML, extracts the article prose (same text the player would
 * speak), sends it to a neural TTS API, and writes audio.mp3 next to the post.
 *
 * USAGE (Node 18+, no npm install needed):
 *
 *   # OpenAI (https://platform.openai.com/api-keys)
 *   OPENAI_API_KEY=sk-... node scripts/generate-narration.mjs
 *
 *   # ElevenLabs (https://elevenlabs.io → Profile → API key)
 *   ELEVENLABS_API_KEY=... node scripts/generate-narration.mjs
 *
 * OPTIONS (env vars):
 *   POST=blog/why-ios-why-now      which post dir to narrate (default shown)
 *   VOICE=...                      OpenAI: alloy|ash|ballad|coral|echo|onyx|nova|sage|shimmer (default: onyx)
 *                                  ElevenLabs: a voice_id (default: Rachel = 21m00Tcm4TlvDq8ikWAM)
 *   OPENAI_TTS_MODEL=gpt-4o-mini-tts   (default; or tts-1-hd / tts-1)
 *   ELEVEN_MODEL=eleven_multilingual_v2 (default)
 *
 * Then commit the generated blog/<post>/audio.mp3 and push. The player picks it
 * up automatically — no code change needed.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POST = process.env.POST || "blog/why-ios-why-now";
const htmlPath = join(POST, "index.html");
const outPath = join(POST, "audio.mp3");

// ---- 1. Extract the article prose from the post HTML ----
function extractNarration(html) {
  const body = html.match(
    /<div class="post-body">([\s\S]*?)<div class="post-footer"/
  );
  if (!body) throw new Error("Could not find .post-body in " + htmlPath);
  let inner = body[1];
  // drop the timeline block (visual, not spoken)
  inner = inner.replace(/<div class="timeline">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, "");
  const blocks = [...inner.matchAll(/<(h2|p)\b[^>]*>([\s\S]*?)<\/\1>/g)];
  const decode = (s) =>
    s
      .replace(/<[^>]+>/g, "")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&mdash;/g, "—")
      .replace(/&nbsp;/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  return blocks
    .map((m) => decode(m[2]))
    .filter(Boolean)
    .join("\n\n");
}

// ---- 2. Chunk so we stay under provider input limits ----
function chunk(text, max = 3500) {
  const paras = text.split(/\n\n+/);
  const chunks = [];
  let cur = "";
  for (const p of paras) {
    if ((cur + "\n\n" + p).length > max && cur) {
      chunks.push(cur);
      cur = p;
    } else {
      cur = cur ? cur + "\n\n" + p : p;
    }
  }
  if (cur) chunks.push(cur);
  return chunks;
}

// ---- 3. Provider calls ----
async function openaiTTS(text) {
  const model = process.env.OPENAI_TTS_MODEL || "gpt-4o-mini-tts";
  const voice = process.env.VOICE || "onyx";
  const res = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ model, voice, input: text, response_format: "mp3" }),
  });
  if (!res.ok) throw new Error(`OpenAI ${res.status}: ${await res.text()}`);
  return Buffer.from(await res.arrayBuffer());
}

async function elevenTTS(text) {
  const voice = process.env.VOICE || "21m00Tcm4TlvDq8ikWAM"; // Rachel
  const model = process.env.ELEVEN_MODEL || "eleven_multilingual_v2";
  const res = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${voice}?output_format=mp3_44100_128`,
    {
      method: "POST",
      headers: {
        "xi-api-key": process.env.ELEVENLABS_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text, model_id: model }),
    }
  );
  if (!res.ok) throw new Error(`ElevenLabs ${res.status}: ${await res.text()}`);
  return Buffer.from(await res.arrayBuffer());
}

// ---- 4. Run ----
const provider = process.env.OPENAI_API_KEY
  ? "openai"
  : process.env.ELEVENLABS_API_KEY
  ? "eleven"
  : null;

if (!provider) {
  console.error(
    "No API key found. Set OPENAI_API_KEY or ELEVENLABS_API_KEY.\n" +
      "  OPENAI_API_KEY=sk-... node scripts/generate-narration.mjs"
  );
  process.exit(1);
}

const html = readFileSync(htmlPath, "utf8");
const text = extractNarration(html);
const chunks = chunk(text);
console.log(
  `Narrating ${POST} — ${text.length} chars in ${chunks.length} chunk(s) via ${provider}…`
);

const tts = provider === "openai" ? openaiTTS : elevenTTS;
const buffers = [];
for (let i = 0; i < chunks.length; i++) {
  process.stdout.write(`  chunk ${i + 1}/${chunks.length}… `);
  buffers.push(await tts(chunks[i]));
  console.log("ok");
}

writeFileSync(outPath, Buffer.concat(buffers));
console.log(`\n✓ Wrote ${outPath} (${(Buffer.concat(buffers).length / 1024).toFixed(0)} KB)`);
console.log("  Commit it and push — the Listen player will use it automatically.");
