export class Key {
    constructor(properties) {
        this.properties = properties;
        this.element = document.createElement('div');
        this.element.classList.add('keyboard_key-container');
        const button = document.createElement('button');
        button.classList.add('keyboard_key');
        if (this.isDarkButton(this.properties)) {
            button.classList.add('keyboard_key__dark');
        }

        let currentLanguage = 'eng';
        // data-set keyCode add
        

        if (this.isInsertButton(this.properties)) {
            button.textContent = this.properties[currentLanguage].key;
        } else {
            button.textContent = this.properties.eng.key;
        }
        

        this.element.append(button);

        if (
            this.properties.code === 'Backspace' 
            || this.properties.code === 'Enter' 
            || this.properties.code === 'CapsLock') {
            this.element.classList.add('keyboard_key-container__extra-semi-big-wide');
        }

        if (this.properties.code === 'ShiftLeft') {
            this.element.classList.add('keyboard_key-container__extra-big-wide');
        }

        if (
            this.properties.code === 'Tab' 
            || this.properties.code === 'ControlLeft' 
            || this.properties.code === 'ControlRight'
            || this.properties.code === 'ArrowUp'
            || this.properties.code === 'ArrowDown' 
            || this.properties.code === 'ArrowLeft'
            || this.properties.code === 'ArrowRight'
            || this.properties.code === 'ShiftRight'
            ) {
            this.element.classList.add('keyboard_key-container__extra-middle-wide');
        }

        if (this.properties.code === 'Space') {
            this.element.classList.add('keyboard_key-container__space');
        }

        this.button = button;
        this.language = currentLanguage;

    }

    isDarkButton(keyProperties) {
        if (
        keyProperties.code === 'Tab'
        || keyProperties.code === 'Shift'
        || keyProperties.code === 'Space'
        || keyProperties.code === 'Backquote'
        || keyProperties.code === 'Enter'
        || !this.isInsertButton(keyProperties)
        ) {
            return true;
        } 
        return false;
    } 

    isInsertButton(keyProperties) {
        if (keyProperties.event === 'insert') {
            return true;
        }
        return false;
    }

    setActive() {
        this.element.classList.add('_active');
    }

    setUnactive() {
        this.element.classList.remove('_active');
    }

    toUpperCase() {
        if (this.isInsertButton(this.properties)) {
            this.button.textContent = this.properties[this.language].shiftKey;
        } 
    }

    toLowerCase() {
        if (this.isInsertButton(this.properties)) {
            this.button.textContent = this.properties[this.language].key;
        } 
    }

    toRussianLayout() {
        if (this.isInsertButton(this.properties)) {
            this.language = 'rus';
            this.button.textContent = this.properties[this.language = 'rus'].key;
        }
    }

    toEnglishLayout() {
        if (this.isInsertButton(this.properties)) {
            this.language = 'eng';
            this.button.textContent = this.properties[this.language = 'eng'].key;
        }
    }
}



































// isCapsLockButton (keyProperties) {
    //     if (keyProperties.event === 'CapsLock') {
    //         return true;
    //     }
    //     return false;
    // }

    // isEraseButton (keyProperties) {
    //     if (keyProperties.event === 'erase') {
    //         return true;
    //     }
    //     return false;
    // }

    // isShiftButton (keyProperties) {
    //     if (keyProperties.event === 'shift') {
    //         return true;
    //     }
    //     return false;
    // }

    // isCursorMoveButton (keyProperties) {
    //     if (
    //     keyProperties.event === 'cursorUp'
    //     || keyProperties.event === 'cursorLeft'
    //     || keyProperties.event === 'cursorDown'
    //     || keyProperties.event === 'cursorRight'
    //     ) {
    //         return true;
    //     }
    //     return false;
    // }

    // isControlButton (keyProperties) {
    //     if (keyProperties.event === 'control') {
    //         return true;
    //     }
    //     return false;
    // }