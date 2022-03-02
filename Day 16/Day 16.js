// program to check leap year

function checkLeapYrs(year){

    //Three condition to find out the leap year
    if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
        console.log(year + " is a leap year.");
    }
    else{
      console.log(year + " is not a leap year.");
    }
}

//take input
const year = prompt('Enter a year: ');

checkLeapYrs(year)

// // program to check leap year using newDate()
// function checkLeapYrs(year1){

//     const leap = newDate(year,1,29).getDate() === 29;

//     //Three condition to find out the leap year
//     if(leap){
//         console.log(year1 + " is a leap year.");
//     }
//     else{
//       console.log(year1 + " is not a leap year.");
//     }
// }

// //take input
// const year1 = prompt('Enter a year: ');

// checkLeapYrs(year1)