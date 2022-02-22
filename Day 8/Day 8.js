const body = document.body;
const h1 = document.createElement('h3')
const h1a = document.createElement('h3')
const h1b = document.createElement('h3')
const h1c = document.createElement('h3')
const p = document.createElement('p')
const p1 = document.createElement('p')
const p2 = document.createElement('p')
const p3 = document.createElement('p')
const hr1 = document.createElement('hr')
const hr2 = document.createElement('hr')
const hr3 = document.createElement('hr')
const hr4 = document.createElement('hr')


const arr = [1, 2, 3, 4];


h1.innerText = "Method 1 : using built-in function called reduce()";

p.innerText = "Imagine We have array  of [1, 2, 3, 4]";
//using built-in function called reduce()
function total(arr){
   if(!Array.isArray(arr)) return;
   return arr.reduce((a,v) => a + v);
}


body.append(h1)
body.append(p)
document.write("sum of array ",'[',(arr),']' ," from method 1 is ", total(arr))
body.append(hr1)


p1.innerText = "Imagine We have array  of [5, 6, 7, 8]";

const arr1 = [5, 6, 7, 8];

h1a.innerText = "Method 2 : using for loop";

//using for loop 
function totalNum(arr1){
    if(!Array.isArray(arr)) return;
    let totalNumber1 = 0;
    let l = arr1.length;
    for(let i = 0;  i < l ; i++){
       totalNumber1 += arr1[i] 
    }
    return totalNumber1;
}


body.append(h1a)
body.append(p1)
document.write("sum of array ",'[',(arr1),']' ," from method 2 is ", totalNum(arr1))
body.append(hr2)


p2.innerText = "Imagine We have array  of [9, 10, 11, 12]";

const arr2 = [9, 10, 11, 12];

h1b.innerText = "Method 3 : using while loop";

//using while loop
function total1(arr2){
    var i = 0; 
    var e = 0;
    while(i < arr2.length) {
        e = e + arr2[i]; 
        i++;
    }
    return e;
}


body.append(h1b)
body.append(p2)
document.write("sum of array ","[",(arr2),"]" ," from method 3 is ", total1(arr2))
body.append(hr3)

p3.innerText = "Imagine We have array  of [13, 14, 15, 16]";

const arr3 = [13, 14, 15, 16];

h1c.innerText = "Method 4 : using foreach loop";

//using foreach loop
function total2(arr3){
    if(!Array.isArray(arr3)) return;
    let sum = 0;
    arr3.forEach(each => {
        sum += each;
    });
    return sum;
}


body.append(h1c)
body.append(p3)
document.write("sum of array ","[",(arr3),"]" ," from method 4 is ", total2(arr3))
body.append(hr4)
