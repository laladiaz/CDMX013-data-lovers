export const charactersFilterHouses = function (arrData, house) {
  return arrData.filter ((element) => element.house === house);
}

export const filterHuman= (arrHuman,species)=>{
  return arrHuman.filter((item) => item.species === species)
}
export const filterNotHuman= (arrHuman,species)=>{
  return arrHuman.filter((item) => item.species !== species)
}

export const sortAZ= (arrData)=> arrData.sort((a, b) => {
 //   if(arrData == []) throw(TypeError("Empty array"))
    if(a.name< b.name){ 
      return -1
    } if (a.name> b.name){
      return 1
    }
      return 0
  });

  export const sortZA= (arrData)=> arrData.sort((a, b) => {
 //   if(arrData == []) throw(TypeError("Empty array"))
    if(a.name< b.name){ 
      return 1
    } if (a.name> b.name){
      return -1
    } 
      return 0
  });

  export const totalStudents = (arrData)=>{
    let total = (charactersFilterHouses(arrData, "Hufflepuff").length) + (charactersFilterHouses(arrData, "Ravenclaw").length)+ (charactersFilterHouses(arrData, "Slytherin").length)+ (charactersFilterHouses(arrData, "Gryffindor").length);
    return total;
  }

  export const calculus = (arrData, input)=>{
    totalStudents (arrData)
    let percentage = parseInt((charactersFilterHouses(arrData, input).length*100/totalStudents(arrData)));
    return percentage;

  }

  export const searchName = (arrData, input) => {
    return arrData.filter ((item) => (item.name.toLowerCase()).slice(0,(input.toLowerCase()).length) === input.toLowerCase())
    ;
  }