import { charactersFilterHouses, filterHuman, filterNotHuman, sortZA, sortAZ, calculus, totalStudents, searchName } from './data.js';
import data from './data/harrypotter/harryPotter.js';

document.getElementById("characters-first-view").addEventListener("click", () =>{
  document.getElementById("first-view").style.display = "none";
  if(document.getElementById("characters").style.display == "none"){
       document.getElementById("characters").style.display="block";
    } else {
      document.getElementById("characters").style.display="none";
    }
  // document.getElementById("characters").style.display= "flex";
})

//buttonCharacters.addEventListener("click", appearCharacters)

function showPotions(item) {
  const container = document.createElement('div')

  let htmln = ` <div id="potions-container${item.id}" class="potions-container">
  <div class="potions-content">
  <span class= "potions-close" id="potions-close${item.id}">&times;</span>
  <h4 class="potions-name">Name: ${item.name}</h4>
  <p class="potions-description">Description: ${item.description}</p><br>
  </div>
  </div>
  <button id="btn-potions${item.id}" class="btn-potions">${item.name}</button>
  `;

  container.innerHTML = htmln
  container.querySelector(`#btn-potions${item.id}`).addEventListener('click', (e) => {
    e.preventDefault()

    let modal = document.getElementById(`potions-container${item.id}`);
    modal.style.display = "block";

    document.getElementById(`potions-close${item.id}`).addEventListener("click", function () {
      modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  });

  return container
}

data.potions.map((item) => {
  document.getElementById("potions").appendChild(showPotions(item))
});


function showSpell(item) {
  const container = document.createElement('div')
  let htmlModal = ` 
        <div id="spell-modal${item.id}" class="spell-modal">
            <div class="spell-content">
                <span class= "spell-close" id="spell-close${item.id}">&times;</span>
                <h4 class="spell-name">Name: ${item.name}</h4>
                <p class="spell-type">Spell Type: ${item.spell_type}</p>
                <p class="spell-description">Description: ${item.description}</p><br>
            </div>
        </div>
    <button id="btn-spell${item.id}" class="btn-spell-name">${item.name}</button>
    `;
  container.innerHTML = htmlModal

  container.querySelector(`#btn-spell${item.id}`).addEventListener('click', (e) => {
    e.preventDefault()
    let modal = document.getElementById(`spell-modal${item.id}`);
    modal.style.display = "block";

    document.querySelector(`#spell-close${item.id}`).addEventListener("click", function () {
      modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  })
  return container
}

data.spells.map((item) => {
  document.getElementById("spells").appendChild(showSpell(item))
});

function showBook(item) {
  const container = document.createElement('div')
  let htmlModal = ` 
        <div id="book-modal${item.id}" class="book-modal">
            <div class="book-content">
                <span class= "book-close" id="book-close${item.id}">&times;</span>
                <h4 class="book-name">Name: ${item.title}</h4>
                <p class="book-release-day">Release Day: ${item.releaseDay}</p>
                <p class="book-description">Description: ${item.description}</p><br>
            </div>
        </div>
    <button id="btn-book${item.id}" class="btn-book-name">${item.title}</button>
    `;
  container.innerHTML = htmlModal

  container.querySelector(`#btn-book${item.id}`).addEventListener('click', (e) => {
    e.preventDefault()
    let modal = document.getElementById(`book-modal${item.id}`);
    modal.style.display = "block";

    document.querySelector(`#book-close${item.id}`).addEventListener("click", function () {
      modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });

  });
  return container
}

data.books.map((item) => {
  document.getElementById("books").appendChild(showBook(item))
});

function showCharacters(item) {
  const container = document.createElement('div');

  container.innerHTML = ` <div id="characters-container${item.id}" class="characters-container">
    <div class="characters-content">
    <span class= "characters-close" id="characters-close${item.id}">&times;</span>
    <h4 class="characters-name">Name: ${item.name}</h4>
    <p class="characters-description">Birth: ${item.birth}</p>
    <p class="characters-description">Death: ${item.death}</p>
    <p class="characters-description">Species: ${item.species}</p>
    <p class="characters-description">Ancestry: ${item.ancestry}</p>
    <p class="characters-description">House: ${item.house}</p>
    <p class="characters-description">Books featured in: ${item.books_featured_in}</p>
    </div>
    </div>
    <button id="btn-characters${item.id}" class="btn-characters"><strong>Name:</strong> ${item.name}</button>
    `;

  container.querySelector(`#btn-characters${item.id}`).addEventListener('click', (e) => {
    e.preventDefault()

    let modal = document.getElementById(`characters-container${item.id}`);
    modal.style.display = "block";

    document.getElementById(`characters-close${item.id}`).addEventListener("click", function () {
      modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  });

  return container
}


function printCharacter() {
  data.characters.map((item) => {
    document.getElementById("characters").appendChild(showCharacters(item))
  })
}

printCharacter()

// user story 2 houses

function filterCharacters(e) {
  // reconocer el e.target
  document.getElementById("characters").innerHTML = "";
  charactersFilterHouses(data.characters, e.target.id).forEach((item) => {
    document.getElementById("characters").appendChild(showCharacters(item))
  });
}

document.querySelectorAll("li").forEach((li) => {
  li.addEventListener("click", (e) => {
    filterCharacters(e)
    document.getElementById("calculation").innerHTML = "Out of " + totalStudents(data.characters) + " students, " + calculus(data.characters, e.target.id) + "% are in " + e.target.id + " house.";
    //user story 5: filter/sort
    document.getElementById("reverse-button-characters").addEventListener("click", () => {
      sortZA(filterCharacters(e))
    });
    document.getElementById("sort-button-characters").addEventListener("click", () => {
      sortAZ(filterCharacters(e))
    });
  });
})


//Historia 2 species

function showHuman(e) {
  //Vaciando el grid de characters en el DOM
  document.getElementById("characters").innerHTML = "";
  //Recorre la función el array resultante de la función filterHuman e inserta cada character en el grid vaciado anteriormente.
  filterHuman(data.characters, e.target.id).forEach((item) => document.getElementById("characters").appendChild(showCharacters(item)))
}
//Ingresa el evento de escuchar el click y arrojar la función filter en showHuman
document.getElementById("Human").addEventListener("click", (e) => {
  showHuman(e)
  document.getElementById("calculation").innerHTML = "There are " + filterHuman(data.characters, e.target.id).length + " humans."
  //user story 5: filter/sort
  document.getElementById("reverse-button-characters").addEventListener("click", () => {
    sortZA(showHuman(e))
  });
  document.getElementById("sort-button-characters").addEventListener("click", () => {
    sortAZ(showHuman(e))
  });
})

function showNotHuman(e) {
  //Vaciando el grid de characters en el DOM
  document.getElementById("characters").innerHTML = "";
  //Recorre la función el array resultante de la función filterHuman e inserta cada character en el grid vaciado anteriormente.
  filterNotHuman(data.characters, e.target.className).forEach((item) => document.getElementById("characters").appendChild(showCharacters(item)))
}
document.querySelector(".Human").addEventListener("click", (e) => {
  showNotHuman(e)
  document.getElementById("calculation").innerHTML = "There are " + filterNotHuman(data.characters, e.target.className).length + " not humans."
  //user story 5: filter/sort
  document.getElementById("reverse-button-characters").addEventListener("click", () => {
    sortZA(showNotHuman(e))
  });
  document.getElementById("sort-button-characters").addEventListener("click", () => {
    sortAZ(showNotHuman(e))
  });
})

document.getElementById("clean-filter").addEventListener("click", () => {
  document.getElementById("characters").innerHTML = ""
  document.getElementById("calculation").innerHTML = ""
  printCharacter()
});

//Sort from A to Z and Z to A for characters

document.getElementById("sort-button-characters").addEventListener("click", () => {
  document.getElementById("characters").innerHTML = ""
  document.getElementById("calculation").innerHTML = ""
  sortAZ(data.characters).forEach((item) => {
    document.getElementById("characters").appendChild(showCharacters(item))
  })
});

document.getElementById("reverse-button-characters").addEventListener("click", () => {
  document.getElementById("characters").innerHTML = ""
  document.getElementById("calculation").innerHTML = ""
  sortZA(data.characters).forEach((item) => {
    document.getElementById("characters").appendChild(showCharacters(item))
  })
});

//Sort from A to Z and Z to A for spells
document.getElementById("sort-button-spells").addEventListener("click", () => {
  document.getElementById("spells").innerHTML = "";
  sortAZ(data.spells).forEach((item) => {
    document.getElementById("spells").appendChild(showSpell(item))
  });
})

document.getElementById("reverse-button-spells").addEventListener("click", () => {
  document.getElementById("spells").innerHTML = "";
  sortZA(data.spells).forEach((item) => {
    document.getElementById("spells").appendChild(showSpell(item))
  });
})


document.getElementById("sort-button-potions").addEventListener("click", () => {
  document.getElementById("potions").innerHTML = "";
  sortAZ(data.potions).forEach((item) => {
    document.getElementById("potions").appendChild(showPotions(item))
  });
})

document.getElementById("reverse-button-potions").addEventListener("click", () => {
  document.getElementById("potions").innerHTML = "";
  sortZA(data.potions).forEach((item) => {
    document.getElementById("potions").appendChild(showPotions(item))
  });
})

//search bar for  potions section

let searchPotions = document.getElementById("search-potions")
let potionsForm = document.getElementById("search-potions-form")

function searchPotionsResult() {
  document.getElementById("potions").innerHTML = "";
  searchName(data.potions, searchPotions.value).forEach((item) => {
    document.getElementById("potions").appendChild(showPotions(item))
  });
}
potionsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchPotionsResult();
})

/*
potionsForm.addEventListener("keyup", (e) =>{
  e.preventDefault();
  searchPotionsResult();
})*/
// search bar of characters section

let searchCharacters = document.getElementById("search-characters")
let charactersForm = document.getElementById("search-characters-form")

function searchCharactersResult() {
  document.getElementById("characters").innerHTML = "";
  searchName(data.characters, searchCharacters.value).forEach((item) => {
    document.getElementById("characters").appendChild(showCharacters(item))
  });
}
charactersForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchCharactersResult();
})
// search bar of spells section
let searchSpells = document.getElementById("search-spells")
let spellsForm = document.getElementById("search-spells-form")

function searchSpellsResult() {
  document.getElementById("spells").innerHTML = "";
  searchName(data.spells, searchSpells.value).forEach((item) => {
    document.getElementById("spells").appendChild(showSpell(item))
  });
}
spellsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchSpellsResult();
})

