'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  featured_episodes: {
    image: string;
    title: string;
    description: string;
    rank: string;
    watch_link: string;
  }[];
};

export default function HomeSlider({ featured_episodes }: Props) {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className='w-full'
    >
      <CarouselContent>
        {featured_episodes.map((ep) => (
          <CarouselItem
            key={ep.watch_link}
            className='w-screen h-[50vh] md:h-[70vh] p-0'
          >
            <Link href={ep.watch_link}>
              <Image
                className='w-full h-full object-cover'
                src={ep.image}
                alt={ep.title}
                width={1366}
                height={768}
              />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
