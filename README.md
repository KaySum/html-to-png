### HTML → PNG (Tailwind-powered)

Convert arbitrary HTML (with Tailwind CSS) into a downloadable PNG.

This app provides a Monaco editor for HTML input, renders it live, and captures the rendered DOM to PNG using `modern-screenshot`.

### Features

- **Type HTML + Tailwind**: Write markup with Tailwind classes in an editor powered by Monaco
- **Live preview**: Your HTML renders instantly in-page
- **One-click export**: Capture the rendered area as a PNG

### Tech stack

- **Framework**: Next.js 15 (App Router), React 19, TypeScript
- **Editor**: `@monaco-editor/react`
- **Capture**: `modern-screenshot` (`domToPng`)
- **Styling**: Tailwind CSS 4 via CDN
- **Formatting/Linting**: Biome + Ultracite

### Quick start

Prerequisites: Node 18+ (Node 20 LTS recommended)

```bash
npm install
npm run dev
# or: yarn dev / pnpm dev / bun dev
```

Open `http://localhost:3000`.

### Usage

1. Type or paste your HTML in the editor panel
2. Use Tailwind utility classes as needed (Tailwind 4 is injected via CDN)
3. Click "Save as PNG" to download the rendered region

Tip: The captured area corresponds to the element with id `screenshot-element`. Ensure your HTML places the intended content inside that element (it is the live preview container).

Example snippet to try:

```html
<div
  class="flex size-64 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg"
>
  <div class="size-32 rounded-full bg-radial from-orange-500 to-red-600"></div>
</div>
```

### How it works

- User input is injected into an empty div via `dangerouslySetInnerHTML`
- Clicking "Save as PNG" calls `domToPng` from `modern-screenshot`
- Tailwind 4 is loaded via CDN in script tag inside `src/app/layout.tsx`

### Notes and limitations

- **Text rendering**: Text may appear blurry in exported PNGs due to limitations with the underlying `modern-screenshot` library
- **Font limitations**: Custom fonts are not supported; exported images use the system default font
- **Canvas size limits**: Very large elements may exceed browser canvas size limits, resulting in failed exports or empty PNG downloads

### Scripts

- **dev**: `npm run dev` — start the dev server
- **build**: `npm run build` — production build
- **start**: `npm start` — run the production server
- **lint**: `npm run lint` — check for code issues
- **format**: `npm run format` — format and fix code automatically

### Contributing

Contributions are welcome. Please keep changes minimal and focused.

- **Formatting/Linting**: This repo uses Biome via Ultracite. Before committing, run:

  ```bash
  npm run format
  # to check only:
  npm run lint
  ```
