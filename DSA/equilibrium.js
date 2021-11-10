// <!--Find Equilibrium Element -->
function checkEquil(n,arr){
  var sum=0;
    for(var i=0; i<n; i++){
        sum+=arr[i]
    }
  var right=0;
    for(var i=0; i<n; i++){
        sum-=arr[i]
        if(right == sum){
            return i+1
        }else{
            right+=arr[i]
        }
    }
    return -1;
}

var arr = [3,3,5,5,1]
var n = arr.length;
console.log(checkEquil(n,arr))