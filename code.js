const button = document.querySelector('.centerButton');
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

if (button) {
    button.addEventListener('click', () => {
        if (hasAnimated) {
            return;
        }

        hasAnimated = true;
        button.classList.add('clicked');
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
            button.classList.remove('clicked');
        }, 100);
    });
}