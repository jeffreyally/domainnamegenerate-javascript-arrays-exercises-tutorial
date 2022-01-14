let lyricsGenerator = (array) => {
    emptyarr = []

    array.forEach((item) => {
        if (item == 0) {
            emptyarr.push('Boom ')
        }
        else {
            emptyarr.push('Drop the base ')
        }



    });


    if (emptyarr.toString().includes('Drop the base ,Drop the base ,Drop the base')) {

        return emptyarr.toString().replace('Drop the base ,Drop the base ,Drop the base', 'Drop the base ,Drop the base ,Drop the base !!!Break the base!!!').replaceAll(',', '')

    }
    else {
        return emptyarr.toString().replaceAll(',', '')
    }


}

// Don't change anything bellow this line
console.log(lyricsGenerator([0, 0, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 1, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 0]))
console.log(lyricsGenerator([1, 0, 1]))
console.log(lyricsGenerator([1, 1, 1]))




