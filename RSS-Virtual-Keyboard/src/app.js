import {Keyboard} from './keyboard.js';
import {KEYBOARD_KEYS_PROPERTIES} from './variables.js';

export class App {
    constructor() {
        const body = document.body;
        this.header = document.createElement('header');

        this.main = document.createElement('main');
        this.main.classList.add('main');
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        const input = document.createElement('div');
        input.classList.add('input_container');
        input.innerHTML = `
            <input class="input" type="text">
        `;
        wrapper.append(input);
        this.keyboard = new Keyboard(KEYBOARD_KEYS_PROPERTIES);
        wrapper.append(this.keyboard.element);
        this.main.append(wrapper);

        this.footer = document.createElement('footer');

        body.append(this.main);

        this.capsLock = false;

        // this.language = true;

        document.addEventListener('keydown', (event) => {
            this.keyboard.find(event.code)?.setActive();
            if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
                if (this.capsLock) {
                    this.keyboard.enableUppercaseMode();
                } else {
                    this.keyboard.disableUppercaseMode()
                }
            }
            if (event.code === 'CapsLock') {
                this.keyboard.toggleUpperCaseMode();
                this.capsLock = !this.capsLock;
            }
            if (event.code === 'ControlLeft') {
                this.keyboard.toggleLanguage();
                // this.language = !this.language;
            }

        })
        
        document.addEventListener('keyup', (event) => {
            this.keyboard.find(event.code)?.setUnactive();
            if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
                if (this.capsLock) {
                    this.keyboard.disableUppercaseMode()
                } else {
                    this.keyboard.enableUppercaseMode()
                }
            }

        })
    }
    
}

