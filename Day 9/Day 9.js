const body = document.body;

const h3 = document.createElement('h3')
const h31 = document.createElement('h3')
const hr = document.createElement('hr')
const hr1 = document.createElement('hr')

h3.innerText = "Method 1 : Using built-in function called split(),reverse() and join()";
body.append(h3)


function reverseStr1(str1){
   //use split() method to return new Array
   var splitString = str1.split("");
   //use reverse() method to return reverse Array
   var reverseString = splitString.reverse();

   // use join() method to join all element of array into a string
   var joinArray = reverseString.join("");

   return joinArray;
}
document.write("Reverse String of ",('Hello') ," is ",reverseStr1('Hello') )

body.append(hr)

h31.innerText = "Method 2 : Using For Loop";
body.append(h31)

function reverseStr2(str2){
    //created an empty string that will host the new string
    var newString = "";
    
    //creating a For Loop
    for(var i = str2.length -1; i >= 0 ; i-- ){
        newString += str2[i];
    }
    
    //Return Reversed new String
    return newString;
}
document.write("Reverse String of ",('World') ," is ",reverseStr2('World'))
body.append(hr1)
