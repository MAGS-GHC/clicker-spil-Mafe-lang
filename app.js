


// Variabler


   let count = 0;
   const cookieKnap = document.getElementById('cookieKnap');
   const countDisplay = document.getElementById('cookiesDisplay');


   let countSec = 0;
   const countSecDisplay = document.getElementById('cookiesPrSec');
   
   const mogmPrice = 100;
   const buyMogm = document.getElementById('mogmBuy');


   const amountMogm = document.getElementById('mogmX');
   let amountNumber = 0;


   const costDisplayMulti = document.getElementById('multiCost');
   let multiCost = 500;
   let multiClick = 0;

   const mushroomUpgrade = document.getElementById('mushroomUpgrade');



   function multiClickFunction() {

    if (count >= 50000 && multiCost === 50000) {
    count -= multiCost;
    multiClick = 8;
    costDisplayMulti.textContent = "MAX";
    multiCost = 999999999999999;
   }
   else if (count >= 5000 && multiCost === 5000) {
    count -= multiCost;
    multiClick = 4;
    costDisplayMulti.textContent = "Cost " + multiCost*10*10;
    multiCost = 50000;

   } else if (count >= 500 && multiCost === 500){
    count -= multiCost;
    multiClick = 2;
    costDisplayMulti.textContent = "Cost " + multiCost*10;
    multiCost = 5000;


} 
   }



// Mathmatical model




//EventListeners

cookieKnap.addEventListener('click', handleClick);

buyMogm.addEventListener('click', mogmPay);

mushroomUpgrade.addEventListener('click', multiClickFunction);



// Timing events



// Arrays





// Funktioner


function handleClick() {
    if (multiClick === 0){
    count++;
    countDisplay.textContent = count + " Cookies";
    }
    else if (multiClick === 2){
        count++;
        count++;
        countDisplay.textContent = count + " Cookies";
    } else if (multiClick === 4) {
        count++;
        count++;
        count++;
        count++;
        countDisplay.textContent = count + " Cookies";
    } else if (multiClick === 8) {
        count++;
        count++;
        count++;
        count++;
        count++;
        count++;
        count++;
        count++;
        countDisplay.textContent = count + " Cookies";

    }

}




function mogmPay() {
    if (count >= mogmPrice) {
        count -= mogmPrice; 
        countDisplay.textContent = count + " Cookies";
        countSec++;
        countSecDisplay.textContent = countSec + " Cookies Per Second";
        amountNumber++;
        amountMogm.textContent = "X"+amountNumber;

    } else {
        console.log("Not enough cookies my friend")


    }

}



function updateCookies() {
    count += countSec;
    countDisplay.textContent = count + " Cookies";
}

function updateCookiesPerSecondDisplay() {
    countSecDisplay.textContent = countSec + " Cookies Per Second";
}


setInterval(updateCookiesPerSecondDisplay, 1000);
setInterval(updateCookies, 1000);


