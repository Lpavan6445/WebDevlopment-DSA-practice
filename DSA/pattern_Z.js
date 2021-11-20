var N= 8;
for(var h=1; h<=N; h++){
    var line="";
    if(h==1 || h==N){
       for(var i=1; i<=N; i++){
            line+= "* ";
       }
    }else if(h>1 && h<N){
       for(var i=h; i<=N; i++){
          if(i>1 && i<N){
              line+= "  ";
          }else{
              line+= "* ";
            }
       }
    } else{ 
        line+= "  ";
    }
    console.log(line);
}