import * as cheerio from 'cheerio';

const BASE_URL = 'https://aniwatchtv.to';

const scrape = async (url: string, config?: RequestInit) => {
  const response = await fetch(url, config);
  const html = await response.text();
  return html;
};

//? Home Page:
export const getHomePage = async () => {
  const url = `${BASE_URL}/home`;
  const html = await scrape(url);
  const $ = cheerio.load(html);

  //? Featured Episodes:
  const featured_episodes = $('#slider .swiper-slide > .deslide-item')
    .toArray()
    .map((el) => ({
      image: $(el).find('img').attr('data-src') || '',
      title: $(el).find('.desi-head-title').text().trim(),
      description:
        $(el).find('.desi-description').text().trim().replaceAll('\n', ' ') ||
        '',
      rank: $(el).find('.desi-sub-text').text().trim(),
      watch_link: $(el).find('.desi-buttons a').attr('href') || '',
    }));

  //? Trending Animes:
  const trending_animes = $('#trending-home .swiper-slide > .item')
    .toArray()
    .map((el) => ({
      image: $(el).find('.film-poster img').attr('data-src') || '',
      title: $(el).find('.film-title').text().trim(),
      rank: $(el).find('.number >span').text().trim(),
      link: $(el).find('a.film-poster').attr('href') || '',
    }));

  //? Latest Episode
  const latest_episodes = $('.film_list .flw-item')
    .toArray()
    .map((el) => ({
      image: $(el).find('.film-poster img').attr('data-src') || '',
      title: $(el).find('.film-detail .dynamic-name').text().trim(),
      rank: $(el).find('.number >span').text().trim(),
      link: $(el).find('a.film-poster-ahref').attr('href') || '',
    }));

  return {
    featured_episodes,
    trending_animes,
    latest_episodes,
  };
};
