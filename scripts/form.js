const app = {};

// overall elements
app.allAnchorEl = document.querySelectorAll('a');
app.allInputEl = document.querySelectorAll('input');

// nav elements
app.slideMenuEl = document.querySelector('.slideMenu');
app.openMenuBtn = document.querySelector('#openMenu');
app.closeMenuBtn = document.querySelector('#closeMenu');

// filtered anchor arrays
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
}

app.turnOnTabIndex = () => {
    for (let i in app.filteredAnchors) {
        app.filteredAnchors[i].tabIndex = 0;
    }

    for (let i in app.allInputEl) {
        app.allInputEl[i].tabIndex = 0;
    }

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