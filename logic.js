'use strict';

/*
Berechne die Weite der Scrollbars und mache sie dem CSS zugänglich.
Quelle: https://stackoverflow.com/a/13382873
*/
window.onload = () => {
    let scrollbarWidth; {
        const outer = document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.overflow = 'scroll';
        outer.style.msOverflowStyle = 'scrollbar';
        const inner = document.createElement('div');
        outer.appendChild(inner);
        document.body.appendChild(outer);
        scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
        outer.remove();
    }
    document.body.style.setProperty(
        '--scrollbar-width',
        `${scrollbarWidth}px`
    );
};
