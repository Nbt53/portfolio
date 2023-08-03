/////////////   selectors   ////////////////////
const time = document.querySelector('.time');
const digitOne = document.querySelector('.clock-digit-one');
const digitTwo = document.querySelector('.clock-digit-two');
const digitThree = document.querySelector('.clock-digit-three');
const digitFour = document.querySelector('.clock-digit-four');
const secondsContainer = document.querySelector('.clock-seconds');

// variables
const hollowDot = '&#9675'
const solidDot = '&#9679'
let flash = true

/////////////////   get time    ////////////
getTime = () => {
    let currentTime = new Date()
    let hours = currentTime.getHours()
    if (hours < 10) {
        hours = '0' + hours
    }
    let minutes = currentTime.getMinutes()
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    let seconds = currentTime.getSeconds()
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    let hourFirst = hours.toString().charAt(0)
    let hourSecond = hours.toString().charAt(1)
    let minFirst = minutes.toString().charAt(0)
    let minSecond = minutes.toString().charAt(1)
    let secFirst = seconds.toString().charAt(0)
    let secSecond = seconds.toString().charAt(1)
    time.innerHTML = `${hourFirst + hourSecond}:${minFirst + minSecond}:${secFirst + secSecond}`

    displaySeconds(seconds)
    displayTime(hourFirst, '.clock-digit-one')
    displayTime(hourSecond, '.clock-digit-two')
    displayTime(minFirst, '.clock-digit-three')
    displayTime(minSecond, '.clock-digit-four')
  

}

////////////////////         display time functions //////////////////////


                ///////////////// display seconds at the bottom as dots ///////////////////
displaySeconds = (seconds) =>{
const hollow = 60 - seconds;
secondsContainer.innerHTML = ''
for(i = 0 ; i < seconds ; i++){
    secondsContainer.innerHTML += solidDot;
}
for(i = 0; i < hollow ; i++){
    secondsContainer.innerHTML += hollowDot;
}
}
            //////////////////////////// draw time ///////////////////////////////
displayTime = (num, container) => {
    const digit = document.querySelector(container)

digit.innerHTML = `<div class="top-${num} top">
<div class="top-${num}-top clock-digit-digits"></div>
<div class="top-${num}-right clock-digit-digits"></div>
<div class="top-${num}-left clock-digit-digits"></div>
<div class="top-${num}-bottom clock-digit-digits"></div>

</div>

<div class="bottom-${num} bottom">
<div class="bottom-${num}-top clock-digit-digits"></div>
<div class="bottom-${num}-right clock-digit-digits"></div>
<div class="bottom-${num}-left clock-digit-digits"></div>
<div class="bottom-${num}-bottom clock-digit-digits"></div>`
}

flashSeparator = () =>{
    separator = document.querySelectorAll('.separator-circle')

    
    if(flash){
        separator[0].style.display = "none"
        separator[1].style.display = "none"
        flash = false
    }else{
        separator[0].style.display = "flex"
        separator[1].style.display = "flex"
        flash = true
    }
}

one = (location) =>{
location.innerHTML = 
''
}

setInterval(getTime, 1000) 

setInterval(flashSeparator, 1000) 


