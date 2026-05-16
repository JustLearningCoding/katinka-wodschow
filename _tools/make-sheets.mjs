// Build 3 contact sheets so I can see all 44 paintings.
// Outputs to ~/Desktop/kat-sheet-1.jpg etc. for easy upload.
import sharp from 'sharp';
import { readdir } from 'fs/promises';

const SRC = '/Users/thomasholttheisen/Desktop/Kat malerier (instagram) ';
const COLS = 3;
const CELL_W = 500;
const CELL_H = 600;
const PAD = 14;
const LABEL_H = 32;

const files = (await readdir(SRC))
  .filter(f => f.toLowerCase().endsWith('.jpg'))
  .sort((a, b) => {
    const na = parseInt(a.match(/\d+/)?.[0] ?? '9999');
    const nb = parseInt(b.match(/\d+/)?.[0] ?? '9999');
    return na - nb;
  });

console.log(`${files.length} files total`);

const chunks = [files.slice(0, 15), files.slice(15, 30), files.slice(30)];

for (let c = 0; c < chunks.length; c++) {
  const chunk = chunks[c];
  const rows = Math.ceil(chunk.length / COLS);
  const sheetW = COLS * CELL_W + (COLS + 1) * PAD;
  const sheetH = rows * (CELL_H + LABEL_H) + (rows + 1) * PAD;

  const composites = [];
  for (let i = 0; i < chunk.length; i++) {
    const f = chunk[i];
    const row = Math.floor(i / COLS);
    const col = i % COLS;
    const x = PAD + col * (CELL_W + PAD);
    const y = PAD + row * (CELL_H + LABEL_H + PAD);

    const buf = await sharp(`${SRC}/${f}`)
      .resize(CELL_W, CELL_H, { fit: 'inside', background: { r: 250, g: 246, b: 238 } })
      .flatten({ background: { r: 250, g: 246, b: 238 } })
      .jpeg({ quality: 80 })
      .toBuffer();
    composites.push({ input: buf, top: y, left: x });

    const label = f.replace(/\.jpg$/i, '').replace(/^kat\s*/i, '');
    const svgLabel = Buffer.from(
      `<svg width="${CELL_W}" height="${LABEL_H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#FAF6EE"/>
        <text x="${CELL_W / 2}" y="${LABEL_H / 2 + 7}" font-family="Georgia, serif" font-size="20" font-weight="600" fill="#1F1A14" text-anchor="middle">${label}</text>
      </svg>`
    );
    composites.push({ input: svgLabel, top: y + CELL_H, left: x });
  }

  const out = `/Users/thomasholttheisen/Desktop/kat-sheet-${c + 1}.jpg`;
  await sharp({
    create: { width: sheetW, height: sheetH, channels: 3, background: { r: 245, g: 240, b: 232 } },
  })
    .composite(composites)
    .jpeg({ quality: 85 })
    .toFile(out);

  console.log(`Sheet ${c + 1}: ${sheetW}x${sheetH} (${chunk.length} images) → ${out}`);
}
