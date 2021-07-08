import { BaseComponent } from '../../component.js';

export class TodoComponent extends BaseComponent<HTMLElement> {
    constructor(todo: string) {
        super(`<section class="todo">
                <h2 class="title todo__title"><span>TODO</span></h2>
                <input type="checkbox" id="todo-checkbox">
                <label for="todo-checkbox" class="todo-label"></label>
            </section>`);


        const todoElement = this.element.querySelector('.todo-label')! as HTMLInputElement;
        todoElement.textContent = todo;
    }
}