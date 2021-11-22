function mulArr(row,col) {
var narr=[];
  for(var i=0; i<row; i++){
    var arr=[];
     for(var j=0; j<col; j++){
       if(i==0 || i==row-1 || i==j || j==((col-1)-i) || j==0 ||j==(row-1) ){
          arr.push(j+1);
       }else{
          arr.push(" ")
       }
      }
      console.log(arr.join(" "));
  }
} 
mulArr(10,10);