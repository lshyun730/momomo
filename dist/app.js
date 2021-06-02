import { PageComponent, PageItemComponent } from './components/page/page.js';
import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { InputDialog } from './components/dialog/dialog.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        const image = new ImageComponent('Image', 'http://picsum.photos/600/300', 'image body');
        this.page.addChild(image);
        const note = new NoteComponent('Note', 'note body');
        this.page.addChild(note);
        const todo = new TodoComponent('Todo', 'todo body');
        this.page.addChild(todo);
        const video = new VideoComponent('Video', 'https://www.youtube.com/embed/7pp3QuCqlhw', ' video body');
        this.page.addChild(video);
        const imageBtn = document.querySelector('#new-image');
        imageBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            dialog.setOncloseListener(() => {
                dialog.removeFrom(document.body);
            });
            dialog.setOnsubmitListener(() => {
                dialog.removeFrom(document.body);
            });
            dialog.attachTo(document.body);
        });
    }
}
new App(document.querySelector('.document'));
