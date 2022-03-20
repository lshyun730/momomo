import { BaseComponent } from '../../component.js';
export class ImageComponent extends BaseComponent {
    constructor(url, body) {
        super(`<section class="image">
                <div class="image__holder"><img src="" alt="" class="image__thumbnail"></div>
                <div class="image__desc">
                    <h2 class="title image__title"><span>IMAGE</span></h2>
                    <p class="image__body"></p>
                </div>
            </section>`);
        const imageElement = this.element.querySelector('.image__thumbnail');
        imageElement.src = url;
        const bodyElement = this.element.querySelector('.image__body');
        bodyElement.textContent = body;
    }
}
