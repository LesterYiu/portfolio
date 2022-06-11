const app = {};

app.openMenuBtn = document.querySelector('#openMenu');
app.closeMenuBtn = document.querySelector('#closeMenu');
app.slideMenuEl = document.querySelector('.slideMenu');
app.submitBtn = document.querySelector('button[type="submit"]');
app.allAnchorEl = document.querySelectorAll('a');
app.allInputEl = document.querySelectorAll('input');
app.textareaEl = document.querySelector('textarea');
app.submitBtnEl = document.querySelector('button[type="submit"]');
app.sunIconEl = document.querySelector('.sunIcon');
app.moonIconEl = document.querySelector('.moonIcon');
app.timeContainerEl = document.querySelector('.timeIconContainer');
app.headerSkyline = document.querySelector('.skylineBackground');
app.header = document.querySelector('header');
app.headerTimeImage = document.querySelector('.headerTimeImage');
app.cloudImageOne = document.querySelector('.cloudOne');
app.cloudImageTwo = document.querySelector('.cloudTwo');
app.aboutMeSection = document.querySelector('#aboutMe');

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

app.toggleSunAndMoon = () => {
    app.sunIconEl.classList.toggle('notSelected');
    app.moonIconEl.classList.toggle('notSelected');
}

app.timeContainerEl.addEventListener('click', (e) => {
    if (e.target.className === 'moonIcon' && app.sunIconEl.className === 'sunIcon notSelected') {
        app.toggleSunAndMoon();
        app.changeToMorningHeader(); 
    } else if (e.target.className === 'sunIcon' && app.moonIconEl.className === 'moonIcon notSelected') {
        app.toggleSunAndMoon();
        app.changeToNightHeader(); 
    } else if (e.target.className === 'sunIcon notSelected') {
        app.toggleSunAndMoon();
        app.changeToMorningHeader();
    } else if (e.target.className === 'moonIcon notSelected') {
        app.toggleSunAndMoon();
        app.changeToNightHeader(); 
    } else if (e.target.className === 'sunIcon') {
        app.moonIconEl.classList.toggle('notSelected');
        app.changeToMorningHeader();
    } else if (e.target.className === 'moonIcon') {
        app.sunIconEl.classList.toggle('notSelected');
        app.changeToNightHeader(); 
    }
});

app.changeToMorningHeader = () => {
    app.headerSkyline.style.backgroundImage = `url('./assets/morningSky.png')`;
    app.headerSkyline.style.filter = 'brightness(50%)';
    app.headerSkyline.style.height = '240px';
    app.header.style.background = 'linear-gradient(to top, #ae6063, #e4a89b)';
    app.headerTimeImage.src = './assets/sun.png';
    app.headerTimeImage.style.filter = 'brightness(100%)';
    app.cloudImageOne.style.filter = 'brightness(80%)';
    app.cloudImageTwo.style.filter = 'brightness(80%)';

    app.aboutMeSection.className = 'morningAboutBackground aboutSection';
}

app.changeToNightHeader = () => {
    app.headerSkyline.style.backgroundImage = `url('./assets/nightskyThree.png')`;
    app.header.style.background = 'linear-gradient(to top, #283E51, #0A2342)';
    app.headerSkyline.style.height = '350px';
    app.headerTimeImage.src = './assets/moon.png';
    app.headerTimeImage.style.filter = 'brightness(60%)';
    app.cloudImageOne.style.filter = 'brightness(60%)';
    app.cloudImageTwo.style.filter = 'brightness(60%)';
    app.headerSkyline.style.filter = 'brightness(100%)';    
}

app.init = () => {
    app.slideMenuFunction();
    app.filterTabIndex();
    app.filterSlideAnchor();
}

app.init();