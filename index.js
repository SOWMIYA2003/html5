document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded');
    addTabFocus();

    const images = document.querySelectorAll('#gallery img');

    images.forEach(img => {
        img.addEventListener('focus', () => {
            console.log('Image focused:', img.alt);
        });

        img.addEventListener('blur', () => {
            console.log('Image blurred:', img.alt);
        });

        img.addEventListener('mousemove', () => {
            console.log('Mouse moved over:', img.alt);
        });
    });
});

function addTabFocus() {
    const images = document.querySelectorAll('#gallery img');
    images.forEach((img, index) => {
        img.setAttribute('tabindex', index + 1);
    });
    console.log('Tabindex attributes added to images');
}
