import {Key} from './key.js';

export class Keyboard {
    constructor(keysProperties) {
        this.element = document.createElement('div');
        this.element.classList.add('keyboard');
        this.keys = [];
        keysProperties.forEach(row => {
            const rowElement = document.createElement('div');
            rowElement.classList.add('row');
            row.forEach(keyProperties => {
                const key = new Key(keyProperties);
                rowElement.append(key.element);
                this.keys.push(key);
            })
            this.element.append(rowElement);
        });

        this.uppercaseMode = false;


    }

    find(keyCode) {
        return this.keys.find((item) => item.properties.code === keyCode);
    }

    enableUppercaseMode() {
        this.uppercaseMode = true;
        this.keys.forEach((key) => key.toUpperCase())
    }

    disableUppercaseMode() {
        this.uppercaseMode = false;
        this.keys.forEach((key) => key.toLowerCase())
    }

    toggleUpperCaseMode() {
        if (this.uppercaseMode) {
            this.disableUppercaseMode();
        } else {
            this.enableUppercaseMode();    
        }
    }


}