var size = 8;
var myArray = Array(size).fill( Array(size));
for(i=0;i<8;i++){
    let rand= Math.floor(Math.random() * 8) ;
    for(j=0;j<8;j++){
    let rand1= Math.floor(Math.random() * 8);
    
        myArray[rand][rand1]="Q";
        
    }}
    

console.log(myArray);