import { ImageComponent } from './components/page/item/image.js';
import { PageComponent } from './components/page/page.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent('Image', 'http://picsum.photos/600/300', '이미지이미지');
        image.attachTo(appRoot, 'beforeend');
    }
}
new App(document.querySelector('.document'));
