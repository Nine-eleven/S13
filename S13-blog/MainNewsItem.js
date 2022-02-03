export class MainNewsItem {

    constructor(newsData) {
        this.updateCounter = this.updateCounter.bind(this);
        ({id: this.id, title: this.title, description: this.description} = newsData);
        this.count = 0;
        this.createCounter();
        this.createElement();
        return this.elem;
    }

    createElement() {
        this.elem = document.createElement('figure');
        this.elem.classList.add('main-news__post', 'news-post');
        this.elem.innerHTML = `
        <div class="main-news__image-block">
            <img src="./assets/images/post${this.id}.jpg" alt="photo">
        </div>
        <figcaption class="news-post__post-title">
            ${this.title}
            <p class="news-post__post-description">${this.description}</p>
        </figcaption>
        `

        this.elem.firstElementChild.prepend(this.countHTMLElem)
        this.elem.addEventListener('click', this.updateCounter)
    }

    createCounter() {
        this.countHTMLElem = document.createElement('p');
        this.countHTMLElem.classList.add('news-post__views-counter', 'main-news__counter');
        this.countHTMLElem.innerHTML = `${this.count}`
    }

    updateCounter() {
        this.count += 1;
        this.countHTMLElem.innerText = `${this.count}`
    }
}