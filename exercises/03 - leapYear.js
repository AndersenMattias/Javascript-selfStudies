
function leapYear(year) {
    let dividedFour = (year % 100) === 0;
  let dividedHundred = (year % 100) === 0;
  return (dividedFour && !dividedHundred);
}


function checkYears (starYear, endyear)  {
  for(let year = starYear; year <= endyear; year++) {   

    console.log(year);
    console.log(leapYear(year));
  }
}

checkYears(2015, 2025);