import {getPostsData} from "./api.js";
import dataLocal from "./data.js";

const FILTER_URL_PARAM = 'filter'

const filterBtn = document.querySelector('.header__form')
const input = document.querySelector('.header__input')
const postsContainer = document.querySelector('div.main-wrapper')


let allPosts;

try {
    allPosts = await getPostsData()
    console.log('Successfully loaded posts from api.')
} catch {
    console.warn('Couldn\'t get posts json from server. Using local copy.')
    allPosts = dataLocal
}


export {
    filterBtn,
    input,
    postsContainer,
    allPosts,
    FILTER_URL_PARAM
}