var arr = [  [1,2,3,4,5],
             [6,7,8,9,10],
             [11,12,13,14,15],
             [16,17,18,19,20],
           ] 
var N = arr.length;
var M = arr[0].length;
var top=0;
var bottom=N-1;
var left=0; 
var right=M-1;
var sum=""
var size=N * M;

while(size >0){
        for(var i=bottom; i>=top && size >0; i--){
            sum+=arr[i][left]+" ";
            size--
        }left++
        for(var j=left; j<=right && size >0; j++){
            sum+=arr[top][j]+" ";
            size--
        }top++
        for(var k=top; k<=bottom && size >0; k++){
            sum+=arr[k][right]+" ";
            size--
        }right--
        for(var l=right; l>=left && size >0; l--){
            sum+=arr[bottom][l]+" ";
            size--
        }
        bottom--
}
console.log(sum);