let button=document.getElementById("btn");
button.addEventListener("mouseover",function(){
    this.innerText="Party Time";
})
button.addEventListener("mouseout",function(){
    this.innerText="Set Alarm";
})
button.addEventListener("click",function(){
    let date=new Date();
    let hours=date.getHours();
    let wakeuptime = document.getElementById("wakeuptime"); 
    let lunchtime = document.getElementById("lunchtime"); 
    let naptime = document.getElementById("naptime"); 
    let nighttime = document.getElementById("nighttime"); 
    if(parseInt(wakeuptime.value)===hours){
        document.getElementById("message").innerText="GRAB SOME HEALTHY BREAKFAST!!!";
        document.getElementById("curtainimage").style.backgroundImage="url(./images/morning.svg)";
    }
    if(parseInt(lunchtime.value)===hours){
        document.getElementById("message").innerText="LET'S HAVE SOME LUNCH!!!";
        document.getElementById("curtainimage").style.backgroundImage = "url(./images/afternoon.svg)";
    }
    if(parseInt(naptime.value)===hours){
        document.getElementById("message").innerText="STOP YAWNING,GET SOME TEA...I'TS JUST EVENING!!!";
        document.getElementById("curtainimage").style.backgroundImage = "url(./images/evening.png)";
        document.getElementById("cont").style.paddingTop="30px";
    }
    if(parseInt(nighttime.value)===hours){
        document.getElementById("message").innerText="CLOSE YOUR EYES AND GOT TO SLEEP";
        document.getElementById("curtainimage").style.backgroundImage = "url(./images/goodnight_image.svg)";
    }
    let timing = document.getElementsByClassName("timing");
    timing[0].innerText = wakeuptime.options[wakeuptime.selectedIndex].text;
    timing[1].innerText = wakeuptime.options[lunchtime.selectedIndex].text;
    timing[2].innerText = wakeuptime.options[naptime.selectedIndex].text;
    timing[3].innerText = wakeuptime.options[nighttime.selectedIndex].text;
})

function clock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    console.log(hours,minutes,seconds);

    if(hours>12){
        hours=hours-12;
    }

    let hourss = document.getElementById("hourss");
    hourss.innerText = hours;
    
    let minutess = document.getElementById("minutess");
    minutess.innerText = minutes;
    
    let secondss = document.getElementById("secondss");
    secondss.innerText = seconds;
    
}

setInterval(()=>{
    clock();
});

let date = new Date();
let hours = date.getHours();
    
if(hours>=12){
    let ampm = document.getElementById("ampm");
    ampm.innerText = "PM";
}
else if(hours<12){
    let ampm = document.getElementById("ampm");
    ampm.innerText = "AM";
}

let greetings = document.getElementById("greetings");
        if(hours<12){
            greetings.innerText="GOOD MORNING!! WAKE UP!!";
        }
        if(hours>=12 && hours<16){
            greetings.innerText="GOOD AFTERNOON!!TAKE SOME SLEEP";
        }

        if(hours>=16 && hours<20){
            greetings.innerText="GOOD EVENING!!";
        }
        if(hours>=20 && hours<24){
            greetings.innerText="GOOD NIGHT!!";
        }