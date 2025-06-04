import React, { useEffect, useState } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
  }, [images.length]);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="relative">
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className="w-full h-40 sm:h-48 object-cover rounded"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Sebelumnya"
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 text-black px-2 py-1 rounded-full"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Selanjutnya"
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 text-black px-2 py-1 rounded-full"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
