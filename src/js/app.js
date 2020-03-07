const runGame = new ClickCount();
startGame();
gameLoop();

function startGame() {
    setUpClickers();
    updateCount();
}

function setUpClickers() {
    setUpCountCookieButton();
    setUpClickCompanionButton();
    setUpCulminationCompounderButton();
}
function setUpCountCookieButton() {
    const cookieCountButton = document.querySelector('.cookie_button');
    cookieCountButton.innerText= `click for cookies. click value: ${runGame.valueMultiplier()}`
    cookieCountButton.addEventListener('click', ()=>{
        runGame.clickCookie();
        cookieCountUpdater();
    })
}
function setUpClickCompanionButton() {
    const cookieCompanionButton = document.querySelector('.companion_button');
    cookieCompanionButton.innerText= `click for a companion. companion cost: ${runGame.increaseClickingCompanionsCost()}`
    cookieCompanionButton.addEventListener('click', ()=>{
        cookieCountUpdater();
        companionCountUpdater();
    })
}
function setUpCulminationCompounderButton() {
    const cookieCompounderButton = document.querySelector('.culmination_button');
    cookieCompounderButton.innerText= `click to compound. culmination compounder cost: ${runGame.increaseCulminationCompounderCost()}`
    cookieCompounderButton.addEventListener('click', ()=>{
        cookieCountUpdater();
        compounderCountUpdater();
        clickCookieUpdater();
    })
}
function cookieCountUpdater() {
    const cookieCounting = document.querySelector('.cookies_count');
    cookieCounting.innerText= runGame.countClick();
}
function companionCountUpdater() {
    const companionCounting = document.querySelector('companion_count');
    companionCounting.innerText= runGame.clickCompanionCount();
}
function compounderCountUpdater() {
    const compounderCounting = document.querySelector('.compounder_count');
    compounderCounting.innerText= runGame.culminationCompounderCount();
}

// var i = 0
// function countCookies() {
//     document.getElementById('output').innerHTML = i++ +1;
// }