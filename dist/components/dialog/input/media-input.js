import { BaseComponent } from './../../component.js';
export class MediaSectionInput extends BaseComponent {
    constructor() {
        super(`<div>
                <div class="form__container">
                    <label for="url">URL</label>
                    <input type="text" id="url">
                </div>
                <div class="form__container">
                    <label for="body">BODY</label>
                    <textarea type="text" row="3" id="body"></textarea>
                </div>
            </div>`);
    }
    get url() {
        const element = this.element.querySelector('#url');
        return element.value;
    }
    get body() {
        const element = this.element.querySelector('#body');
        return element.value;
    }
}
