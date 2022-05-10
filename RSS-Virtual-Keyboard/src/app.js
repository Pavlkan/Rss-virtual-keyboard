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
        const textarea = document.createElement('div');
        textarea.classList.add('textarea_container');
        textarea.innerHTML = `
            <textarea class="textarea" type="text" autofocus>
        `;
        const selectedTextArea = textarea.querySelector('textarea');
        // alert(selectedTextArea)
        // selectedTextArea.setAttribute('autofocus', 'autofocus');

        wrapper.append(textarea);
        this.keyboard = new Keyboard(KEYBOARD_KEYS_PROPERTIES);
        wrapper.append(this.keyboard.element);
        this.main.append(wrapper);

        this.footer = document.createElement('footer');

        body.append(this.main);

        this.capsLock = false;
        this.shift = false;
        this.alt = false;


        document.addEventListener('keydown', (event) => {
            const key = this.keyboard.find(event.code);
            key?.setActive();
            if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
                if (!this.capsLock) {
                    this.keyboard.enableUppercaseMode();
                } else {
                    this.keyboard.disableUppercaseMode();
                }
                this.shift = true;
            }
            if (event.code === 'CapsLock') {
                this.keyboard.toggleUpperCaseMode();
                this.capsLock = !this.capsLock;
            }
            if(event.code === 'AltLeft') {
                this.alt = true;
            }
            if (this.shift && this.alt) {
                this.keyboard.toggleLanguage();
            }
            if (event.code === 'Tab') {
                selectedTextArea.value = selectedTextArea.value + key.properties.eng.key;
            }
            // const selectedKeyElementKeyboard = event.target.textContent;
            // alert(event.target.querySelector('button').dataset.value)
            
            // selectedTextArea.value = selectedTextArea.value + selectedKeyElementKeyboard;

        })
        
        document.addEventListener('keyup', (event) => {
            if (event.code !== 'CapsLock') {
                this.keyboard.find(event.code)?.setUnactive();
            }
            if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
                if (!this.capsLock) {
                    this.keyboard.disableUppercaseMode()
                } else {
                    this.keyboard.enableUppercaseMode()
                }
                this.shift = false;
            }
            if(event.code === 'AltLeft') {
                this.alt = false;
            }
            selectedTextArea.focus();

        })
        
        this.keyboard.element.addEventListener('click', (event) => {
            const selectedKeyElement = event.target.closest('.keyboard_key');
            if (!selectedKeyElement) {
                return
            }
            const currentKeyCode = selectedKeyElement.dataset.code;
            const key = this.keyboard.find(currentKeyCode);
            if (currentKeyCode === 'ShiftLeft' || currentKeyCode === 'ShiftRight') {
                if (!this.capsLock) {
                    this.keyboard.enableUppercaseMode();
                } else {
                    this.keyboard.disableUppercaseMode();
                }
                this.shift = true;
            }
            if (currentKeyCode === 'CapsLock') {
                this.keyboard.toggleUpperCaseMode();
                this.capsLock = !this.capsLock;
            }
            if (currentKeyCode === 'AltLeft') {
                this.alt = true;
            }
            if (this.shift && this.alt) {
                this.keyboard.toggleLanguage();
            }
            
            if (key.properties.event === 'insert') {
                selectedTextArea.value = selectedTextArea.value + selectedKeyElement.textContent;  
            } else if (key.properties.event === 'Enter' || key.properties.event === 'Tab') {
                selectedTextArea.value = selectedTextArea.value + key.properties.eng.key;
            }
             
        })
        
        document.addEventListener('click', (event) => {
            selectedTextArea.focus();
        })

    }

}

