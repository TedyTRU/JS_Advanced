function getArticleGenerator(articles) {
    const artic = articles;
    const resultDiv = document.getElementById('content');

    return () => {
        if (artic.length != 0) {
           const article = document.createElement('article');
           article.textContent = artic.shift();
           resultDiv.appendChild(article);

        }
    }
}
