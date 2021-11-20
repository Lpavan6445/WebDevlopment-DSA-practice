var n=6;
for(var h=1; h<=n; h++){
    var line="";
    for(var w=1; w<=n-1; w++){
        if(w==n-h ||w==h ){
            line+= "*";
        }else{
            line+= " ";
        }
    }
    console.log(line);
}