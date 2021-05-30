import { BaseComponent } from '../../component.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
    constructor(title: string, url: string, body: string) {
        super(`<section class="video">
                <div class="video__player"><iframe class="video__iframe"></iframe></div>
                <h2 class="video__title"></h2>
                <p class="video__body"></p>
            </section>`)

        const iframe = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
        iframe.src = this.convertToEmbeddedURL(url) // url -> videoId


        const titleElement = this.element.querySelector('.video__title')! as HTMLHeadingElement;
        titleElement.textContent = title

        const bodyElement = this.element.querySelector('.video__body')! as HTMLParagraphElement;
        bodyElement.textContent = body;
    }

    private convertToEmbeddedURL(url: string): string {
        const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
        const match = url.match(regExp);
        const videoId = match ? match[1] || match[2] : undefined;
        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}`
        }
        return url;
    }
}
