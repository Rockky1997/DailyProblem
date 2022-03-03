function positive_negative(x,y){
    if((x>0 && y<0) || (x<0 && y>0)){
       return true;
    }else{
        return false;
    }
}

document.write("integer ","(2,-2)" ," : ",positive_negative(2,-2),"<br/>")
document.write("integer ","(-2,2)" ," : ",positive_negative(-2,2),"<br/>")
document.write("integer ","(2,2)" ," : ",positive_negative(2,2),"<br/>")
document.write("integer ","(-2,-2)" ," : ",positive_negative(-2,-2),"<br/>")