export const categories = [
  {
    code: '',
    pic: 'https://img.icons8.com/fluent/96/000000/news.png',
    name: 'general',
  },
  {
    code: '',
    pic: 'https://img.icons8.com/fluent/96/000000/hard-working.png',
    name: 'business',
  },
  {
    code: '',
    pic: 'https://img.icons8.com/fluent/96/000000/movie-projector.png',
    name: 'entertainment',
  },
  {
    pic: 'https://img.icons8.com/fluent/96/000000/stethoscope.png',
    name: 'health',
  },
  {
    pic: 'https://img.icons8.com/fluent/96/000000/microscope.png',
    name: 'science',
  },
  {
    pic: 'https://img.icons8.com/fluent/96/000000/trophy.png',
    name: 'sports',
  },
  {
    pic: 'https://img.icons8.com/fluent/96/000000/artificial-intelligence.png',
    name: 'technology',
  },
];

export const sources = [
  {
    id: 'bbc-news',
    name: 'BBC News',
    pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png',
  },
  {
    id: 'cnn',
    name: 'CNN',
    pic: 'https://bankimooncentre.org/wp-content/uploads/2020/06/cnn-logo-square.png',
  },
  {
    id: 'fox-news',
    name: 'Fox News',
    pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/768px-Fox_News_Channel_logo.svg.png',
  },
  {
    id: 'google-news',
    name: 'Google News',
    pic: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_News_icon.png',
  },
];

const BASE_URL = 'https://newsapi.org/v2/everything';
const API_KEY = '7fde516d436c4f70b176ed075b736fa2';

export const getNewsAPI = (category, sources) => {
  const data = '2022-07-11';
  const sortBy = 'popularity';
  if (category)
    return `${BASE_URL}?q=${category}&sources=${sources}&sortBy=${sortBy}&apiKey=${API_KEY}`;
  return `${BASE_URL}?q=All&sources=${sources}&sortBy=${sortBy}&apiKey=${API_KEY}`;
};
