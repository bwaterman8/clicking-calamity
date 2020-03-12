let clickCount = 0;
let companionCount = 0;
let culminationCount = 0;
let companionCost = 100;
let culminationCost = 10;
let valueMultiplier = 1;

document.querySelector('.modal_one_open').addEventListener('click', () => {
    document.querySelector('.modal_one_background').style.display = 'flex';
})
document.querySelector('.modal_one_close').addEventListener('click', () => {
    document.querySelector('.modal_one_background').style.display = 'none';
})
document.querySelector('.modal_two_open').addEventListener('click', () => {
    document.querySelector('.modal_two_background').style.display = 'flex';
})
document.querySelector('.modal_two_close').addEventListener('click', () => {
    document.querySelector('.modal_two_background').style.display = 'none';
})

document.querySelector('.cookies_count').innerText = clickCount.toFixed(2);
document.querySelector('.companion_count').innerText = companionCount;
document.querySelector('.culmination_count').innerText = culminationCount;
document.querySelector('.cookie_button').addEventListener('click', cookieClick)
document.querySelector('.companion_button').addEventListener('click', companionClick)
document.querySelector('.culmination_button').addEventListener('click', culminationClick)
document.querySelector('.cookie_button').innerText = `Click for cookies! Click Value: ${valueMultiplier}`;
document.querySelector('.companion_button').innerText = `Click for a clicking companion! Companion cost: ${companionCost}`;
document.querySelector('.culmination_button').innerText = `Click for a culmination compounder! Compounder cost: ${culminationCost}`;
document.querySelector('.companion_button').addEventListener('click', autoClickCount)
document.querySelector('.reset_button').addEventListener('click', reset)


function cookieClick() {
    (clickCount += valueMultiplier).toFixed(2);
    document.querySelector('.cookies_count').innerText = clickCount;

}

function companionClick() {
    if (clickCount >= companionCost) {
        companionCount++;
        document.querySelector('.companion_count').innerText = companionCount;
        companionCost++;
        document.querySelector('.companion_button').innerText = `Click for a clicking companion! Companion cost: ${companionCost}`;
        clickCount -= companionCost;
    }
    if (clickCount < 0) {
        clickCount = 0;
    }
    document.querySelector('.cookies_count').innerText = clickCount;
}

function culminationClick() {
    if (clickCount >= culminationCost) {
        culminationCount++;
        document.querySelector('.culmination_count').innerText = culminationCount;
        culminationCost++;
        document.querySelector('.culmination_button').innerText = `Click for a culmination compounder! Compounder cost: ${culminationCost}`;
        clickCount -= culminationCost;
        if (clickCount < 0) {
            clickCount = 0;
        }
        document.querySelector('.cookies_count').innerText = clickCount;

        valueMultiplier = valueMultiplier + culminationCount * 0.2;
        document.querySelector('.cookie_button').innerText = `Click for cookies! Click Value: ${valueMultiplier.toFixed(2)}`;
    }
}
function reset() {
    culminationCount = 0;
    companionCount = 0;
    clickCount =  0;
    valueMultiplier = 1;
    culminationCost = 10;
    companionCost = 100;
    document.querySelector('.cookie_button').innerText = `Click for cookies! Click Value: ${valueMultiplier}`;
    document.querySelector('.culmination_count').innerText = culminationCount = 0;
    document.querySelector('.companion_count').innerText = companionCount = 0;
    document.querySelector('.culmination_button').innerText = `Click for a culmination compounder! Compounder cost: ${culminationCost}`;
    document.querySelector('.companion_button').innerText = `Click for a clicking companion! Companion cost: ${companionCost}`;

}
function autoClickCount() {
    clickCount += companionCount * valueMultiplier;
    document.querySelector('.cookies_count').innerText = clickCount.toFixed(2);
}
setInterval(autoClickCount, 1000);

