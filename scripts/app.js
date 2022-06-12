const app = {};

// overall elements
app.allAnchorEl = document.querySelectorAll('a');
app.allInputEl = document.querySelectorAll('input');

// nav elements
app.slideMenuEl = document.querySelector('.slideMenu');
app.openMenuBtn = document.querySelector('#openMenu');
app.closeMenuBtn = document.querySelector('#closeMenu');

// header elements
app.headerSkyline = document.querySelector('.skylineBackground');
app.header = document.querySelector('header');
app.headerTimeImage = document.querySelector('.headerTimeImage');
app.cloudImageOne = document.querySelector('.cloudOne');
app.cloudImageTwo = document.querySelector('.cloudTwo');
app.sunIconEl = document.querySelector('.sunIcon');
app.moonIconEl = document.querySelector('.moonIcon');
app.timeContainerEl = document.querySelector('.timeIconContainer');

// about elements
app.aboutMeSection = document.querySelector('#aboutMe');
app.selfieContainer = document.querySelector('.selfieContainer');

// project elements

app.projectSection = document.querySelector('.myProjects');

// skills elements

app.skillsSection = document.querySelector('.skillsSection');

// contact elements
app.textareaEl = document.querySelector('textarea');
app.submitBtnEl = document.querySelector('button[type="submit"]');
app.contactSkyline = document.querySelector('.skylineBackgroundTwo');
app.contactSection = document.querySelector('.contact');
app.contactTimeImage = document.querySelector('.contactTimeImage');
app.contactContent = document.querySelector('.overallContactContainer');

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

    app.submitBtnEl.tabIndex = -1;
    app.textareaEl.tabIndex = -1;
    app.selfieContainer.tabIndex = -1;
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
    app.selfieContainer.tabIndex = 0;

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

//toggle day/night
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
    // header changes to morning
    app.headerSkyline.style.backgroundImage = `url('./assets/morningSky.png')`;
    app.headerSkyline.style.filter = 'brightness(50%)';
    app.headerSkyline.style.height = '240px';
    app.header.style.background = 'linear-gradient(to top, #ae6063, #e4a89b)';
    app.headerTimeImage.src = './assets/sun.png';
    app.headerTimeImage.style.filter = 'brightness(100%)';
    app.cloudImageOne.style.filter = 'brightness(80%)';
    app.cloudImageTwo.style.filter = 'brightness(80%)';

    // about section
    app.aboutMeSection.className = 'morningAboutBackground aboutSection';

    // project section
    app.projectSection.style.background = 'linear-gradient(to bottom, #1c1311, #1B1211)';

    //skills section
    app.skillsSection.style.background = 'linear-gradient(to top, #181818, #1B1211)'

    // contact section changes to night
    app.contactSection.style.background = 'linear-gradient(to top, #283E51, #0A2342)';
    app.contactSkyline.style.backgroundImage = `url('./assets/nightskyThree.png')`;
    app.contactSkyline.style.height = '350px';
    app.contactSkyline.style.filter = 'brightness(100%)';
    app.contactSkyline.style.margin = '0';
    app.contactContent.style.margin = '0';
    app.contactTimeImage.src ='./assets/moon.png';
    app.contactTimeImage.style.filter = 'brightness(60%)';
}

app.changeToNightHeader = () => {

    //header changes from morning to night
    app.header.style.background = 'linear-gradient(to top, #283E51, #0A2342)';    
    app.headerSkyline.style.backgroundImage = `url('./assets/nightskyThree.png')`;
    app.headerSkyline.style.height = '350px';
    app.headerSkyline.style.filter = 'brightness(100%)';       
    app.headerTimeImage.src = './assets/moon.png';
    app.headerTimeImage.style.filter = 'brightness(60%)';
    app.cloudImageOne.style.filter = 'brightness(60%)';
    app.cloudImageTwo.style.filter = 'brightness(60%)';

    // about section
    app.aboutMeSection.className = 'nightAboutBackground aboutSection';

    // project section
    app.projectSection.style.background = 'linear-gradient(to bottom, #1e1612, #1A1211)';

    // skills section

    app.skillsSection.style.background = 'linear-gradient(to bottom, #1A1211, #130B18)';

    // contact section changes from night to morning
    app.contactSection.style.background = 'linear-gradient(to top, #ae6063, #e4a89b)';
    app.contactSkyline.style.backgroundImage = `url('./assets/morningSky.png')`;
    app.contactSkyline.style.height = '240px';
    app.contactSkyline.style.filter = 'brightness(50%)';
    app.contactSkyline.style.marginBottom = '75px';
    app.contactContent.style.marginTop = '100px';
    app.contactTimeImage.src ='./assets/sun.png';
    app.contactTimeImage.style.filter = 'brightness(100%)';
}

app.init = () => {
    app.slideMenuFunction();
    app.filterTabIndex();
    app.filterSlideAnchor();
}

app.init();