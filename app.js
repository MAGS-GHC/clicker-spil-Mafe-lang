


// Variabler
   let count = 0;
   const button = document.getElementById('cookieKnap');
   const countDisplay = document.getElementById('cookiesDisplay');


   let countSec = 0;
   








// For- og while-loops










//EventListeners

button.addEventListener('click', handleClick);







// Funktioner

function handleClick() {
    
    count++;

    
    countDisplay.textContent = count + " Cookies";
}



