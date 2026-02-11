"use client";

import Image from "next/image";
import { useState } from "react";

interface PhotoCarouselProps {
  photos: string[];
}

export default function PhotoCarousel({photos}: PhotoCarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % photos.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-xl mx-auto mt-8 md:mt-12">
      {/* IMAGE */}
      <div className="overflow-hidden rounded-2xl shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {photos.map((src, index) => (
            <div
              key={index}
              className="min-w-full relative aspect-video sm:aspect-4/3 md:aspect-video rounded-xl"
            >
              <Image
                src={src}
                alt={`Yoga ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* LEFT BUTTON */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary/60 text-white w-10 h-10 rounded-full flex items-center justify-center"
      >
        ‹
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary/60 text-white w-10 h-10 rounded-full flex items-center justify-center"
      >
        ›
      </button>
    </div>
  );
}
