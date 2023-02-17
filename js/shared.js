import {getPostsData} from "./api.js";
import dataLocal from "./data.js";

const FILTER_URL_PARAM = 'filter'

const filterBtn = document.querySelector('.header__form')
const input = document.querySelector('.header__input')
const postsContainer = document.querySelector('div.main-wrapper')


let data;

try {
    data = await getPostsData()
    console.log('Successfully loaded posts from api.')
} catch {
    console.warn('Couldn\'t get posts json from server. Using local copy.')
    data = dataLocal
}

// create deepCopy of data
const deepCopy = arr => arr.map(postObj => Object.assign({}, postObj));
// create local copy
const allPosts = deepCopy(data)


export {
    filterBtn,
    input,
    postsContainer,
    allPosts,
    FILTER_URL_PARAM
}