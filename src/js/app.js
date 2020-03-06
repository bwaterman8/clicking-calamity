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
    setUpCulminationCompanionButton();
}
function setUpCountCookieButton() {
    const cookieCountButton = document.querySelector('.cookie_button');
    cookieCountButton.innerText= `click for cookies. click value: ${runGame.valueMultiplier()}`
    cookieCountButton.addEventListener('click', ()=>{
        runGame.clickCookie();
        cookieCountUpdater();
    })
}
function cookieCountUpdater() {
    const cookieCounting = document.querySelector('.cookies_count');
    cookieCounting.innerText= runGame.countClick();
}
function gameLoop() {
    window.setInterval(()=> {
        runGame.
    })
}
// var i = 0
// function countCookies() {
//     document.getElementById('output').innerHTML = i++ +1;
// }