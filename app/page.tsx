import { getHomePage } from './scraper';

import HomeSlider from '@/components/home-slider';

export default async function Home() {
  const data = await getHomePage();

  return (
    <main className=''>
      <section className=''>
        <HomeSlider featured_episodes={data.featured_episodes} />
      </section>

      <div className='flex min-h-screen flex-col items-center justify-between p-24'>
        <h1 className='text-3xl font-bold underline'>
          Welcom To Anime Sphere!
        </h1>
      </div>
    </main>
  );
}
