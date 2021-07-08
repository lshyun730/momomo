import { BaseComponent } from '../../component.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
    constructor(url: string, body: string) {
        super(`<section class="video">
                <div class="video__player"><iframe class="video__iframe"></iframe></div>
                <div class="video__desc">
                    <h2 class="title video__title"><span>VIDEO</span></h2>
                    <p class="video__body"></p>
                </div>
            </section>`)

        const iframe = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
        iframe.src = this.convertToEmbeddedURL(url) // url -> videoId

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
