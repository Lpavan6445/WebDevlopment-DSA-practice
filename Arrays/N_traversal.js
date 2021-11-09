var n=[
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4]
]

var N=n.length;

for(var i=N-1; i>0; i--){
    console.log(n[i][0]);
}
for(var i=0; i<N; i++){
    console.log(n[i][i]);
}
for(var i=N-2; i>=0; i--){
    console.log(n[i][N-1]);
}
