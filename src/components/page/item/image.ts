import { BaseComponent } from '../../component.js';

export class ImageComponent extends BaseComponent<HTMLElement> {
    constructor(title: string, url: string, body: string) {
        super(`<section class="image">
                <div class="image__holder"><img src="" alt="" class="image__thumnail"></div>
                <h2 class="image__title"></h2>
                <p class="image__body"></p>
            </section>`)

        const imageElement = this.element.querySelector('.image__thumnail')! as HTMLImageElement;
        imageElement.src = url;
        imageElement.alt = title;

        const titleElement = this.element.querySelector('.image__title')! as HTMLHeadingElement;
        titleElement.textContent = title;

        const bodyElement = this.element.querySelector('.image__body')! as HTMLParagraphElement;
        bodyElement.textContent = body;
    }


}