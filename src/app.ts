import { Composable, PageComponent, PageItemComponent } from './components/page/page.js';
import { Component } from './components/component.js';
import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { InputDialog } from './components/dialog/dialog.js';
import { MediaSectionInput } from './components/dialog/input/media-input.js';
import { textSectionInput } from './components/dialog/input/text-input.js';

class App {
    private readonly page: Component & Composable;
    constructor(appRoot: HTMLElement, dialogRoot: HTMLElement) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot)

        const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
        imageBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const inputSection = new MediaSectionInput();
            dialog.addChild(inputSection)
            dialog.attachTo(dialogRoot);

            dialog.setOncloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnsubmitListener(() => {
                const image = new ImageComponent(inputSection.title, inputSection.url, inputSection.body);
                this.page.addChild(image);
                dialog.removeFrom(dialogRoot);
            });
        })

        const videoBtn = document.querySelector('#new-video')! as HTMLButtonElement;
        videoBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const inputSection = new MediaSectionInput();
            dialog.addChild(inputSection)
            dialog.attachTo(dialogRoot);

            dialog.setOncloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnsubmitListener(() => {
                const video = new VideoComponent(inputSection.title, inputSection.url, inputSection.body);
                this.page.addChild(video)
                dialog.removeFrom(dialogRoot);
            });
        })

        const noteBtn = document.querySelector('#new-note')! as HTMLButtonElement;
        noteBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const inputSection = new textSectionInput();
            dialog.addChild(inputSection)
            dialog.attachTo(dialogRoot);

            dialog.setOncloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnsubmitListener(() => {
                const note = new NoteComponent(inputSection.title, inputSection.body);
                this.page.addChild(note)
                dialog.removeFrom(dialogRoot);
            });
        })

        const todoBtn = document.querySelector('#new-todo')! as HTMLButtonElement;
        todoBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const inputSection = new textSectionInput();
            dialog.addChild(inputSection)
            dialog.attachTo(dialogRoot);

            dialog.setOncloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnsubmitListener(() => {
                const note = new TodoComponent(inputSection.title, inputSection.body);
                this.page.addChild(note)
                dialog.removeFrom(dialogRoot);
            });
        })
    }
}

new App(document.querySelector('.document')! as HTMLElement, document.body)