//random fun fact on load

let funFacts= data.funFacts.splice(3,(data.funFacts).length);
let randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
document.getElementById("fun-facts").innerHTML = "Fun fact: " + randomFact.content


//const buttonCharacters= document.getElementById("characters-first-view");
// /* const buttonSpells= document.getElementById("spells-first-view").value;
// const buttonPotions=document.getElementById("potions-first-view").value; */
// const firstDisappear=document.getElementById("first-view");
// const characterAppear= document.getElementById("characters");


// function appearCharacters(){
//   if(characterAppear.style.display === "none"){
//     firstDisappear.style.display="none";
//     characterAppear.style.display="block";
//   }  else{
//     characterAppear.style.display="none"
//   }
// }


// /*calling variables for  */

// const buttonCharacters= document.getElementById("characters-first-view");
// /* const buttonSpells= document.getElementById("spells-first-view").value;
// const buttonPotions=document.getElementById("potions-first-view").value; */
// const firstDisappear=document.getElementById("first-view");
// const characterAppear= document.getElementById("characters");


// function appearCharacters(){
//   if(characterAppear.style.display === "none"){
//     firstDisappear.style.display="none";
//     characterAppear.style.display="block";
//   }  else{
//     characterAppear.style.display="none"
//   }
// }
// buttonCharacters.addEventListener("click", appearCharacters)


// //buttonCharacters.addEventListener("click", appearCharacters)