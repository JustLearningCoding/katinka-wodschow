// Maps filename strings (from site.ts) to ImageMetadata objects
// so Astro can optimize them at build time.
import { type ImageMetadata } from "astro";

// Eagerly import all works
const modules = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/works/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

// Map by filename only (e.g. "figur-01-tondo-bla.jpg")
export const worksByFile: Record<string, ImageMetadata> = {};
for (const path in modules) {
  const filename = path.split("/").pop()!;
  worksByFile[filename] = modules[path].default;
}

export function getImage(filename: string): ImageMetadata {
  const img = worksByFile[filename];
  if (!img) throw new Error(`Image not found: ${filename}`);
  return img;
}
