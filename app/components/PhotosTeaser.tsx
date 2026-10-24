import Image from 'next/image';
import Section from './Section';
import { photos } from '../photos/data';

// One portrait from each city, cropped to the same frame
const picks = ['st-pauls', 'oriental-pearl-tower', 'pelican'];

export default function PhotosTeaser() {
  const shown = picks.map((slug) => photos.find((p) => p.slug === slug)!);

  return (
    <Section id="photos" title="Photos">
      <p className="leading-[1.75]">
        Outside of work I take a lot of photos, mostly when I travel. Here are a few from London,
        Shanghai and Sydney.
      </p>

      <a href="/photos" className="group mt-8 block">
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {shown.map((photo) => (
            <div key={photo.slug} className="relative aspect-[4/5] overflow-hidden rounded-lg bg-line">
              <Image
                src={`/photography/${photo.slug}.jpg`}
                alt={photo.caption}
                fill
                sizes="(min-width: 640px) 220px, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between text-[14px]">
          <span className="text-muted">{photos.length} photos</span>
          <span className="font-medium">
            See all photos <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </span>
        </div>
      </a>
    </Section>
  );
}
