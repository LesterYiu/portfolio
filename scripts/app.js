const app = {};

app.openMenuBtn = document.querySelector('#openMenu');
app.closeMenuBtn = document.querySelector('#closeMenu');
app.slideMenuEl = document.querySelector('.slideMenu');
app.submitBtn = document.querySelector('button[type="submit"]');
app.allAnchorEl = document.querySelectorAll('a');
app.allInputEl = document.querySelectorAll('input');
app.textareaEl = document.querySelector('textarea');
app.submitBtnEl = document.querySelector('button[type="submit"]');
app.starEl = document.querySelector('.shootingStarImage');

console.log(app.starEl);

app.filteredAnchors = [];
app.slideMenuAnchors = [];

app.filterTabIndex = () => {
    for (let i = 0; i < app.allAnchorEl.length; i++) {
        if (app.allAnchorEl[i].parentElement.className !== 'sr-only') {
            app.filteredAnchors.push(app.allAnchorEl[i]);
        }
    }
}
app.filterSlideAnchor = () => {
    for (let i = 0; i < app.allAnchorEl.length; i++) {
        if (app.allAnchorEl[i].parentElement.className === 'slideList') {
            app.slideMenuAnchors.push(app.allAnchorEl[i]);
        }
    }
}

app.turnOffTabIndex = () => {
    for (let i in app.filteredAnchors) {
        app.filteredAnchors[i].tabIndex = -1;
    }

    for (let i in app.allInputEl) {
        app.allInputEl[i].tabIndex = -1;
    }

    app.submitBtnEl.tabIndex = -1;

    app.textareaEl.tabIndex = -1;
}

app.turnOnTabIndex = () => {
    for (let i in app.filteredAnchors) {
        app.filteredAnchors[i].tabIndex = 0;
    }

    for (let i in app.allInputEl) {
        app.allInputEl[i].tabIndex = 0;
    }

    app.submitBtnEl.tabIndex = 0;

    app.textareaEl.tabIndex = 0;

    for (let i in app.slideMenuAnchors) {
        app.slideMenuAnchors[i].tabIndex = 0;
    }
}

app.slideMenuFunction = () => {
    const slideMenuToggle = () => {
        app.slideMenuEl.classList.toggle('hidden');
    }

    app.openMenuBtn.addEventListener('click', () => {
        slideMenuToggle();
        app.turnOffTabIndex();
        for (let i in app.slideMenuAnchors) {
            app.slideMenuAnchors[i].tabIndex = 0;
        }
    })

    app.closeMenuBtn.addEventListener('click', () => {
        slideMenuToggle();
        app.turnOnTabIndex();
        for (let i in app.slideMenuAnchors) {
            app.slideMenuAnchors[i].tabIndex = -1;
        }
    })

    app.slideMenuEl.addEventListener('click', (e) => {
        if (e.target.localName === 'a') {
            slideMenuToggle();
            app.turnOnTabIndex();
            for (let i in app.slideMenuAnchors) {
                app.slideMenuAnchors[i].tabIndex = -1;
            }        
        }
    })
}

app.init = () => {
    app.slideMenuFunction();
    app.filterTabIndex();
    app.filterSlideAnchor();
}

app.init();