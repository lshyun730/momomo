import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { PageComponent } from './components/page/page.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
class App {
    private readonly page: PageComponent;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot)

        const image = new ImageComponent('Image', 'http://picsum.photos/600/300', 'image body');
        image.attachTo(appRoot, 'beforeend');

        const note = new NoteComponent('Note', 'note body');
        note.attachTo(appRoot, 'beforeend');

        const todo = new TodoComponent('Todo', 'todo body');
        todo.attachTo(appRoot, 'beforeend');

        const video = new VideoComponent('Video', 'https://www.youtube.com/embed/7pp3QuCqlhw', ' video body')
        video.attachTo(appRoot, 'beforeend');

    }
}

new App(document.querySelector('.document')! as HTMLElement)