export type Photo = {
  slug: string;
  caption: string;
  width: number;
  height: number;
  exif: string;
  // When the photo was taken. The A7 II clock was reset for some shots, so a few
  // dates are estimated from edit dates and the drift between wrong timestamps.
  date: string;
};

const A7 = 'Sony A7 II';
const RX = 'Sony RX100 VI';
const IP = 'iPhone 14 Pro';

export const portrait = {
  src: '/photography/me.jpg',
  alt: 'Feng Yan on the harbour, Sydney',
  width: 2000,
  height: 1333,
};

const all: Photo[] = [
  { slug: 'jet-boat-harbour', caption: 'Jet boat on Sydney Harbour', width: 2000, height: 1333, exif: `${A7} · 85mm · f/11 · 1/500s`, date: '2026-06-15' /* estimated */ },
  { slug: 'forest-dragon', caption: "Boyd's forest dragon", width: 2000, height: 1296, exif: `${A7} · 85mm · f/3.2 · 1/30s`, date: '2024-09-28T17:12' /* estimated */ },
  { slug: 'waves', caption: 'Waves on the rocks', width: 2000, height: 1222, exif: `${A7} · 28mm · f/4 · 1/8000s`, date: '2024-09-28T13:59' /* estimated */ },
  { slug: 'opera-house-night', caption: 'Sydney Opera House at night', width: 2000, height: 1316, exif: `${RX} · 43mm · f/4.5 · 1/30s`, date: '2024-09-13T09:17' },
  { slug: 'circular-quay', caption: 'Circular Quay, Sydney', width: 2000, height: 1251, exif: `${RX} · 17.5mm · f/5 · 1/800s`, date: '2024-09-13T07:00' },
  { slug: 'opera-house', caption: 'Sydney Opera House', width: 2000, height: 1219, exif: `${RX} · 72mm · f/6.3 · 1/1000s`, date: '2024-09-13T06:43' },
  { slug: 'harbour-bridge-sunset', caption: 'Sydney Harbour Bridge at sunset', width: 2000, height: 1261, exif: `${RX} · 22mm · f/6.3 · 1/1250s`, date: '2024-09-13T06:41' },
  { slug: 'pelican', caption: 'Australian pelican', width: 1360, height: 2000, exif: `${RX} · 72mm · f/5.6 · 1/640s`, date: '2024-08-24' },
  { slug: 'lugu-lake-boats', caption: 'Boats on Lugu Lake', width: 2000, height: 1333, exif: `${A7} · 85mm · f/6.3 · 1/1600s`, date: '2024-07-08T21:09' /* estimated */ },
  { slug: 'lugu-lake', caption: 'Lugu Lake, Yunnan', width: 2000, height: 1269, exif: `${A7} · 85mm · f/5 · 1/1600s`, date: '2024-07-08T18:47' /* estimated */ },
  { slug: 'riverside-picnics', caption: 'Picnics by the river, Shanghai', width: 2000, height: 1500, exif: `${IP} · f/1.8 · 1/3058s`, date: '2023-05-01' },
  { slug: 'yellow-daisies', caption: 'Yellow daisies', width: 2000, height: 1500, exif: `${IP} · f/2.2 · 1/355s`, date: '2023-04-28' },
  { slug: 'huangpu-bridge', caption: 'Bridge over the Huangpu, Shanghai', width: 2000, height: 1500, exif: `${IP} · f/2.8 · 1/1179s`, date: '2023-04-15' },
  { slug: 'iron-flower-show', caption: 'Molten iron sparks, Lunar New Year', width: 2000, height: 1500, exif: `${IP} · f/2.8 · 1/50s`, date: '2023-01-25' },
  { slug: 'branches-dusk', caption: 'Branches at dusk', width: 2000, height: 1332, exif: `${RX} · 20mm · f/5 · 1/40s`, date: '2021-02-20' },
  { slug: 'oriental-pearl-tower', caption: 'Oriental Pearl Tower, Shanghai', width: 1297, height: 2000, exif: `${RX} · 31mm · f/4.5 · 1/100s`, date: '2020-10-20' },
  { slug: 'london-eye', caption: 'London Eye', width: 1333, height: 2000, exif: `${RX} · 62mm · f/4.5 · 1/40s`, date: '2020-08-03T19:38:17' },
  { slug: 'trafalgar-square', caption: "Nelson's Column, Trafalgar Square", width: 1333, height: 2000, exif: `${RX} · 62mm · f/4.5 · 1/40s`, date: '2020-08-03T19:38:16' },
  { slug: 'st-pauls', caption: "St Paul's Cathedral, London", width: 1333, height: 2000, exif: `${RX} · 56mm · f/5.6 · 1/60s`, date: '2020-08-03T19:37' },
  { slug: 'big-ben-whitehall', caption: 'Big Ben from Whitehall', width: 1291, height: 2000, exif: `${RX} · 72mm · f/5 · 1/200s`, date: '2020-08-03T17:51' },
  { slug: 'city-of-london-dusk', caption: 'City of London at dusk', width: 2000, height: 1333, exif: `${RX} · 72mm · f/4.5 · 1/25s`, date: '2020-07-31' },
  { slug: 'fallow-deer', caption: 'Fallow deer', width: 2000, height: 1333, exif: `${A7} · 35mm · f/4 · 1/1000s`, date: '2020-07-16' },
  { slug: 'park-golden-hour', caption: 'Evening light in the park', width: 2000, height: 1209, exif: `${A7} · 85mm · f/8 · 1/50s`, date: '2020-06-22' },
  { slug: 'london-skyline-dusk', caption: 'London skyline after sunset', width: 2000, height: 1223, exif: `${A7} · 85mm · f/2 · 1/10s`, date: '2020-02-06' },
  { slug: 'cardiff-castle', caption: 'Cardiff Castle, Wales', width: 2000, height: 1333, exif: `${A7} · 28mm · f/5.6 · 1/800s`, date: '2019-12-22' },
];

// Spread portrait shots evenly through the landscapes so every stretch of the grid mixes
// orientations; within each orientation, newest first.
function interleave(list: Photo[]) {
  const newest = [...list].sort((a, b) => b.date.localeCompare(a.date));
  const tall = newest.filter((p) => p.height > p.width);
  const wide = newest.filter((p) => p.height <= p.width);
  const slots = new Set(tall.map((_, k) => Math.floor((k * list.length) / tall.length) + 1));
  return list.map((_, i) => (slots.has(i) && tall.length ? tall.shift()! : wide.shift() ?? tall.shift()!));
}

export const photos = interleave(all);
