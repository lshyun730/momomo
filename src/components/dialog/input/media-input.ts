import { BaseComponent } from './../../component.js';

export class MediaSectionInput extends BaseComponent<HTMLElement>{
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
            </div>`)
    }

    get url(): string {
        const element = this.element.querySelector('#url')! as HTMLInputElement
        return element.value;
    }
    get body(): string {
        const element = this.element.querySelector('#body')! as HTMLInputElement
        return element.value;
    }
}