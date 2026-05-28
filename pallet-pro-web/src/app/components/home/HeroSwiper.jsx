"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const images = [
  "https://placehold.co/1600x700",
  "https://placehold.co/1600x700",
  "https://placehold.co/1600x700",
];

export default function HeroSwiper() {

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
      }),
    ]
  );

  return (
    <div className="relative w-full container mx-auto">

      <div
        className="overflow-hidden rounded-3xl"
        ref={emblaRef}
      >
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-full"
            >
              <img
                src={image}
                alt=""
                className="h-[500px] w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}