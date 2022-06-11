const app = {};
app.openMenuBtn = document.querySelector('#openMenu');
app.closeMenuBtn = document.querySelector('#closeMenu');
app.slideMenuEl = document.querySelector('.slideMenu');
app.submitBtn = document.querySelector('button[type="submit"]');

app.slideMenuFunction = () => {
    const slideMenuToggle = () => {
        app.slideMenuEl.classList.toggle('hidden');
    }

    app.openMenuBtn.addEventListener('click', (e) => {
        slideMenuToggle();
    })

    app.closeMenuBtn.addEventListener('click', () => {
        slideMenuToggle();
    })

    app.slideMenuEl.addEventListener('click', (e) => {
        if (e.target.localName === 'a') {
            slideMenuToggle();
        }
    })
}

app.init = () => {
    app.slideMenuFunction();
}

app.init();