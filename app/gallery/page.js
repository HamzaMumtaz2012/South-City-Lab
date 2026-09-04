'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Camera, X } from 'lucide-react';

const GALLERY_IMAGES = [
  { src: '/gallery/DSC06115.JPG', alt: 'South City Lab', featured: true },
  { src: '/gallery/DSC06116.JPG', alt: 'South City Lab laboratory' },
  { src: '/gallery/DSC06117.JPG', alt: 'South City Lab facility' },
  { src: '/gallery/DSC06120.JPG', alt: 'South City Lab team and services' },
  
  { src: '/gallery/DSC06126.JPG', alt: 'South City Lab equipment' },
  { src: '/gallery/DSC06127.JPG', alt: 'South City Lab laboratory services' },
  
  { src: '/gallery/DSC06129.JPG', alt: 'South City Lab care team' },
  
  { src: '/gallery/DSC06134.JPG', alt: 'South City Lab interior' },
  { src: '/gallery/DSC06136.JPG', alt: 'South City Lab services' },
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeLightbox = () => setSelectedIndex(null);
  const showPrevious = () => {
    setSelectedIndex((current) => (current - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };
  const showNext = () => {
    setSelectedIndex((current) => (current + 1) % GALLERY_IMAGES.length);
  };

  return (
    <main className="min-h-screen bg-gray-50 text-[#555555]">
      <section className="border-b border-gray-200 bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <span className="inline-flex items-center gap-2 rounded-md border border-red-100 bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#d30815]">
            <Camera className="h-3.5 w-3.5" aria-hidden="true" />
            South City Lab Gallery
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Inside South City Lab
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
            Explore our laboratory, facilities, and the people behind dependable diagnostic care.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GALLERY_IMAGES.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={`group relative overflow-hidden rounded-lg bg-gray-200 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d30815] focus:ring-offset-2 ${image.featured ? 'sm:col-span-2 sm:row-span-2' : ''}`}
              aria-label={`View image ${index + 1}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={800}
                className="h-full min-h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                sizes={image.featured ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 25vw, 50vw'}
              />
              <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/15" />
            </button>
          ))}
        </div>
      </section>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          onClick={closeLightbox}
        >
          <button type="button" onClick={closeLightbox} className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white" aria-label="Close image viewer">
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <button type="button" onClick={(event) => { event.stopPropagation(); showPrevious(); }} className="absolute left-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white sm:left-6" aria-label="Previous image">
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="relative h-[75vh] w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <Image src={GALLERY_IMAGES[selectedIndex].src} alt={GALLERY_IMAGES[selectedIndex].alt} fill className="object-contain" sizes="100vw" priority />
          </div>
          <button type="button" onClick={(event) => { event.stopPropagation(); showNext(); }} className="absolute right-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white sm:right-6" aria-label="Next image">
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      )}
    </main>
  );
}