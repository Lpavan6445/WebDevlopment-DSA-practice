function checkPalind(str){
    var left = 0;
    var right = str.length-1;
    while(left < right) {
       if(str[left] !== str[right]){
           return "Not a Polindrome";
       }
       left++;
       right--;
    }
    return "Polindrome";
}

var str = "sarytas"
console.log(checkPalind(str))