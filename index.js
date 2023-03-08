var buttonnumber=0;
var button = document.getElementById("clickme")
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

setInterval(() => {
    
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    month = d.getMonth();
    day = d.getDate();
    year = d.getFullYear();
    week = d.getDay();
    astro = getHoroscope();
    



    function getHoroscope() {
    if (month == 0){ 
    if (day>0||day<19){return "Capricorn";}
    else {return"Aquarius"; }
    }
    else if(month == 1){
    if (day>1||day<18){return "Capricorn";}
    else {return "Pisces"; }
    }
    else if(month == 2){
    if (day>1||day<20){return "Pisces";}
    else {return "Aries"; }
    }
    else if(month == 3){
    if (day>1||day<19){return "Aries";}
    else {return "Taurus"; }
    }
    else if(month == 4){return "Taurus"; }
    else if(month == 5){
    if (day>1||day<20){return "Gemini";}
    else {return "Cancer"; }}
    else if(month == 6){
    if (day>1||day<22){return "Cancer";}
    else {return "Leo"; }}
     else if(month == 7){
    if (day>1||day<22){return "Leo";}
    else {return "Virgo"; }}
    else if(month == 8){
    if (day>1||day<22){return "Virgo";}
    else {return "Libra"; }}
    else if(month == 9){
    if (day>1||day<22){return "Libra";}
    else {return "Scorpio"; }}
    else if(month == 10){
    if (day>1||day<21){return "Scorpio";}
    else {return "Sagittarius"; }}
    else if(month == 12){
    if (day>1||day<21){return "Sagittarius";}
    else {return "Capricorn"; }}
    else{return "Aries";}
    }
    
    
    function getAlmanac(){
    
     if (month == 0){ return "Wolf Moon";}
    else if (month == 1){ return "Snow Moon";}
    else if (month == 2){ return "Worm Moon";}
    else if (month == 3){ return " Pink Moon";}
    else if (month == 4){ return "Flower Moon";}
    else if (month == 5){ return "Strawberry Moon";}
    else if (month == 6){ return "Buck Moon";}
    else if (month == 7){ return "Sturgeon Moon";}
    else if (month == 8){ return "Corn Moon";}
    else if (month == 9){ return "Harvest Moon";}
    else if (month == 10){ return "Beaver Moon";}
    else if (month == 11){ return "Cold Moon";}else {return "Moon";}
    }
    
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
    if (buttonnumber > 2){buttonnumber=0;}
    

button.onclick = function() {
  buttonnumber += 1;
  if (buttonnumber ==1){button.innerHTML = "Almanac: "+ getAlmanac();}
  else if (buttonnumber ==2){button.innerHTML = "Zodiac: "+getHoroscope();}
  else{button.innerHTML = "Clock Showing : "+ dayNames[week]+ " , "+ monthNames[month] + " "+ day + ", "+ year + "  Time Stamp : <"+ hr + ":"+ min+ ":"+sec+">" ;}
};

    if (buttonnumber == 1){star.style.backgroundImage= "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/"+ month+ ".png?raw=true')";}
    else if(buttonnumber == 2){star.style.backgroundImage= "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/"+ astro +".png?raw=true')";}
    else{
   star.style.backgroundImage= "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/"+min%10+"star"+sec%2+".png?raw=true')";}
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);
