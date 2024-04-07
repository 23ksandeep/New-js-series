const apiKey = '7959e3fda5db4003b4c7b8b7e5143a7e'

const blogContainer = document.getElementById("blog-container")


async function fetchRandomNews(){
    try {
        const apiUrl = `https://newsapi.org/v2/everything?q=tesla&pageSize=20&apiKey=${apiKey}`
        const response = await fetch(apiUrl)
        const data = await response.json()
        return data.articles
    } catch (error) {
        console.error("Error fetching random news", error)
        return []
    }
}



function displayBlogs(articles) {
    blogContainer.innerHTML = ""
    articles.forEach((article) => {
        const blogCard = document.createElement("div")
        blogCard.classList.add("blog-card")
        const img = document.createElement("img")
        img.src = article.urlToImage
        img.alt = article.title
        const title = document.createElement("h2")
        title.textContent = article.title
        const description = document.createElement("p")
        description.textContent = article.description

        blogCard.appendChild(img)
        blogCard.appendChild(title)
        blogCard.appendChild(description)
        blogCard.addEventListener('click', () => {
            window.open(article.url, "_blank")
        })
        blogContainer.appendChild(blogCard)
    })
}
(async () => {
    try {
       const articles = await fetchRandomNews()
       displayBlogs(articles)
    }catch (error) {
        console.error("Error fetching random news", error);
    }
})();