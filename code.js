const centerButton = document.querySelector('.centerButton');
const infoButton = document.querySelector('.infoButton');
const examplesButton = document.querySelector('.examplesButton');
const learnButton = document.querySelector('.learnButton');
const ideasButton = document.querySelector('.ideasButton');
const infoMenu = document.querySelector('.COSCLUBINFO');
const examplesMenu = document.querySelector('.COSCLUBEXAMPLES');
const learnMenu = document.querySelector('.COSCLUBLEARN');
const ideasMenu = document.querySelector('.COSCLUBIDEAS');
const menus = [infoMenu, examplesMenu, learnMenu, ideasMenu];

const lineOne = document.querySelector('.lineOne');
const lineTwo = document.querySelector('.lineTwo');
const boxOutlineTwo = document.querySelector('.boxOutlineTwo');
const htmlTitle = document.querySelector('.htmlTitle');
const htmlText = document.querySelector('.htmlText');
const cssTitle = document.querySelector('.cssTitle');
const cssText = document.querySelector('.cssText');
const javascriptTitle = document.querySelector('.javascriptTitle');
const javascriptText = document.querySelector('.javascriptText');
const websiteTitle = document.querySelector('.websiteTitle');
const websiteText = document.querySelector('.websiteText');

let hasAnimated = false;
let infoMenuOpen = false;
let examplesMenuOpen = false;
let learnMenuOpen = false;
let ideasMenuOpen = false;

function openMenu(menuToOpen, menuClass) {
    menus.forEach((menu) => {
        if (menu) {
            menu.classList.remove('infoMenuOpen', 'examplesMenuOpen', 'learnMenuOpen', 'ideasMenuOpen');
        }
    });

    menuToOpen.classList.add(menuClass);
}

if (centerButton) {
    centerButton.addEventListener('click', () => {
        if (hasAnimated) {
            return;
        }

        hasAnimated = true;
        centerButton.classList.add('clicked');
        lineOne.classList.add('clickedLineOne');
        lineTwo.classList.add('clickedLineTwo');
        htmlTitle.classList.add('clickedHTMLTitle');
        htmlText.classList.add('clickedHTMLText');
        cssTitle.classList.add('clickedCSSTitle');
        cssText.classList.add('clickedCSSText');
        javascriptTitle.classList.add('clickedJavascriptTitle');
        javascriptText.classList.add('clickedJavascriptText');
        websiteTitle.classList.add('clickedWebsiteTitle');
        websiteText.classList.add('clickedWebsiteText');
        boxOutlineTwo.classList.add('clickedBoxOutlineTwo');

        setTimeout(() => {
            centerButton.classList.remove('clicked');
        }, 400);
    });
}

if (infoButton && infoMenu) {
    infoButton.addEventListener('click', () => {
        infoButton.classList.add('clicked');
        infoMenuOpen = true;
        examplesMenuOpen = false;
        learnMenuOpen = false;
        ideasMenuOpen = false;
        openMenu(infoMenu, 'infoMenuOpen');

        setTimeout(() => {
            infoButton.classList.remove('clicked');
        }, 400);
    });
}
if (examplesButton && examplesMenu) {
    examplesButton.addEventListener('click', () => {
        examplesButton.classList.add('clicked');
        examplesMenuOpen = true;
        infoMenuOpen = false;
        learnMenuOpen = false;
        ideasMenuOpen = false;
        openMenu(examplesMenu, 'examplesMenuOpen');

        setTimeout(() => {
            examplesButton.classList.remove('clicked');
        }, 400);
    });
}
if (learnButton && learnMenu) {
    learnButton.addEventListener('click', () => {
        learnButton.classList.add('clicked');
        infoMenuOpen = false;
        examplesMenuOpen = false;
        learnMenuOpen = true;
        ideasMenuOpen = false;
        openMenu(learnMenu, 'learnMenuOpen');

        setTimeout(() => {
            learnButton.classList.remove('clicked');
        }, 400);
    });
}
if (ideasButton && ideasMenu) {
    ideasButton.addEventListener('click', () => {
        ideasButton.classList.add('clicked');
        infoMenuOpen = false;
        examplesMenuOpen = false;
        learnMenuOpen = false;
        ideasMenuOpen = true;
        openMenu(ideasMenu, 'ideasMenuOpen');

        setTimeout(() => {
            ideasButton.classList.remove('clicked');
        }, 400);
    });
}