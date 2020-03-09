// let startApp = new runGame();
// class runGame {
//     constructor(){
// this.clickCount = 0;
//     }
// }
// function displayClickCount() {
//     return this.clickCount;
// }

//  const runGame = new ClickCount();
//     document.querySelector("cookies_count");


// startGame();
// gameLoop();

// function startGame() {
//     setUpClickers();
//     updateCount();
// }

// function setUpClickers() {
//     setUpCountCookieButton();
//     setUpClickCompanionButton();
//     setUpCulminationCompounderButton();
// }
// function setUpClickCompanionButton() {
    //     const cookieCompanionButton = document.querySelector('.companion_button');
    //     cookieCompanionButton.innerText= `click for a companion. companion cost: ${runGame.increaseClickingCompanionsCost()}`
    //     cookieCompanionButton.addEventListener('click', ()=>{
        //         cookieCountUpdater();
        //         companionCountUpdater();
        //     })
        // }
        // function setUpCulminationCompounderButton() {
            //     const cookieCompounderButton = document.querySelector('.culmination_button');
            //     cookieCompounderButton.innerText= `click to compound. culmination compounder cost: ${runGame.increaseCulminationCompounderCost()}`
            //     cookieCompounderButton.addEventListener('click', ()=>{
                //         cookieCountUpdater();
                //         compounderCountUpdater();
                //         clickCookieUpdater();
                //     })
//  function setUpCountCookieButton() {
    //  const cookieCountButton = document.querySelector('.cookie_button');
    //  cookieCountButton.innerText= `click for cookies. click value: ${runGame.valueMultiplier()}`
    //  cookieCountButton.addEventListener('click', ()=>{
        //  runGame.clickCookie();
        //  cookieCountUpdater();
    //  })
//  }
// }
// function cookieCountUpdater() {
//     const cookieCounting = document.querySelector('.cookies_count');
//     cookieCounting.innerText= runGame.countClick();
// }
// function companionCountUpdater() {
//     const companionCounting = document.querySelector('.companion_count');
//     companionCounting.innerText= runGame.clickCompanionCount();
// }
// function compounderCountUpdater() {
//     const compounderCounting = document.querySelector('.culmination_count');
//     compounderCounting.innerText= runGame.culminationCompounderCount();
// }


let clickCount = 0;
let companionCount = 0;
let culminationCount = 0;
let companionCost = 100;
let culminationCost = 10;
let valueMultiplier = Math.pow(1.2, clickCount);

document.querySelector('.modal_one_open').addEventListener('click', ()=> {
    document.querySelector('.modal_one_background').style.display = 'flex';
})

document.querySelector('.modal_one_close').addEventListener('click', ()=> {
    document.querySelector('.modal_one_background').style.display = 'none';
})
document.querySelector('.modal_two_open').addEventListener('click', ()=> {
    document.querySelector('.modal_two_background').style.display = 'flex';
})
document.querySelector('.modal_two_close').addEventListener('click', ()=> {
    document.querySelector('.modal_two_background').style.display = 'none';
})

document.querySelector('.cookies_count').innerText = clickCount;
document.querySelector('.companion_count').innerText = companionCount;
document.querySelector('.culmination_count').innerText = culminationCount;


document.querySelector('.cookie_button').addEventListener('click', cookieClick)
document.querySelector('.companion_button').addEventListener('click', companionClick)
document.querySelector('.culmination_button').addEventListener('click', culminationClick)



document.querySelector('.cookie_button').innerText= `Click for cookies! Click Value: ${valueMultiplier}`;
document.querySelector('.companion_button').innerText= `Click for a clicking companion! Companion cost: ${companionCost}`;
document.querySelector('.culmination_button').innerText= `Click for a culmination compounder! Compounder cost: ${culminationCost}`;

document.querySelector('.culmination_button').addEventListener('click', culminationClickDecreasesClickCount);
document.querySelector('.culmination_button').addEventListener('click', culminationClickIncreasesCulminationCost);
document.querySelector('.culmination_button').addEventListener('click', culminationClickIncreasesClickValue);


function cookieClick() {
    clickCount += valueMultiplier;
    document.querySelector('.cookies_count').innerText = clickCount;
}
function companionClick() {
    companionCount++;
    document.querySelector('.companion_count').innerText = companionCount;
}
function culminationClick() {
    culminationCount++;
    document.querySelector('.culmination_count').innerText = culminationCount;
}
function culminationClickDecreasesClickCount() {
    clickCount -= culminationCost;
    document.querySelector('.cookies_count').innerText = clickCount;
}
function culminationClickIncreasesCulminationCost() {
    culminationCost++;
    document.querySelector('.culmination_button').innerText = `Click for a culmination compounder! Compounder cost: ${culminationCost}`;
}
function culminationClickIncreasesClickValue() {
    valueMultiplier++;
    document.querySelector('.cookie_button').innerText= `Click for cookies! Click Value: ${valueMultiplier}`;
}