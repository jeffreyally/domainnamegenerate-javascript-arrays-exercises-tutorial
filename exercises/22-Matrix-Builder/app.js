let matrixBuilder = (integer) => {

    thematrix = [];

    for(i=0;i<integer;i++){
        thematrix.push([])
        }
     
    for(i=0;i<integer;i++){   
        for(i2=0;i2<integer;i2++){
            thematrix[i].push(Math.round(Math.random()))
    }
}

    return thematrix
}



// do not change anything from this line down
console.log(matrixBuilder(5))