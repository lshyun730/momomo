import { BaseComponent } from '../../component.js';

export class NoteComponent extends BaseComponent<HTMLElement> {
    constructor(body: string) {
        super(`<section class="note">
                <h2 class="title note__title"><span>NOTE</span></h2>
                <p class="note__body"></p>
            </section>`);


        const bodyElement = this.element.querySelector('.note__body')! as HTMLParagraphElement;
        bodyElement.textContent = body;
    }
}