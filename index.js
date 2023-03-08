window.onload = function(){ 

var buttonnumber=0;

var button = document.getElementById("clickme");

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

   // 0 => New Moon
    // 1 => Waxing Crescent Moon
    // 2 => Quarter Moon
    // 3 => Waxing Gibbous Moon
    // 4 => Full Moon
    // 5 => Waning Gibbous Moon
    // 6 => Last Quarter Moon
    // 7 => Waning Crescent Moon
const moonNames = ['New Moon','Waxing Crescent Moon','Quarter Moon','Waxing Gibbous Moon','Full Moon','Waning Gibbous Moon','Last Quarter Moon','Waning Crescent Moon'];

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
    
    
    function getMoonPhase(year, month, day)
{
    var c = e = jd = b = 0;

    if (month < 3) {
        year--;
        month += 12;
    }

    ++month;

    c = 365.25 * year;

    e = 30.6 * month;

    jd = c + e + day - 694039.09; //jd is total days elapsed

    jd /= 29.5305882; //divide by the moon cycle

    b = parseInt(jd); //int(jd) -> b, take integer part of jd

    jd -= b; //subtract integer part to leave fractional part of original jd

    b = Math.round(jd * 8); //scale fraction from 0-8 and round

    if (b >= 8 ) {
        b = 0; //0 and 8 are the same so turn 8 into 0
    }
    
    return b;
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
    
    //Time Functions
    
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
     hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
    
//Button to control Clock
if (buttonnumber > 4){buttonnumber=0;}
    
button.onclick = function() {
  buttonnumber += 1;
  if (buttonnumber ==1){button.innerHTML = "Almanac: "+ getAlmanac();}
  else if (buttonnumber ==2){button.innerHTML = "Zodiac: "+getHoroscope();}
  else if (buttonnumber ==3){button.innerHTML = "Today is "+dayNames[week]+ " , "+ monthNames[month] + " "+ day + ", "+ year;}
  else if (buttonnumber == 4){button.innerHTML = "Moon Phase: "+ moonNames[getMoonPhase(year, month, day)];}
  else{button.innerHTML = "Clock Showing :  <"+ hr + ":"+ min+ ":"+sec+">" ;}
};

    if (buttonnumber == 1){star.style.backgroundImage= "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/"+ month+ ".png?raw=true')";}
    else if(buttonnumber == 2){star.style.backgroundImage= "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/"+ astro +".png?raw=true')";}
     else if(buttonnumber == 3){
     if (month==11 && (day>7||day<15)){
          if (sec%2==0){star.style.backgroundImage= "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/copyright12.png?raw=true')";}
     else{star.style.backgroundImage= "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/copyright12s1.png?raw=true')";}
     
     }else{
     
     if (sec%2==0){star.style.backgroundImage= "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/copyright"+ month +".png?raw=true')";}
     else{star.style.backgroundImage= "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/copyright"+ month +"s1.png?raw=true')";}}}

   else if (buttonnumber == 4){star.style.backgroundImage= "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/moon"+ getMoonPhase(year, month, day) + ".png?raw=true')";}   

    else{
   star.style.backgroundImage= "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/"+min%10+"star"+sec%2+".png?raw=true')";}
   
  //end of interval 

}, 1000);
};
