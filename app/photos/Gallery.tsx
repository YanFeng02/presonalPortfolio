'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import type { Photo } from './data';

function formatDate(date: string) {
  return new Date(date.slice(0, 10)).toLocaleDateString('en-AU', { month: 'short', year: 'numeric', timeZone: 'UTC' });
}

const isTall = (p: Photo) => p.height > p.width;

// Place each photo in one of the shortest columns, so the reading order runs across
// rows while columns stay balanced. Among columns of similar height, prefer one whose
// last photo has the other orientation, so portraits don't stack on each other.
function toColumns(photos: Photo[], count: number) {
  const cols: number[][] = Array.from({ length: count }, () => []);
  const heights = new Array(count).fill(0);
  photos.forEach((photo, i) => {
    const min = Math.min(...heights);
    const near = heights
      .map((h, c) => ({ h, c }))
      .filter(({ h }) => h <= min + 0.7)
      .sort((a, b) => a.h - b.h);
    const pick =
      near.find(({ c }) => {
        const last = cols[c][cols[c].length - 1];
        return last === undefined || isTall(photos[last]) !== isTall(photo);
      }) ?? near[0];
    cols[pick.c].push(i);
    heights[pick.c] += photo.height / photo.width;
  });
  return cols;
}

const layouts = [
  { count: 1, className: 'flex sm:hidden' },
  { count: 2, className: 'hidden sm:flex lg:hidden' },
  { count: 3, className: 'hidden lg:flex' },
];

export default function Gallery({ photos }: { photos: Photo[] }) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: number) => setOpen((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close, step]);

  const current = open === null ? null : photos[open];

  return (
    <>
      {layouts.map(({ count, className }) => (
        <div key={count} className={`${className} gap-3 items-start`}>
          {toColumns(photos, count).map((col, c) => (
            <div key={c} className="flex-1 min-w-0 flex flex-col gap-3">
              {col.map((i) => {
                const photo = photos[i];
                return (
                  <button
                    key={photo.slug}
                    onClick={() => setOpen(i)}
                    className="group block w-full overflow-hidden rounded-lg bg-line"
                    aria-label={`Open ${photo.caption}`}
                  >
                    <Image
                      src={`/photography/${photo.slug}.jpg`}
                      alt={photo.caption}
                      width={photo.width}
                      height={photo.height}
                      sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw"
                      className="w-full h-auto transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      ))}

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          onClick={close}
          className="fixed inset-0 z-50 flex flex-col bg-black text-white/90"
        >
          <div className="flex justify-between items-center px-5 py-4 text-[13px] text-white/60">
            <span className="tabular-nums">
              {open! + 1} / {photos.length}
            </span>
            <button onClick={close} className="hover:text-white" aria-label="Close">
              Close
            </button>
          </div>

          <div className="relative flex-1 mx-4 sm:mx-16">
            <Image
              key={current.slug}
              src={`/photography/${current.slug}.jpg`}
              alt={current.caption}
              fill
              sizes="100vw"
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="hidden sm:block absolute -left-14 top-1/2 -translate-y-1/2 px-3 py-6 text-white/50 hover:text-white"
              aria-label="Previous photo"
            >
              ←
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="hidden sm:block absolute -right-14 top-1/2 -translate-y-1/2 px-3 py-6 text-white/50 hover:text-white"
              aria-label="Next photo"
            >
              →
            </button>
          </div>

          <div className="px-5 py-4 flex items-end justify-between gap-4" onClick={(e) => e.stopPropagation()}>
            <div>
              <div className="text-[14px]">{current.caption}</div>
              <div className="mt-0.5 text-[12px] text-white/50">
                {formatDate(current.date)} · {current.exif}
              </div>
            </div>
            <div className="flex gap-4 sm:hidden text-white/60">
              <button onClick={() => step(-1)} aria-label="Previous photo">←</button>
              <button onClick={() => step(1)} aria-label="Next photo">→</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
