const TODO_LS_KEY = 'blogTask'
const saveState = function (stateObj) {
    localStorage.setItem(TODO_LS_KEY, JSON.stringify(stateObj));
    return JSON.stringify(stateObj)
}
const readState = function () {
    const lsState = localStorage.getItem(TODO_LS_KEY)
    const data = lsState ?? saveState({filter: "", selected: []})
    console.log(data)
    return JSON.parse(data)
}

const writeFilter = function (filterString) {
    const currentState = readState()
    saveState({filter: filterString.toLowerCase().trim(),
        selected: currentState.selected})
}

const writeSelected = function (selectedArr) {
    const currentState = readState()
    saveState({filter: currentState.filter,
        selected: selectedArr.sort()})
}

const addPostToSelected = function (id) {
    const currentState = readState()
    currentState.selected.push(id)
    writeSelected(currentState.selected)
}
 const removePostFromSelected = function (id) {
    const currentState = readState()
    const index = currentState.selected.indexOf(id)
    if (~index) currentState.selected.splice(index, 1)
    writeSelected(currentState.selected)
}


export {
    saveState,
    readState,
    writeFilter,
    writeSelected,
    addPostToSelected,
    removePostFromSelected
}