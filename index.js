
function digitalClock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let timeFormat = "AM";


    if(hours>12){
        hours = hours - 12;
        timeFormat = 'PM'
    }
    if(hours<10){
        hours = `0${hours}`
    }
    if(minutes<10){
        minutes = `0${minutes}`
    }
    if(seconds<10){
        seconds = `0${seconds}`
    }

    //time formats


    let finalTime = `${hours}:${minutes}:${seconds}`;



    document.getElementById('clock').innerText = finalTime;
    document.querySelector('span').innerText = timeFormat;


    setInterval(digitalClock, 1000)
}

digitalClock();



let date = new Date();
let months = date.getMonth();
let years = date.getFullYear();
let dateMonth = date.getDate();
let days = date.getDay();

let  display = document.querySelector('p');
//weack make;
if(days == 0){
    days = 'SUN';
}else if(days == 1){
    days = 'MON';
}else if(days == 2){
    days = 'TRU';
}else if(days == 3){
    days = 'WED';
}else if(days == 4){
    days = 'THU';
}else if(days == 5){
    days = 'FRI';
}else if(days == 6){
    days = 'SAT';
}

//month make;
if(months == 0){
    months = 1;
}else if(months == 1){
    months = 2;
}else if(months == 2){
    months = 3;
}else if(months == 3){
    months = 4;
}else if(months == 4){
    months = 5;
}else if(months == 5){
    months = 6;
}else if(months == 6){
    months = 7;
}else if(months == 7){
    months = 8;
}else if(months == 8){
    months = 9;
}else if(months == 9){
    months = 10;
}else if(months == 10){
    months = 11;
}else if(months == 11){
    months = 12;
}



let dis = `${days} ${months}  ${dateMonth}  ${years}`

display.innerHTML = dis;


