 const baseValue = prompt('Enter the base of a triangle: ');
 const heightValue = prompt('Enter the height of a triangle: ');

// calculate the area
const areaValue1 = (baseValue * heightValue) / 2;

 document.write(
   `The area of the triangle is ${areaValue1}`
 ,'<br>');


// JavaScript program to find the area of a triangle

const side1 = parseInt(prompt('Enter side1: '));
const side2 = parseInt(prompt('Enter side2: '));
const side3 = parseInt(prompt('Enter side3: '));

// calculate the semi-perimeter
const s = (side1 + side2 + side3) / 2;

//calculate the area
const areaValue = Math.sqrt(
  s * (s - side1) * (s - side2) * (s - side3) );

 document.write(
   `The area of the triangle with Heron's Formula is ${areaValue}`
 );