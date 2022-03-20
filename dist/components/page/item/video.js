import { BaseComponent } from '../../component.js';
export class VideoComponent extends BaseComponent {
    constructor(url, body) {
        super(`<section class="video">
                <div class="video__player"><iframe class="video__iframe"></iframe></div>
                <div class="video__desc">
                    <h2 class="title video__title"><span>VIDEO</span></h2>
                    <p class="video__body"></p>
                </div>
            </section>`);
        const iframe = this.element.querySelector('.video__iframe');
        iframe.src = this.convertToEmbeddedURL(url);
        const bodyElement = this.element.querySelector('.video__body');
        bodyElement.textContent = body;
    }
    convertToEmbeddedURL(url) {
        const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
        const match = url.match(regExp);
        const videoId = match ? match[1] || match[2] : undefined;
        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return url;
    }
}
