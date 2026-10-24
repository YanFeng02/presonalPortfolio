import type { Metadata } from 'next';
import Image from 'next/image';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Gallery from './Gallery';
import { photos, portrait } from './data';

export const metadata: Metadata = {
  title: 'Photos · Feng Yan',
  description: 'Photography by Feng Yan: London, Shanghai, Yunnan and Sydney.',
};

export default function PhotosPage() {
  return (
    <>
      <Nav current="/photos" />
      <main>
        <div className="max-w-2xl mx-auto px-5 sm:px-6">
          <section className="pt-16 pb-12 grid sm:grid-cols-[1fr_220px] gap-8 items-end">
            <div>
              <h1 className="text-[28px] font-semibold tracking-tight">Photos</h1>
              <p className="mt-4 leading-[1.75]">
                I take photos when I travel, mostly cities, the coast and whatever the light is
                doing early or late in the day. These are from London, Shanghai, Yunnan and Sydney.
              </p>
            </div>
            <figure>
              <Image
                src={portrait.src}
                alt={portrait.alt}
                width={portrait.width}
                height={portrait.height}
                sizes="220px"
                className="w-full h-auto rounded-lg ring-1 ring-line"
                priority
              />
              <figcaption className="mt-2 text-[12px] text-muted">Me, on Sydney Harbour</figcaption>
            </figure>
          </section>
        </div>

        <div className="max-w-5xl mx-auto px-5 sm:px-6 pb-12">
          <Gallery photos={photos} />
        </div>

        <div className="max-w-2xl mx-auto px-5 sm:px-6">
          <Footer />
        </div>
      </main>
    </>
  );
}
