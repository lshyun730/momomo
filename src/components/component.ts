export interface Component {
    attachTo(parent: HTMLElement, position?: InsertPosition): void;
}

// * Encapsulate the HTML element creation

export class BaseComponent<T extends HTMLElement> implements Component {
    protected readonly element: T;

    constructor(htmlString: string) {
        const templete = document.createElement('template');
        templete.innerHTML = htmlString;
        this.element = templete.content.firstElementChild! as T;
    }

    attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element)
    }
}