var n=5;
for(var h=1; h<=n; h++){
    var line="";
    for(var w=1; w<=n; w++){
        if(w==1 || h===n){
          line+= "* ";
        }else{
            line+= "  ";
        }
    }
    console.log(line);
}