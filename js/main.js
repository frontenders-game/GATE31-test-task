import {writeFilter} from "./storage-utils.js";
import {
    renderFromData,
    updateSelected,
    updateFilter,
    filterData
} from './render.js'
import {updateAddressBar} from './history-api.js'
import {
    filterBtn,
    input,
    postsContainer,
    FILTER_URL_PARAM} from "./shared.js";

const renderAll = function () {
    updateFilter()
    renderFromData(filterData())
    updateAddressBar()
    updateSelected()
}

const renderOnInput = function () {
    const fmtInput = input.value.toLowerCase().trim()
    postsContainer.innerHTML = ''
    writeFilter(fmtInput)
    renderAll()
}

// update filter if page loaded with filter=
const filterFromUrl = new URL(window.location.href).searchParams.get(FILTER_URL_PARAM)
if (filterFromUrl) writeFilter(filterFromUrl)

// Initial generation of all post cards and state
renderAll()

// add listener that filters content
filterBtn.addEventListener('submit', evt => {
    evt.preventDefault()
    renderOnInput()
})

// show all after input has been deleted 
input.addEventListener('keydown', (evt) => {
    if (evt.code === 'Backspace' && evt.target.value.length === 1) renderOnInput()
})


