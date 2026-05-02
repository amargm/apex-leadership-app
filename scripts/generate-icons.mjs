// ─── APEX Icon Generator ──────────────────────────────────────────────────────
// Generates app icon and adaptive icon foreground from SVG.
// Run: node scripts/generate-icons.mjs

import sharp from 'sharp';
import { mkdirSync } from 'fs';

mkdirSync('assets/icon', { recursive: true });

const BG = '#050505';
const ACCENT = '#C8F04D';
const TEXT = '#EDEAE5';

// ─── Main app icon (1024x1024) ────────────────────────────────────────────────
// Design: Black square, bold geometric "A" in light text, accent crossbar
const iconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
  <rect width="1024" height="1024" fill="${BG}"/>

  <!-- Accent top line -->
  <rect x="0" y="0" width="1024" height="6" fill="${ACCENT}"/>

  <!-- Bold geometric A -->
  <g transform="translate(512, 480)">
    <!-- Left leg -->
    <polygon points="-38,-220 -188,220 -118,220 0,-100" fill="${TEXT}"/>
    <!-- Right leg -->
    <polygon points="38,-220 188,220 118,220 0,-100" fill="${TEXT}"/>
    <!-- Accent crossbar -->
    <rect x="-130" y="40" width="260" height="8" fill="${ACCENT}"/>
  </g>

  <!-- APEX text below -->
  <text x="512" y="790" text-anchor="middle"
        font-family="monospace" font-weight="400"
        font-size="52" letter-spacing="18" fill="#555555">
    APEX
  </text>

  <!-- Bottom accent dot -->
  <rect x="496" y="840" width="32" height="4" fill="${ACCENT}"/>
</svg>`;

// ─── Adaptive icon foreground (1024x1024 with safe zone padding) ──────────────
// Android crops to circle/squircle — content must be in center 66% (safe zone)
const adaptiveSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
  <!-- Transparent background — adaptive bg color set in config -->
  <rect width="1024" height="1024" fill="transparent"/>

  <!-- Bold geometric A — scaled to fit safe zone (~676px center area) -->
  <g transform="translate(512, 460)">
    <!-- Left leg -->
    <polygon points="-34,-200 -170,200 -106,200 0,-90" fill="${BG}"/>
    <!-- Right leg -->
    <polygon points="34,-200 170,200 106,200 0,-90" fill="${BG}"/>
    <!-- Accent crossbar -->
    <rect x="-118" y="36" width="236" height="8" fill="${ACCENT}"/>
  </g>

  <!-- APEX text -->
  <text x="512" y="750" text-anchor="middle"
        font-family="monospace" font-weight="400"
        font-size="46" letter-spacing="16" fill="#333333">
    APEX
  </text>

  <!-- Bottom accent dot -->
  <rect x="498" y="794" width="28" height="4" fill="${ACCENT}"/>
</svg>`;

async function generate() {
  // Main icon
  await sharp(Buffer.from(iconSvg))
    .resize(1024, 1024)
    .png()
    .toFile('assets/icon/icon.png');
  console.log('✓ assets/icon/icon.png (1024x1024)');

  // Adaptive foreground
  await sharp(Buffer.from(adaptiveSvg))
    .resize(1024, 1024)
    .png()
    .toFile('assets/icon/adaptive-foreground.png');
  console.log('✓ assets/icon/adaptive-foreground.png (1024x1024)');

  // Favicon-size for web
  await sharp(Buffer.from(iconSvg))
    .resize(48, 48)
    .png()
    .toFile('assets/icon/favicon.png');
  console.log('✓ assets/icon/favicon.png (48x48)');

  console.log('\nDone. Update app.config.ts icon paths.');
}

generate().catch(console.error);
