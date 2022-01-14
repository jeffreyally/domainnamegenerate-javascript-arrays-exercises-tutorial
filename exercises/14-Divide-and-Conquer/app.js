let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

let mergeTwoList = (arrayofnumbers) =>{

    odd = [];
    even = [];
    arrayofnumbers.forEach((element) => {

        if(element%2==0){
            even.push(element)

        }
        else{
            odd.push(element)
        }

    

    });
    for(i=0;i<even.length;i++){
        odd.push(even[i])
    }
    return odd

}


console.log(mergeTwoList(list_of_numbers))
