var height=5;
var width=10;
for(var h=1; h<=height; h++){
    var line="";
    for(var w=1; w<=width; w++){
        if(h==1 || h==height || w==1 ||w==width){
            line+= "* ";
        }else{
            line+= "  ";
        }
    }
    console.log(line);
}