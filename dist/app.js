import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { PageComponent } from './components/page/page.js';
import { TodoComponent } from './components/page/item/todo.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent('Image', 'http://picsum.photos/600/300', '이미지이미지');
        image.attachTo(appRoot, 'beforeend');
        const note = new NoteComponent('Note', 'note body');
        note.attachTo(appRoot, 'beforeend');
        const todo = new TodoComponent('Todo', 'Todo body');
        todo.attachTo(appRoot, 'beforeend');
    }
}
new App(document.querySelector('.document'));
