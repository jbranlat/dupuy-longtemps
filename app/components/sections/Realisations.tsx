'use client';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import FocusTitle from '../utils/FocusTitle';

const projects = [
  {
    title: "Renovation d'une salle de bain",
    image: "/realisation/image1.png",
     },
  {
    title: "Installation d'une chaudière",
    image: "/realisation/image2.png",
   },
  {
    title: "Réparation fuite d'eau",
    image: "/realisation/image3.png",
  },
  {
    title: "Pose d'une chauffe-eau",
    image: "/realisation/image4.png",
  },
  {
    title: "Entretien annuel d'une chaudière",
    image: "/realisation/image5.png",
  }
];

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'center',
    skipSnaps: false
  });

  const [activeDescription, setActiveDescription] = useState<number | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setActiveDescription(null);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="realisations" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <FocusTitle>
        <h2 className="text-3xl md:text-4xl font-extrabold text-plomb-base mb-4">Nos Réalisations</h2>
        </FocusTitle>
             </div>

      <div className="embla" ref={emblaRef}>
        <div className="flex">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_40%] px-4 min-w-0"
            >
              <div
                className="relative h-[480px] w-full overflow-hidden rounded-[2rem] shadow-2xl group"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
                  priority={index === 0}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>

                <div className={`absolute bottom-8 left-8 right-8 text-white transition-all duration-300 ${activeDescription === index ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
              
          
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-8 mt-16">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all ${canScrollPrev
              ? 'bg-plomb-eau border-plomb-eau text-white hover:bg-plomb-base hover:border-plomb-base hover:text-white shadow-md'
              : 'border-slate-100 text-slate-200 cursor-not-allowed'
            }`}
        >
          <ChevronLeft className="w-7 h-7" />
        </button>

        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all ${canScrollNext
              ? 'bg-plomb-eau border-plomb-eau text-white hover:bg-plomb-base hover:border-plomb-base hover:text-white shadow-md'
              : 'border-slate-100 text-slate-200 cursor-not-allowed'
            }`}
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      </div>
    </section>
  );
}
