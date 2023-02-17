import {
    addPostToSelected,
    removePostFromSelected,
    readState
} from "./storage-utils.js";
import {allPosts, input, postsContainer} from "./shared.js";

const selectedText = document.querySelector('.header__selected')

const filterData = function () {
    const currentState = readState()
    if (!currentState.filter) return allPosts
    return allPosts.filter(item => item.title.toLowerCase().includes(currentState.filter))
}

const updateSelected = function () {
    const currentState = readState()
    const arrFiltered = filterData()
    const resultArr = arrFiltered.filter(item => currentState.selected.includes(item.id))
    selectedText.textContent = `Selected: ${resultArr.length}`
}

const updateFilter = function () {
    const currentState = readState()
    input.value = currentState.filter
}

const createPostCard = function (postObj) {
    /**
     {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\n' +
            'suscipit recusandae consequuntur expedita et cum\n' +
            'reprehenderit molestiae ut ut quas totam\n' +
            'nostrum rerum est autem sunt rem eveniet architecto'
  }
     */
    const {id, title, body} = postObj
    const card = document.createElement('div')
    card.className = 'post'
    card.id = id
    const currentState = readState()
    const isChecked = currentState.selected.includes(id)
    let isCheckedHTML = ''
    if (isChecked) {
        isCheckedHTML = ' checked'
        card.classList.add('selected')
    }

    card.innerHTML = `<h3 class='post__title'>${title}</h3>
                      <p class='post__body'>${body}</p>
                      <input class="post__checkbox" type="checkbox"${isCheckedHTML}>`
    const checkbox = card.querySelector('.post__checkbox')
    checkbox.addEventListener('click', evt => {
        if (evt.target.checked) {
            addPostToSelected(id)
            card.classList.add('selected')
        } else {
            removePostFromSelected(id)
            card.classList.remove('selected')
        }
        updateSelected()

    })
    return card
}
const renderFromData = dataArr => dataArr.forEach(postItem => postsContainer.append(createPostCard(postItem)))

export {
    createPostCard,
    updateSelected,
    updateFilter,
    filterData,
    renderFromData
}