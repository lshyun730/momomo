export class BaseComponent {
    constructor(htmlString) {
        const templete = document.createElement('template');
        templete.innerHTML = htmlString;
        this.element = templete.content.firstElementChild;
    }
    attachTo(parent, position = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
    }
    removeFrom(parent) {
        if (parent !== this.element.parentElement) {
            throw new Error('Parent mismatch!');
        }
        parent.removeChild(this.element);
    }
    attach(component, position) {
        component.attachTo(this.element, position);
    }
}
