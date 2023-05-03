window.onload = function() {

  var buttonnumber = 0;
  var buttonMonthnumber = 0;
  var buttonYearnumber = 0;
  var buttonDaynumber = 0;
  var button = document.getElementById("clickme");
  var buttonM = document.getElementById("clickMonth");
  var buttonD = document.getElementById("clickDay");
  var buttonY = document.getElementById("clickYear");
  var zero =1;
  var zero1 =1;
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
  const moonNames = ['New Moon', 'Waxing Crescent Moon', 'Quarter Moon', 'Waxing Gibbous Moon', 'Full Moon', 'Waning Gibbous Moon', 'Last Quarter Moon', 'Waning Crescent Moon'];

  setInterval(() => {

    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    month = (d.getMonth()*zero) + buttonMonthnumber;
    day = (d.getDate()*zero1) + buttonDaynumber;
    year = (d.getFullYear()) + buttonYearnumber;
    week = d.getDay();
    astro = getHoroscope();
    buttonY.innerHTML = year - 2000;
    buttonD.innerHTML = (day);
    buttonM.innerHTML = (month + 1);


    function getHoroscope() {
      if (month == 0) {
        if (day > 0 && day < 19) {
          return "Capricorn";
        } else {
          return "Aquarius";
        }
      } else if (month == 1) {
        if (day > 1 && day < 18) {
          return "Capricorn";
        } else {
          return "Pisces";
        }
      } else if (month == 2) {
        if (day > 1 && day < 20) {
          return "Pisces";
        } else {
          return "Aries";
        }
      } else if (month == 3) {
        if (day > 1 && day < 19) {
          return "Aries";
        } else {
          return "Taurus";
        }
      } else if (month == 4) {
        return "Taurus";
      } else if (month == 5) {
        if (day > 1 && day < 20) {
          return "Gemini";
        } else {
          return "Cancer";
        }
      } else if (month == 6) {
        if (day > 1 && day < 22) {
          return "Cancer";
        } else {
          return "Leo";
        }
      } else if (month == 7) {
        if (day > 1 && day < 22) {
          return "Leo";
        } else {
          return "Virgo";
        }
      } else if (month == 8) {
        if (day > 1 && day < 22) {
          return "Virgo";
        } else {
          return "Libra";
        }
      } else if (month == 9) {
        if (day > 1 && day < 22) {
          return "Libra";
        } else {
          return "Scorpio";
        }
      } else if (month == 10) {
        if (day > 1 && day < 21) {
          return "Scorpio";
        } else {
          return "Sagittarius";
        }
      } else if (month == 11) {
        if (day > 1 && day < 21) {
          return "Sagittarius";
        } else {
          return "Capricorn";
        }
      } else {
        return "Aries";
      }
    }

    function getFullMoonDate() {

      if (year == 2022 && month == 0) {
        return 17;
      } else if (year == 2022 && month == 1) {
        return 16;
      } else if (year == 2022 && month == 2) {
        return 18;
      } else if (year == 2022 && month == 3) {
        return 16;
      } else if (year == 2022 && month == 4) {
        return 16;
      } else if (year == 2022 && month == 5) {
        return 14;
      } else if (year == 2022 && month == 6) {
        return 13;
      } else if (year == 2022 && month == 7) {
        return 11;
      } else if (year == 2022 && month == 8) {
        return 10;
      } else if (year == 2022 && month == 9) {
        return 9;
      } else if (year == 2022 && month == 10) {
        return 8;
      } else if (year == 2022 && month == 11) {
        return 7;
      } else if (year == 2023 && month == 0) {
        return 6;
      } else if (year == 2023 && month == 1) {
        return 5;
      } else if (year == 2023 && month == 2) {
        return 7;
      } else if (year == 2023 && month == 3) {
        return 5;
      } else if (year == 2023 && month == 4) {
        return 5;
      } else if (year == 2023 && month == 5) {
        return 3;
      } else if (year == 2023 && month == 6) {
        return 3;
      } else if (year == 2023 && month == 7) {
        return 1;
      } else if (year == 2023 && month == 8) {
        return 29;
      } else if (year == 2023 && month == 9) {
        return 28;
      } else if (year == 2023 && month == 10) {
        return 27;
      } else if (year == 2023 && month == 11) {
        return 26;
      } else if (year == 2024 && month == 0) {
        return 25;
      } else if (year == 2024 && month == 1) {
        return 24;
      } else if (year == 2024 && month == 2) {
        return 25;
      } else if (year == 2024 && month == 3) {
        return 23;
      } else if (year == 2024 && month == 4) {
        return 23;
      } else if (year == 2024 && month == 5) {
        return 21;
      } else if (year == 2024 && month == 6) {
        return 21;
      } else if (year == 2024 && month == 7) {
        return 19;
      } else if (year == 2024 && month == 8) {
        return 17;
      } else if (year == 2024 && month == 9) {
        return 17;
      } else if (year == 2024 && month == 10) {
        return 15;
      } else if (year == 2024 && month == 11) {
        return 15;
      } else if (year == 2025 && month == 0) {
        return 13;
      } else if (year == 2025 && month == 1) {
        return 12;
      } else if (year == 2025 && month == 2) {
        return 13;
      } else if (year == 2025 && month == 3) {
        return 12;
      } else if (year == 2025 && month == 4) {
        return 12;
      } else if (year == 2025 && month == 5) {
        return 11;
      } else if (year == 2025 && month == 6) {
        return 10;
      } else if (year == 2025 && month == 7) {
        return 9;
      } else if (year == 2025 && month == 8) {
        return 7;
      } else if (year == 2025 && month == 9) {
        return 6;
      } else if (year == 2025 && month == 10) {
        return 5;
      } else if (year == 2025 && month == 11) {
        return 4;
      } else if (year == 2026 && month == 0) {
        return 3;
      } else if (year == 2026 && month == 1) {
        return 1;
      } else if (year == 2026 && month == 2) {
        return 3;
      } else if (year == 2026 && month == 3) {
        return 1;
      } else if (year == 2026 && month == 4) {
        return 1;
      } else if (year == 2026 && month == 5) {
        return 29;
      } else if (year == 2026 && month == 6) {
        return 29;
      } else if (year == 2026 && month == 7) {
        return 27;
      } else if (year == 2026 && month == 8) {
        return 26;
      } else if (year == 2026 && month == 9) {
        return 25;
      } else if (year == 2026 && month == 10) {
        return 24;
      } else if (year == 2026 && month == 11) {
        return 23;
      } else if (year == 2027 && month == 0) {
        return 22;
      } else if (year == 2027 && month == 1) {
        return 20;
      } else if (year == 2027 && month == 2) {
        return 22;
      } else if (year == 2027 && month == 3) {
        return 20;
      } else if (year == 2027 && month == 4) {
        return 20;
      } else if (year == 2027 && month == 5) {
        return 18;
      } else if (year == 2027 && month == 6) {
        return 18;
      } else if (year == 2027 && month == 7) {
        return 17;
      } else if (year == 2027 && month == 8) {
        return 15;
      } else if (year == 2027 && month == 9) {
        return 15;
      } else if (year == 2027 && month == 10) {
        return 13;
      } else if (year == 2027 && month == 11) {
        return 13;
      } else if (year == 2028 && month == 0) {
        return 11;
      } else if (year == 2028 && month == 1) {
        return 10;
      } else if (year == 2028 && month == 2) {
        return 10;
      } else if (year == 2028 && month == 3) {
        return 9;
      } else if (year == 2028 && month == 4) {
        return 8;
      } else if (year == 2028 && month == 5) {
        return 6;
      } else if (year == 2028 && month == 6) {
        return 6;
      } else if (year == 2028 && month == 7) {
        return 5;
      } else if (year == 2028 && month == 8) {
        return 3;
      } else if (year == 2028 && month == 9) {
        return 3;
      } else if (year == 2028 && month == 10) {
        return 2;
      } else if (year == 2028 && month == 11) {
        return 1;
      } else if (year == 2029 && month == 0) {
        return 29;
      } else if (year == 2029 && month == 1) {
        return 28;
      } else if (year == 2029 && month == 2) {
        return 29;
      } else if (year == 2029 && month == 3) {
        return 28;
      } else if (year == 2029 && month == 4) {
        return 27;
      } else if (year == 2029 && month == 5) {
        return 25;
      } else if (year == 2029 && month == 6) {
        return 25;
      } else if (year == 2029 && month == 7) {
        return 23;
      } else if (year == 2029 && month == 8) {
        return 22;
      } else if (year == 2029 && month == 9) {
        return 22;
      } else if (year == 2029 && month == 10) {
        return 20;
      } else if (year == 2029 && month == 11) {
        return 20;
      } else if (year == 2030 && month == 0) {
        return 19;
      } else if (year == 2030 && month == 1) {
        return 17;
      } else if (year == 2030 && month == 2) {
        return 19;
      } else if (year == 2030 && month == 3) {
        return 17;
      } else if (year == 2030 && month == 4) {
        return 15;
      } else if (year == 2030 && month == 5) {
        return 14;
      } else if (year == 2030 && month == 6) {
        return 13;
      } else if (year == 2030 && month == 7) {
        return 11;
      } else if (year == 2030 && month == 8) {
        return 11;
      } else if (year == 2030 && month == 9) {
        return 11;
      } else if (year == 2030 && month == 10) {
        return 9;
      } else if (year == 2030 && month == 11) {
        return 9;
      } else {
        return 1;
      }
    }

    function getMoonPhase(year, month, day) {
      var c = e = jd = b = 0;

      if (month < 3) {
        year--;
        month += 12;
      }

      ++month;

      c = 365.2422 * year;

      e = 30.436875 * month;

      jd = c + e + day - 694039.09; //jd is total days elapsed

      jd /= 29.5305882; //divide by the moon cycle

      b = parseInt(jd); //int(jd) -> b, take integer part of jd

      jd -= b; //subtract integer part to leave fractional part of original jd

      b = Math.round(jd * 8); //scale fraction from 0-8 and round

      if (b >= 8) {
        b = 0; //0 and 8 are the same so turn 8 into 0
      }

      return b;
    }



    function getAlmanac() {

      if (month == 0) {
        return "Wolf Moon";
      } else if (month == 1) {
        return "Snow Moon";
      } else if (month == 2) {
        return "Worm Moon";
      } else if (month == 3) {
        return " Pink Moon";
      } else if (month == 4) {
        return "Flower Moon";
      } else if (month == 5) {
        return "Strawberry Moon";
      } else if (month == 6) {
        return "Buck Moon";
      } else if (month == 7) {
        return "Sturgeon Moon";
      } else if (month == 8) {
        return "Corn Moon";
      } else if (month == 9) {
        return "Harvest Moon";
      } else if (month == 10) {
        return "Beaver Moon";
      } else if (month == 11) {
        return "Cold Moon";
      } else {
        return "Moon";
      }
    }

    function Holiday() {

      if (month == 10 && day == 24 && year == 2022) {
        return " Happy Thanksgiving!";
      } else if (month == 10 && day == 23 && year == 2023) {
        return " Happy Thanksgiving!";
      } else if (month == 10 && day == 28 && year == 2024) {
        return " Happy Thanksgiving!";
      } else if (month == 10 && day == 27 && year == 2025) {
        return " Happy Thanksgiving!";
      } else if (month == 10 && day == 26 && year == 2026) {
        return " Happy Thanksgiving!";
      } else if (month == 10 && day == 25 && year == 2027) {
        return " Happy Thanksgiving!";
      } else if (month == 10 && day == 23 && year == 2028) {
        return " Happy Thanksgiving!";
      } else if (month == 10 && day == 22 && year == 2029) {
        return " Happy Thanksgiving!";
      } else if (month == 10 && day == 28 && year == 2030) {
        return " Happy Thanksgiving!";
      } else if (month == 10 && day == 27 && year == 2031) {
        return " Happy Thanksgiving!";
      } else if (month == 10 && day == 25 && year == 2032) {
        return " Happy Thanksgiving!";
      } else if (month == 1 && day == 1 && year == 2022) {
        return "Happy Lunar New Year!";
      } else if (month == 0 && day == 22 && year == 2023) {
        return "Happy Lunar New Year!";
      } else if (month == 1 && day == 10 && year == 2024) {
        return "Happy Lunar New Year!";
      } else if (month == 0 && day == 29 && year == 2025) {
        return "Happy Lunar New Year!";
      } else if (month == 1 && day == 17 && year == 2026) {
        return "Happy Lunar New Year!";
      } else if (month == 1 && day == 7 && year == 2027) {
        return "Happy Lunar New Year!";
      } else if (month == 0 && day == 26 && year == 2028) {
        return "Happy Lunar New Year!";
      } else if (month == 1 && day == 13 && year == 2029) {
        return "Happy Lunar New Year!";
      } else if (month == 1 && day == 2 && year == 2030) {
        return "Happy Lunar New Year!";
      } else if (month == 5 && day == 19 && year == 2022) {
    return "Happy Father's Day!";
  } else if (month == 5 && day == 18 && year == 2023) {
    return "Happy Father's Day!";
  } else if (month == 5 && day == 16 && year == 2024) {
    return "Happy Father's Day!";
  } else if (month == 5 && day == 15 && year == 2025) {
    return "Happy Father's Day!";
  } else if (month == 5 && day == 21 && year == 2026) {
    return "Happy Father's Day!";
  } else if (month == 5 && day == 20 && year == 2027) {
    return "Happy Father's Day!";
  } else if (month == 5 && day == 18 && year == 2028) {
    return "Happy Father's Day!";
  } else if (month == 5 && day == 17 && year == 2029) {
    return "Happy Father's Day!";
  } else if (month == 5 && day == 16 && year == 2030) {
    return "Happy Father's Day!";
  } else if (month == 4 && day == 8 && year == 2022) {
        return "Happy Mother's Day!";
      } else if (month == 4 && day == 14 && year == 2023) {
        return "Happy Mother's Day!";
      } else if (month == 4 && day == 12 && year == 2024) {
        return "Happy Mother's Day!";
      } else if (month == 4 && day == 11 && year == 2025) {
        return "Happy Mother's Day!";
      } else if (month == 4 && day == 10 && year == 2026) {
        return "Happy Mother's Day!";
      } else if (month == 4 && day == 9 && year == 2027) {
        return "Happy Mother's Day!";
      } else if (month == 4 && day == 14 && year == 2028) {
        return "Happy Mother's Day!";
      } else if (month == 4 && day == 13 && year == 2029) {
        return "Happy Mother's Day!";
      } else if (month == 4 && day == 12 && year == 2030) {
        return "Happy Mother's Day!";
      }else if (month == 3 && day == 17 && year == 2022) {
        return "Happy Easter!";
      } else if (month == 3 && day == 9 && year == 2023) {
        return "Happy Easter!";
      } else if (month == 2 && day == 31 && year == 2024) {
        return "Happy Easter!";
      } else if (month == 3 && day == 20 && year == 2025) {
        return "Happy Easter!";
      } else if (month == 3 && day == 5 && year == 2026) {
        return "Happy Easter!";
      } else if (month == 2 && day == 28 && year == 2027) {
        return "Happy Easter!";
      } else if (month == 3 && day == 16 && year == 2028) {
        return "Happy Easter!";
      } else if (month == 3 && day == 1 && year == 2029) {
        return "Happy Easter!";
      } else if (month == 3 && day == 21 && year == 2030) {
        return "Happy Easter!";
      } else if (month == 3 && day == 13 && year == 2031) {
        return "Happy Easter!";
      } else if (month == 2 && day == 28 && year == 2032) {
        return "Happy Easter!";
      } else if (month == 9 && day == 31) {
        return "Happy Halloween!";
      } else if (month == 11 && day == 25) {
        return "Merry Christmas!";
      }else if (month == 1 && day == 14) {
        return "Happy Valentine's Day!";
      }else if (month == 5 && day == 19) {
        return "Celebrate Juneteenth!";
      }else if (month == 10 && day == 11) {
        return "Happy Veterans Day!";
      } else if (month == 11 && day == 24) {
        return "Merry Christmas Eve!";
      } else if (month == 11 && day == 31) {
        return "Happy New Year's Eve!";
      } else if (month == 0 && day == 1) {
        return "Happy New Year!";
      } else if (month == 6 && day == 4) {
        return "Happy Fourth of July!";
      } else if (month == 4 && day == 4) {
        return "May the 4th be with you!";
      } else if (month == 2 && day == 17) {
        return "Happy St. Patrick's Day!";
      } else if (month == 4 && day == 5) {
        return "Happy Cinco de Mayo!";
      }else if (month == 10 && day == 1) {
        return "Happy Día de los Muertos!";
      }else if ((year) == 2022 && month == 11 && (day > 18 && day < 23)) {
        return "Happy Hanukkah!";
      } else if ((year) == 2023 && month == 11 && (day > 7 && day < 15)) {
        return "Happy Hanukkah!";
      } else if ((year) == 2024 && month == 11 && (day > 26 && day < 30)) {
        return "Happy Hanukkah!";
      } else if ((year) == 2025 && month == 11 && (day > 14 && day < 22)) {
        return "Happy Hanukkah!";
      } else if ((year) == 2026 && month == 11 && (day > 4 && day < 12)) {
        return "Happy Hanukkah!";
      } else if ((year) == 2027 && month == 11 && (day > 26 && day < 30)) {
        return "Happy Hanukkah!";
      } else if ((year) == 2028 && month == 11 && (day > 12 && day < 20)) {
        return "Happy Hanukkah!";
      } else if ((year) == 2029 && month == 11 && (day > 1 && day < 9)) {
        return "Happy Hanukkah!";
      } else if ((year) == 2030 && month == 11 && (day > 20 && day < 23)) {
        return "Happy Hanukkah!";
      } else {
        return "Today is " + dayNames[week] + " , " + monthNames[month] + " " + day + " " + year;
      }
    }



    function planetnews() {
    if (year == 2022 && month == 0) {
      return "Mercury Visible at Sunset until 30th";
    } else if (year == 2022 && month == 1) {
      return "Venus Brightest on February 9";
    } else if (year == 2022 && month == 2) {
      return "Spring Equinox on March 20th";
    } else if (year == 2022 && month == 3) {
      return "Mercury will be visible at Sunrise until 30th";
    } else if (year == 2022 && month == 4) {
      return "May 6: Eta Aquarid Meteors";
    } else if (year == 2022 && month == 5) {
      return "June 20: Summer Solstice";
    } else if (year == 2022 && month == 6) {
      return "Pluto at Opposition Jul 20";
    } else if (year == 2022 && month == 7) {
      return "August 24 : Uranus begins retrograde motion";
    } else if (year == 2022 && month == 8) {
      return "Fall Equinox September 22nd";
    } else if (year == 2022 && month == 9) {
      return "Mars in Retrograde October 30";
    } else if (year == 2022 && month == 10) {
      return "Uranus at opposition – November 9";
    } else if (year == 2022 && month == 11) {
      return "Dec 21: Winter Solstice";
    } else if (year == 2023 && month == 0) {
      return "Jan 7: Inferior conjunction Mercury";
    } else if (year == 2023 && month == 1) {
      return "February 16: Saturn in conjunction with the sun";
    } else if (year == 2023 && month == 2) {
      return "Spring Equinox on March 20th";
    } else if (year == 2023 && month == 3) {
      return "April 11: Jupiter at solar conjunction";
    } else if (year == 2023 && month == 4) {
      return "Mercury Visible at Sunrise until 30th";
    } else if (year == 2023 && month == 5) {
      return "June 21: Summer Solstice";
    } else if (year == 2023 && month == 6) {
      return "Pluto at Opposition : July 22 ";
    } else if (year == 2023 && month == 7) {
      return "August 13th: Perseid Meteor Shower";
    } else if (year == 2023 && month == 8) {
      return "Fall Equinox September 23rd";
    } else if (year == 2023 && month == 9) {
      return "October 22 - Orionids Meteor Shower";
    } else if (year == 2023 && month == 10) {
      return "Uranus at opposition – November 13";
    } else if (year == 2023 && month == 11) {
      return "Winter Solstice on Dec 21st";
    } else if (year == 2024 && month == 0) {
      return "January 4 - Quadrantids Meteor Shower";
    } else if (year == 2024 && month == 1) {
      return "Centaurid Meteor Shower";
    } else if (year == 2024 && month == 2) {
      return "Spring Equinox March 19th";
    } else if (year == 2024 && month == 3) {
      return "April 8: Total Solar Eclipse parts of USA";
    } else if (year == 2024 && month == 4) {
      return "May 7 - Eta Aquarids Meteor Shower";
    } else if (year == 2024 && month == 5) {
      return "Summer Solstice Jun 20th";
    } else if (year == 2024 && month == 6) {
      return "Mercury visible at Sunset until 30th";
    } else if (year == 2024 && month == 7) {
      return "August 13 - Perseids Meteor Shower";
    } else if (year == 2024 && month == 8) {
      return "Fall Equinox September 24";
    } else if (year == 2024 && month == 9) {
      return "October 22 - Orionids Meteor Shower";
    } else if (year == 2024 && month == 10) {
      return "Mercury visible at Sunset until 30th";
    } else if (year == 2024 && month == 11) {
      return "Winter Solstice Dec 21st";
    } else if (year == 2025 && month == 0) {
      return "Mars at Opposition on January 16th";
    } else if (year == 2025 && month == 1) {
      return "Venus at greatest brightness: Feb 16";
    } else if (year == 2025 && month == 2) {
      return "Spring Equinox March 20th";
    } else if (year == 2025 && month == 3) {
      return "April 23rd - Lyrids Meteor Shower";
    } else if (year == 2025 && month == 4) {
      return "May 7th - Eta Aquarids Meteor Shower";
    } else if (year == 2025 && month == 5) {
      return "Summer Solstice June 20th";
    } else if (year == 2025 && month == 6) {
      return "July 29th - Delta Aquarids Meteor Shower";
    } else if (year == 2025 && month == 7) {
      return "August 13th - Perseids Meteor Shower";
    } else if (year == 2025 && month == 8) {
      return "Fall Equinox: September 22nd";
    } else if (year == 2025 && month == 9) {
      return "October 22nd - Orionids Meteor Shower";
    } else if (year == 2025 && month == 10) {
      return "November 5th - Taurids Meteor Shower";
    } else if (year == 2025 && month == 11) {
      return "Winter Solstice : December 21st";
    } else if (year == 2026 && month == 2) {
      return "Spring Equinox March 20th";
    } else if (year == 2026 && month == 5) {
      return "Summer Solstice June 21st";
    } else if (year == 2026 && month == 8) {
      return "Fall Equinox: September 22nd";
    } else if (year == 2026 && month == 11) {
      return "Winter Solstice : December 21st";
    } else if (year == 2027 && month == 2) {
      return "Spring Equinox March 20th";
    } else if (year == 2027 && month == 5) {
      return "Summer Solstice June 21st";
    } else if (year == 2027 && month == 8) {
      return "Fall Equinox: September 22nd";
    } else if (year == 2027 && month == 11) {
      return "Winter Solstice : December 21st";
    } else if (year == 2028 && month == 2) {
      return "Spring Equinox March 19th";
    } else if (year == 2028 && month == 5) {
      return "Summer Solstice June 20th";
    } else if (year == 2028 && month == 8) {
      return "Fall Equinox: September 22nd";
    } else if (year == 2028 && month == 11) {
      return "Winter Solstice : December 21st";
    } else if (year == 2029 && month == 2) {
      return "Spring Equinox March 20th";
    } else if (year == 2029 && month == 5) {
      return "Summer Solstice June 20th";
    } else if (year == 2029 && month == 8) {
      return "Fall Equinox: September 22nd";
    } else if (year == 2029 && month == 11) {
      return "Winter Solstice : December 21st";
    } else if (year == 2030 && month == 2) {
      return "Spring Equinox March 20th";
    } else if (year == 2030 && month == 5) {
      return "Summer Solstice June 21st";
    } else if (year == 2030 && month == 8) {
      return "Fall Equinox: September 22nd";
    } else if (year == 2030 && month == 11) {
      return "Winter Solstice : December 21st";
    }
   
     //Conjunction Opposition data not on Months == 2 5 8 11 for 2026 - 2030 
  else if (year == 2026 && month == 0) {
    return "Jupiter at opposition: Jan 10th";
  } else if (year == 2026 && month == 4) {
    return "Mercury at solar conjunction: May 14th";
  }  else if (year == 2026 && month == 6) {
    return "Jupiter at solar conjunction: July 29th";
  }  else if (year == 2026 && month == 7) {
    return "Mercury at solar conjunction: Aug 27";
  }  else if (year == 2026 && month == 9) {
    return "Venus at solar conjunction: Oct 23rd";
  }  else if (year == 2026 && month == 10) {
    return "Uranus at opposition: Nov 25th";
    //2027
  }else if (year == 2027 && month == 0) {
    return "Mercury at solar conjunction Jan 1st";
  }  else if (year == 2027 && month == 1) {
    return "Jupiter at opposition: Feb 10th";
  }  else if (year == 2027 && month == 3) {
    return "Saturn at solar conjunction April 7th";
  }  else if (year == 2027 && month == 4) {
    return "Uranus at solar conjunction May 26th";
  }  else if (year == 2027 && month == 7) {
    return "Venus at solar conjunction Aug 11th";
  }  else if (year == 2027 && month == 9) {
    return "Saturn at opposition: Oct 17th";
  }  else if (year == 2027 && month == 10) {
    return "Uranus at opposition: Nov 30th";
  }
//2028
  else if (year == 2028 && month == 0) {
    return "Pluto at solar conjunction Jan 27th";
  }  else if (year == 2028 && month == 1) {
    return "Mercury at solar conjunction: Feb 2nd";
  }  else if (year == 2028 && month == 3) {
    return "Saturn at solar conjunction April 20th";
  }  else if (year == 2028 && month == 4) {
    return "Uranus at solar conjunction May 30th";
  }  else if (year == 2028 && month == 6) {
    return "Mercury at solar conjunction July 25th";
  }  else if (year == 2028 && month == 9) {
    return "Mercury at solar conjunction Oct 2nd";
  }  else if (year == 2028 && month == 10) {
    return "Mercury at solar conjunction: Nov 19th";
  }

  //2029
  else if (year == 2029 && month == 0) {
    return "Pluto at solar conjunction Jan 28th";
  } else if (year == 2029 && month == 3) {
    return "Jupiter at opposition April 11th";
  }  else if (year == 2029 && month == 4) {
    return "Saturn at solar conjunction: May 4th";
  }  else if (year == 2029 && month == 6) {
    return "Mercury at solar conjunction: July 9th";
  } else if (year == 2029 && month == 9) {
    return "Neptune at opposition: October 2nd";
  }  else if (year == 2029 && month == 10) {
    return "Saturn at opposition: Nov 13th";
  }

    //2030
    else if (year == 2030 && month == 0) {
        return "Venus at solar conjunction Jan 6th";
      } else if (year == 2029 && month == 3) {
        return "Mercury at solar conjunction: April 23rd";
      }  else if (year == 2029 && month == 4) {
        return "Jupiter at opposition: May 13th";
      }  else if (year == 2029 && month == 6) {
        return "Mercury at solar conjunction: July 9th";
      }  else if (year == 2029 && month == 7) {
        return "Mercury at solar conjunction Aug 29";
      }  else if (year == 2029 && month == 9) {
        return "Neptune at opposition: October 4th";
      }  else if (year == 2029 && month == 10) {
        return "Saturn at opposition: Nov 27th";
      }
    
    else {
      return "Meteor Shower this Month!";
    }
  }

    function planetType() {
      if ((planetnews()).includes("Solstice") || (planetnews()).includes("Equinox")) {
        return "Sun";
      } else if ((planetnews()).includes("Meteor") || (planetnews()).includes("Shower")) {
        return "Shower";
      } else if ((planetnews()).includes("Mercury")) {
        return "Mercury";
      } else if ((planetnews()).includes("Venus")) {
        return "Venus";
      } else if ((planetnews()).includes("Mars")) {
        return "Mars";
      } else if ((planetnews()).includes("Jupiter")) {
        return "Jupiter";
      } else if ((planetnews()).includes("Saturn")) {
        return "Saturn";
      } else if ((planetnews()).includes("Uranus")) {
        return "Uranus";
      } else if ((planetnews()).includes("Neptune")) {
        return "Neptune";
      } else if ((planetnews()).includes("Pluto")) {
        return "Pluto";
      } else {
        return "Shower";
      }
    }


    //Time Functions

    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;

    //Button to control Clock
    if (buttonnumber > 5) {
      buttonnumber = 0;
    }


    //Button to control Clock
    if (day > 31) {
      buttonDaynumber = 0;
      zero1 = 0;
    }

    //Button to control Clock
    if (month > 11) {
    zero = 0;
      buttonMonthnumber = 0;
    }

    //Button to control Clock
    if (year > 2029) {
    zero=0;
      buttonYearnumber = 0;
    }

    buttonM.onclick = function() {
      buttonMonthnumber++;
      
    };

    buttonD.onclick = function() {
      buttonDaynumber++;

    };

    buttonY.onclick = function() {
      buttonYearnumber++;

    };

    button.onclick = function() {
      buttonnumber++;
    };

    if (buttonnumber == 1) {
      button.innerHTML = getAlmanac() + " : " + monthNames[month] + " " + getFullMoonDate();
    } else if (buttonnumber == 2) {
      button.innerHTML = "Zodiac: " + getHoroscope();
    } else if (buttonnumber == 4) {
      button.innerHTML = Holiday();
    } else if (buttonnumber == 5) {
      button.innerHTML = "Moon Phase: " + moonNames[getMoonPhase(year, month, day)];
    } else if (buttonnumber == 3) {
      button.innerHTML = planetnews();
    } else {
      button.innerHTML = "Try it!";
    }


    if (buttonnumber == 1) {
      star.style.backgroundImage = "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/" + month + ".png?raw=true')";
    } else if (buttonnumber == 2) {
      star.style.backgroundImage = "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/" + astro + ".png?raw=true')";
    } else if (buttonnumber == 4) {
      if (Holiday() == "Happy Hanukkah!") {
        if (sec % 2 == 0) {
          star.style.backgroundImage = "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/copyright12.png?raw=true')";} else {
          star.style.backgroundImage = "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/copyright12s1.png?raw=true')";
        }}
 
 else if (Holiday() == "Happy Lunar New Year!") {
          star.style.backgroundImage = "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/13" + sec % 2 + ".png?raw=true')";
        } else if (Holiday() == "Happy Cinco de Mayo!") {
           star.style.backgroundImage = "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/14" + sec % 2 + ".png?raw=true')"
        } else if (Holiday() == "Happy Fourth of July!") {
          star.style.backgroundImage = "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/15" + sec % 2 + ".png?raw=true')"; } 
else if (Holiday() == "Happy Easter!") {
          star.style.backgroundImage = "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/16" + sec % 2 + ".png?raw=true')"; } 
else if (Holiday() == "Happy St. Patrick's Day!") {
          star.style.backgroundImage = "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/17" + sec % 2 + ".png?raw=true')"; } 
else if (Holiday() == "Happy Father's Day!") {
          star.style.backgroundImage = "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/18" + sec % 2 + ".png?raw=true')"; }    
else if (Holiday() == "Happy Mother's Day!") {
          star.style.backgroundImage = "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/19" + sec % 2 + ".png?raw=true')"; }   
 else if (Holiday() == "Happy Valentine's Day!") {
          star.style.backgroundImage = "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/20" + sec % 2 + ".png?raw=true')"; }   
else if (Holiday() == "Happy Día de los Muertos!") {
          star.style.backgroundImage = "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/21" + sec % 2 + ".png?raw=true')"; }  
 else if (Holiday() == "Happy New Year's Eve!" || Holiday() == "Happy New Year!") {
          star.style.backgroundImage = "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/22" + sec % 2 + ".png?raw=true')"; }            
 else if (Holiday() ==  " Happy Thanksgiving!") {
          star.style.backgroundImage = "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/23" + sec % 2 + ".png?raw=true')"; }            
 else if (Holiday() == "Happy Halloween!") {
          star.style.backgroundImage = "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/24" + sec % 2 + ".png?raw=true')"; }            
 
      else {
        if (sec % 2 == 0) {
          star.style.backgroundImage = "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/copyright" + month + ".png?raw=true')";
        } else {
          star.style.backgroundImage = "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/copyright" + month + "s1.png?raw=true')";
        }
      }
    } else if (buttonnumber == 5) {
      star.style.backgroundImage = "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/moon" + getMoonPhase(year, month, day) + ".png?raw=true')";
    } else if (buttonnumber == 3) {
      star.style.backgroundImage = "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/" + planetType() + ".png?raw=true')";
    } else {
      star.style.backgroundImage = "url('https://github.com/SarahBass/SarahBass.github.io/blob/main/images/" + min % 10 + "star" + sec % 2 + ".png?raw=true')";
    }

    //end of interval 

  }, 1000);
};
