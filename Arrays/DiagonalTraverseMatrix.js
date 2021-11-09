var mat=[
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11,12,13,14,15],
        [16,17,18,19,20],
        [21,22,23,24,25]
       ]
       
var n=mat.length;
var m=mat[0].length;
var arr=[];
for(var i=0; i<n; i++){
    var x=i; 
    var y=0;
    var str="";
    while(x>=0){
      str+=mat[x][y]+" ";
       x=x-1;
       y=y+1;
    }
    arr.push(str);
}
for(var i=1; i<m; i++){
    var x=m-1;
    var y=i;
    var str="";
    while(y<m){
        str+=mat[x][y]+" ";
        x=x-1;
        y=y+1;
    }
    arr.push(str);

}
console.log(arr);





// var mat=[
//             [1,2,3,4],
//             [1,2,3,4],
//             [1,2,3,4],
//             [1,2,3,4]
//        ]
// var arr=[];
// for(var i=0; i<mat.length; i++){
//     if(i%2 === 0){
//            var x=i; 
//             var y=0;
//             while(x>=0 && y<mat.length){
//                 arr.push(mat[x][y]);
//                 x=x-1;
//                 y=y+1;
                
//             }
//     }else{
//         var x=i; 
//         var y=0;
//         while(x>=0 && y<mat.length){
//             arr.push(mat[x][y]);
//             x=x-1;
//             y=y+1;
        
//         }
//     }
// } console.log(arr.join(" "));


