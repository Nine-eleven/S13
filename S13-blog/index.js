'use strict'
import mainNewsData from './main-news-data.js';
import additionalNewsData from './additional-news-data.js';
import { MainNewsItem } from './MainNewsItem.js';
import { AdditionalNewsItem } from './AdditionalNewsItem.js';

const mainNewsBlock = document.querySelector('.news__main-block');
const additionalNewsBlock = document.querySelector('.news__additional-block');

const mainNews = mainNewsData.map((news) => {
    const elem = new MainNewsItem(news);
    return elem;
})



const additionalNews =  additionalNewsData.map((news) => {
    const elem = new AdditionalNewsItem(news);
    return elem;
})

mainNewsBlock.append(...mainNews);
additionalNewsBlock.append(...additionalNews);