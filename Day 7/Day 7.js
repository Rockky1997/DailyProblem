var arr = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
    //comparing array index 
    if (largest < arr[i] ) {
        largest = arr[i];
    }
}

document.write(largest, " is the largest array in the array of ", "[",arr,"]");