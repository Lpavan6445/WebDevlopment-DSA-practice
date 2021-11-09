
var A = [1, 2, 4, 8,7, 9];
var B = [ 2, 3, 5, 7, 8, 10];
var C = [1, 2, 4, 7, 9];
var arr=[];
// intersection of A & B
for(var i = 0; i < A.length; i++){
    for(var j = 0; j <B.length; j++){
       if(A[i]===B[j]){
          arr.push(A[i]);
       }
    }
}
for(var i = 0; i < arr.length; i++){
    for(var j = 0; j <C.length; j++){
       if(arr[i]===C[j]){
          console.log(arr[i]);
       }
    }
}
