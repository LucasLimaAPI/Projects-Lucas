let varA='A';//B
let varB='B';//C
let VarC='C';//A

const varAtemp=varA

varA=varB;
 varB=VarC;
 VarC=varAtemp;

 
 //[varA,varB,VarC]=[varB,VarC,varA]
 
 console.log(varA,varB,VarC);