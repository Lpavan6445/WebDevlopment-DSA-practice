var n=[
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4]
]
var nl=n.length;
var arr=[];
    for(var i=0; i<nl-1; i++){
        console.log(n[i][nl-1]);
    }
    for(var i=nl-1; i>=0; i--){
        console.log(n[i][i]);
    }
    for(var i=1; i<nl; i++){
        console.log(n[i][0]);
    }

