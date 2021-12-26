import axios from "axios";
import cheerio from "cheerio";

const fetchBbcNews = async () => {
  const response = await axios.get('https://www.bbc.com');
  const html = response.data;
  const $ = cheerio.load(html);

  let titles = [];

  $('media-list__item > media__content > h3 > a').each((_idx, el) => {
    let title = $(el).text()
    titles.push(title)
  });

  console.log(titles);
  
}

fetchBbcNews();