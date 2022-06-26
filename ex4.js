let group=[ 1, 2, 3, 4, 4 ];
for(i=0;i<group.length;i++){
    let initele = i ;
    for(j=i;j<group.length;j++){
        if(group[j] ===initele){
            console.log(group[initele]+"is the duplicate element")
        }
    }
}
