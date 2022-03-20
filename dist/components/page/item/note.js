import { BaseComponent } from '../../component.js';
export class NoteComponent extends BaseComponent {
    constructor(body) {
        super(`<section class="note">
                <h2 class="title note__title"><span>NOTE</span></h2>
                <p class="note__body"></p>
            </section>`);
        const bodyElement = this.element.querySelector('.note__body');
        bodyElement.textContent = body;
    }
}
