var n=6 ;
for(var h=1; h<=n; h++){
    var line="";
    for(var w=1;w<=n; w++){
        if(h==1 || h==n/2 || w==1||w==n){
            line+= "* ";
        }else{line+= "  ";}
    }console.log(line);
}