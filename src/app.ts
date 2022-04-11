import { Composable, PageComponent, PageItemComponent } from './components/page/page.js';
import { Component } from './components/component.js';
import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { InputDialog } from './components/dialog/dialog.js';
import { MediaSectionInput } from './components/dialog/input/media-input.js';
import { TextSectionInput } from './components/dialog/input/text-input.js';

type InputComponentConstructor<T = MediaSectionInput | TextSectionInput> = {
    new (): T;
};

class App {
    private readonly page: Component & Composable;
    constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);

        this.bindElementToDialog<MediaSectionInput>(
            '#new-image',
            MediaSectionInput,
            (input: MediaSectionInput) => new ImageComponent(input.url, input.body)
        );
        this.bindElementToDialog<MediaSectionInput>(
            '#new-video',
            MediaSectionInput,
            (input: MediaSectionInput) => new VideoComponent(input.url, input.body)
        );
        this.bindElementToDialog<TextSectionInput>(
            '#new-note',
            TextSectionInput,
            (input: TextSectionInput) => new NoteComponent(input.body)
        );
        this.bindElementToDialog<TextSectionInput>(
            '#new-todo',
            TextSectionInput,
            (input: TextSectionInput) => new TodoComponent(input.body)
        );

        // For demo :)
        this.page.addChild(
            new VideoComponent(
                'https://www.youtube.com/watch?v=LW2tNNGmycc',
                'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
            )
        );
        this.page.addChild(
            new NoteComponent(
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
            )
        );
        this.page.addChild(
            new ImageComponent(
                'https://images.unsplash.com/photo-1499415479124-43c32433a620?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
                'Lorem ipsum dolor sit amet omnis iste natus consectetur adipiscing elit.'
            )
        );
        this.page.addChild(new TodoComponent('Study TypeScript!'));
    }

    private bindElementToDialog<T extends MediaSectionInput | TextSectionInput>(
        selector: string,
        InputComponent: InputComponentConstructor<T>,
        makeSection: (input: T) => Component
    ) {
        const element = document.querySelector(selector)! as HTMLButtonElement;
        element.addEventListener('click', () => {
            const dialog = new InputDialog();
            const input = new InputComponent();
            dialog.addChild(input);
            dialog.attachTo(this.dialogRoot);

            dialog.setOncloseListener(() => {
                dialog.removeFrom(this.dialogRoot);
            });
            dialog.setOnsubmitListener(() => {
                const image = makeSection(input);
                this.page.addChild(image);
                dialog.removeFrom(this.dialogRoot);
            });
        });
    }
}

new App(document.querySelector('.document')! as HTMLElement, document.body);
