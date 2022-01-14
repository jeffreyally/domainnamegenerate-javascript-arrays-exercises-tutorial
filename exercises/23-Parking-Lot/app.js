let parking_state = [
  [1,0,1,1,0,1],
  [2,0,1,1,0,1],
  [1,0,2,1,0,1],
  [1,0,1,1,0,1],
  [1,0,1,1,0,2],
  [1,0,1,1,0,1],

]

const state = {
  totalSlots: 0,
  availableSlots: 0,
  occupiedSlots: 0,
  notaparkingspace: 0,
}

for(i=0;i<parking_state.length;i++){
  
  
  for(i2=0;i2<parking_state[i].length;i2++){
    state['totalSlots'] = state['totalSlots'] + 1
    
    if(parking_state[i][i2] == 0) {
      state['notaparkingspace'] = state['notaparkingspace'] + 1
      
    }

    if(parking_state[i][i2] == 1){
      
      
      state['occupiedSlots'] = state['occupiedSlots'] + 1
    }
    if(parking_state[i][i2] == 2){
      
     
      state['availableSlots'] = state['availableSlots'] + 1
    }
   
  }

}


console.log(state)