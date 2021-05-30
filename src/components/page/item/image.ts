import { BaseComponent } from '../../component.js';

export class ImageComponent extends BaseComponent<HTMLElement> {
    constructor(title: string, url: string, disc: string) {
        super(`<section class="image">
                <div class="image__holder"><img src="" alt="" class="image__thumnail"></div>
                <p class="image__title"></p>
                <p class="image__disc"></p>
            </section>`)

        const imageElement = this.element.querySelector('.image__thumnail')! as HTMLImageElement;
        imageElement.src = url;
        imageElement.alt = title;

        const titleElement = this.element.querySelector('.image__title')! as HTMLParagraphElement;
        titleElement.textContent = title;

        const discElement = this.element.querySelector('.image__disc')! as HTMLParagraphElement;
        discElement.textContent = disc;
    }


}