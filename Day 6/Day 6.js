// Check Whether a Number is a Prime or Not

//function to check for prime number
function checkPrime(){
    var n, i, flag = true;

    //Getting the value form the text field using DOM
    n = document.myform.n.value;
    n = parseInt(n);

    for(i = 2; i <= n - 1; i++){
        if(n % i == 0){
            flag = false;
            break;
        }
    }

    //check and display output
    if(flag == true){
        document.write(n + " is Prime");
    }else{
        document.write(n + " is  not Prime");
    }
}