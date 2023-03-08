var buttonnumber=0;
var button = document.getElementById("clickme")
setInterval(() => {
    
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    month = d.getMonth();
    day = d.getDate();
    astro = getHoroscope();
    
    function getHoroscope() {
    return "Aries";
    }
    
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
    if (buttonnumber > 2){buttonnumber=0;}
    

button.onclick = function() {
  buttonnumber += 1;
  if (buttonnumber ==1){button.innerHTML = "Moon Almanac";}
  else if (buttonnumber ==2){button.innerHTML = "Month Zodiac";}
  else{button.innerHTML = "Try it!";}
};

    if (buttonnumber == 1){star.style.backgroundImage= "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/"+ month+ ".png?raw=true')";}
    else if(buttonnumber == 2){star.style.backgroundImage= "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/"+ astro +".png?raw=true')";}
    else{
   star.style.backgroundImage= "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/"+min%10+"star"+sec%2+".png?raw=true')";}
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);
