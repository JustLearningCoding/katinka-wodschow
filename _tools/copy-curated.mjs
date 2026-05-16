// Copies the curated paintings into src/assets/works/ with clean names
// based on the curation we agreed on.
import { copyFile, mkdir } from 'fs/promises';

const SRC = '/Users/thomasholttheisen/Desktop/Kat malerier (instagram) ';
const DST = '/Users/thomasholttheisen/web/katinka-wodschow/src/assets/works';

await mkdir(DST, { recursive: true });

// Map IG sheet number -> series + clean filename
// Format: kat N.jpg from sheet -> series_NN.jpg in project
const works = [
  // FIGUR series (8 works) — order matters: hero first
  { src: 'kat 16.jpg',  dst: 'figur-01-tondo-bla.jpg' },          // HERO
  { src: 'kat 26.jpg',  dst: 'figur-02-orange.jpg' },
  { src: 'kat 27.jpg',  dst: 'figur-03-tondo-easel.jpg' },
  { src: 'kat 30.jpg',  dst: 'figur-04-tondo-cirkel.jpg' },
  { src: 'kat 31.jpg',  dst: 'figur-05-lilla-rod.jpg' },
  { src: 'kat 40.jpg',  dst: 'figur-06-akvarel-ramme.jpg' },
  { src: 'kat 41.jpg',  dst: 'figur-07-to-lerreder.jpg' },
  { src: 'kat 15.jpg',  dst: 'figur-08-akvarel-farve.jpg' },

  // BLOMSTER series (7 works)
  { src: 'kat 1.jpg',   dst: 'blomster-01-gul-lilla.jpg' },
  { src: 'kat 3 .jpg',  dst: 'blomster-02-lilla-solsikke.jpg' },
  { src: 'kat 7.jpg',   dst: 'blomster-03-koral.jpg' },
  { src: 'kat 8.jpg',   dst: 'blomster-04-stor-solsikke.jpg' },
  { src: 'kat 10.jpg',  dst: 'blomster-05-tulipaner.jpg' },
  { src: 'kat 11.jpg',  dst: 'blomster-06-lilla-baggrund.jpg' },
  { src: 'kat 44.jpg',  dst: 'blomster-07-stor-vase.jpg' },

  // ABSTRAKT series (4 works)
  { src: 'kat 21.jpg',  dst: 'abstrakt-01-blaa-pink.jpg' },
  { src: 'kat 25.jpg',  dst: 'abstrakt-02-roed-bla.jpg' },
  { src: 'kat 36.jpg',  dst: 'abstrakt-03-haengende.jpg' },
  { src: 'kat 43.jpg',  dst: 'abstrakt-04-pink-bla.jpg' },

  // Profile photo for About section
  { src: 'kat profil.jpg', dst: 'profil-katinka.jpg' },
];

for (const { src, dst } of works) {
  await copyFile(`${SRC}/${src}`, `${DST}/${dst}`);
  console.log(`✓ ${src} → ${dst}`);
}
console.log(`\nDone. ${works.length} files copied.`);
