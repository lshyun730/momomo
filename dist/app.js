import { PageComponent, PageItemComponent } from './components/page/page.js';
import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { InputDialog } from './components/dialog/dialog.js';
import { MediaSectionInput } from './components/dialog/input/media-input.js';
import { TextSectionInput } from './components/dialog/input/text-input.js';
class App {
    constructor(appRoot, dialogRoot) {
        this.dialogRoot = dialogRoot;
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        this.bindElementToDialog('#new-image', MediaSectionInput, (input) => new ImageComponent(input.url, input.body));
        this.bindElementToDialog('#new-video', MediaSectionInput, (input) => new VideoComponent(input.url, input.body));
        this.bindElementToDialog('#new-note', TextSectionInput, (input) => new NoteComponent(input.body));
        this.bindElementToDialog('#new-todo', TextSectionInput, (input) => new TodoComponent(input.body));
        this.page.addChild(new VideoComponent('https://www.youtube.com/watch?v=ckgFvqLrjBk', 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'));
        this.page.addChild(new NoteComponent("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."));
        this.page.addChild(new ImageComponent('https://images.unsplash.com/photo-1499415479124-43c32433a620?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80', 'Lorem ipsum dolor sit amet omnis iste natus consectetur adipiscing elit.'));
        this.page.addChild(new TodoComponent('TypeScript Course!'));
    }
    bindElementToDialog(selector, InputComponent, makeSection) {
        const element = document.querySelector(selector);
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
new App(document.querySelector('.document'), document.body);
