import { Component } from './components/component.js';
import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { Composable, PageComponent, PageItemComponent } from './components/page/page.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';

class App {
    private readonly page: Component & Composable;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot)

        const image = new ImageComponent('Image', 'http://picsum.photos/600/300', 'image body');
        this.page.addChild(image)

        const note = new NoteComponent('Note', 'note body');
        this.page.addChild(note);

        const todo = new TodoComponent('Todo', 'todo body');
        this.page.addChild(todo);

        const video = new VideoComponent('Video', 'https://www.youtube.com/embed/7pp3QuCqlhw', ' video body')
        this.page.addChild(video);

    }
}

new App(document.querySelector('.document')! as HTMLElement)