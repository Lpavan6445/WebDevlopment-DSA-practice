var N=12;
for(var h=1; h<=N; h++){
    var line="";
  for(var w=1; w<=N; w++){
    if(w==1 || w== N){
        line+= "*";
    }else if(h== N/2 && w%2==1){
        line+= "*";
    }else{
        line +=" ";
    }
  }   
  console.log(line);
}
