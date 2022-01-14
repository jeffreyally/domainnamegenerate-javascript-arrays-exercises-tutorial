let allNames = ["romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];
//changed Romario to lowercase and it worked as well
resultingNames = allNames.filter(element =>  element.toUpperCase().startsWith('R'))

console.log(resultingNames);