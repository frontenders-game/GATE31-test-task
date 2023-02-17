const getPage = async function (limit = 30) {
    const url = `https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=${limit}`
    const response = await fetch(url);
    return await response.json()
}

export const getPostsData = async function () {
    return await getPage()
}


