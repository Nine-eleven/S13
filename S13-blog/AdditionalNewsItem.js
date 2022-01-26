export class AdditionalNewsItem {

    constructor(newsData) {
        this.updateCounter = this.updateCounter.bind(this);
        this.id = newsData.id;
        this.title = newsData.title;
        this.description = newsData.description;
        this.count = 0;
        this.createCounter();
        this.createElement();
        return this.elem;
    }

    createElement() {

        this.elem = document.createElement('article');
        this.elem.classList.add('additional-news__post', 'news-post');
        this.elem.innerHTML = `
        <p class="news-post__post-title">${this.title}</p>
        <p class="news-post__post-description">${this.description}</p>
        `

        this.elem.prepend(this.countHTMLElem)
        this.elem.addEventListener('click', this.updateCounter)
    }

    createCounter() {
        this.countHTMLElem = document.createElement('p');
        this.countHTMLElem.classList.add('news-post__views-counter', 'additional-news__counter');
        this.countHTMLElem.innerHTML = `${this.count}`
    }

    updateCounter() {
        this.count += 1;
        this.countHTMLElem.innerText = `${this.count}`
    }
}