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
app.shootingStarEl = document.querySelector('.shootingStarImage');

// about elements
app.aboutMeSection = document.querySelector('#aboutMe');
app.selfieContainer = document.querySelector('.selfieContainer');

// project elements

app.projectSection = document.querySelector('.myProjects');

// skills elements

app.skillsSection = document.querySelector('.skillsSection');

// learning skills element

app.learningSection = document.querySelector('.learningSection');

// contact elements
app.textareaEl = document.querySelector('textarea');
app.submitBtnEl = document.querySelector('button[type="submit"]');
app.contactSkyline = document.querySelector('.skylineBackgroundTwo');
app.contactSection = document.querySelector('.contact');
app.contactTimeImage = document.querySelector('.contactTimeImage');
app.contactContent = document.querySelector('.overallContactContainer');

// scroll elements

app.revealEls = document.querySelectorAll('.reveal')
app.revealLeftEls = document.querySelectorAll('.revealLeft');
app.totalWindowHeight = window.innerHeight;

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
    app.timeContainerEl.tabIndex = -1;
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
    app.timeContainerEl.tabIndex = 0;

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

//toggle day/night for click
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

//toggle day/night for keydown

app.timeContainerEl.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        if (app.moonIconEl.className === 'moonIcon' && app.sunIconEl.className === 'sunIcon notSelected') {
            app.toggleSunAndMoon();
            app.changeToMorningHeader(); 
        } else if (app.sunIconEl.className === 'sunIcon' && app.moonIconEl.className === 'moonIcon notSelected') {
            app.toggleSunAndMoon();
            app.changeToNightHeader(); 
        } else if (app.sunIconEl.className === 'sunIcon notSelected') {
            app.toggleSunAndMoon();
            app.changeToMorningHeader();
        } else if (app.moonIconEl.className === 'moonIcon notSelected') {
            app.toggleSunAndMoon();
            app.changeToNightHeader(); 
        } else if (app.sunIconEl.className === 'sunIcon') {
            app.moonIconEl.classList.toggle('notSelected');
            app.changeToMorningHeader();
        } else if (app.moonIconEl.className === 'moonIcon') {
            app.sunIconEl.classList.toggle('notSelected');
            app.changeToNightHeader(); 
        }
    }
})

app.changeToMorningHeader = () => {
    // header changes to morning
    app.headerSkyline.className = 'skylineBackground headerBackgroundMorning';
    app.header.className = 'headerMorning';
    app.headerTimeImage.className = 'headerTimeImage headerTimeImageMorning';
    app.headerTimeImage.src = './assets/sun.png';
    app.cloudImageOne.className = 'cloudOne cloudOneMorning';
    app.cloudImageTwo.className = 'cloudTwo cloudTwoMorning';
    app.shootingStarEl.className = 'shootingStarImage displayNone';

    // about section
    app.aboutMeSection.className = 'aboutSection morningAboutBackground';

    // project section
    app.projectSection.className = 'myProjects myProjectsMorning';

    //skills section
    app.skillsSection.className = 'skillsSection skillsSectionMorning';

    // learning section

    app.learningSection.className = 'learningSection learningSectionMorning'

    // contact section changes to night
    app.contactSection.className = 'contact contactMorning';
    app.contactSkyline.className = 'skylineBackgroundTwo skylineBackgroundTwoMorning';
    app.contactContent.className = 'flexContainer overallContactContainer reveal contactContentMorning';
    app.contactTimeImage.className = 'contactTimeImage contactTimeImageMorning';    
    app.contactTimeImage.src ='./assets/moon.png';
}

app.changeToNightHeader = () => {

    //header changes from morning to night
    app.headerSkyline.className = 'skylineBackground headerBackgroundNight';
    app.header.className = 'headerNight';
    app.headerTimeImage.className = 'headerTimeImage headerTimeImageNight';
    app.headerTimeImage.src = './assets/moon.png';
    app.headerSkyline.className = 'skylineBackground headerSkylineNight';
    app.cloudImageOne.className = 'cloudOne cloudOneNight';
    app.cloudImageTwo.className = 'cloudTwo cloudTwoNight';
    app.shootingStarEl.className = 'shootingStarImage';

    // about section
    app.aboutMeSection.className = 'nightAboutBackground aboutSection';

    // project section
    
    app.projectSection.className = 'myProjects myProjectsNight';

    // skills section
    app.skillsSection.className = 'skillsSection skillsSectionNight';

    // learning section

    app.learningSection.className = 'learningSection'

    // contact section changes from night to morning
    app.contactSection.className = 'contact contactNight';
    app.contactSkyline.className = 'skylineBackgroundTwo skylineBackgroundTwoNight';
    app.contactContent.className = 'flexContainer overallContactContainer reveal contactContentNight';
    app.contactTimeImage.className = 'contactTimeImage contactTimeImageNight';    
    app.contactTimeImage.src ='./assets/sun.png';

}

//scroll transition

app.scrollRevealUpward = () => {    
    for (let i = 0; i < app.revealEls.length; i++) {
        const totalWindowHeight = window.innerHeight;
        const elementTop = app.revealEls[i].getBoundingClientRect().top;
        const elementVisible = 95;

        if (elementTop < totalWindowHeight - elementVisible) {
            app.revealEls[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", app.scrollRevealUpward);

app.console = () => {
    console.log('scrolled');
}

window.addEventListener("scroll", app.console);
// init

app.init = () => {
    app.slideMenuFunction();
    app.filterTabIndex();
    app.filterSlideAnchor();
}


app.init();