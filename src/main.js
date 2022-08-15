
import { charactersFilterHouses, filterHuman, filterNotHuman,sortZA, sortAZ} from './data.js';
import data from './data/harrypotter/harryPotter.js';

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

    document.getElementById(`potions-close${item.id}`).addEventListener("click", function() {
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


function showSpell (item) {
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
  
      document.getElementById(`characters-close${item.id}`).addEventListener("click", function() {
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
  

 function printCharacter(){ data.characters.map((item) => {
    document.getElementById("characters").appendChild(showCharacters(item))
  })}

  printCharacter()

// user story 2 houses

function filterCharacters(e) {
  // reconocer el e.target
  document.getElementById("characters").innerHTML = "";
  charactersFilterHouses(data.characters, e.target.id).forEach((item) =>{
    document.getElementById("characters").appendChild(showCharacters(item))
  });
} 

document.querySelectorAll("li").forEach((li)=>{
  li.addEventListener("click", (e) => { 
    filterCharacters(e) 
    document.getElementById("calculation").innerHTML ="Out of 144 students, " + parseInt((charactersFilterHouses(data.characters, e.target.id).length*100/144)) + "% are in " + e.target.id + " house."
  });
})

//Historia 2 species

 function showHuman(e){
  //Vaciando el grid de characters en el DOM
  document.getElementById("characters").innerHTML="";
  //Recorre la función el array resultante de la función filterHuman e inserta cada character en el grid vaciado anteriormente.
  filterHuman(data.characters, e.target.id).forEach ((item) => document.getElementById("characters").appendChild(showCharacters(item)))
}
//Ingresa el evento de escuchar el click y arrojar la función filter en showHuman
document.getElementById("Human").addEventListener("click", (e) => {
  showHuman(e)
  document.getElementById("calculation").innerHTML = "There are " + filterHuman(data.characters, e.target.id).length + " humans."
})

function showNotHuman(e){
  //Vaciando el grid de characters en el DOM
  document.getElementById("characters").innerHTML="";
  //Recorre la función el array resultante de la función filterHuman e inserta cada character en el grid vaciado anteriormente.
  filterNotHuman(data.characters, e.target.className).forEach ((item) => document.getElementById("characters").appendChild(showCharacters(item)))
}
document.querySelector(".Human").addEventListener("click", (e) => {
  showNotHuman(e)
  document.getElementById("calculation").innerHTML = "There are " + filterNotHuman(data.characters, e.target.className).length + " not humans."
})

document.getElementById("clean-filter").addEventListener("click", () => {
  document.getElementById("characters").innerHTML = ""
  document.getElementById("calculation").innerHTML = ""
  printCharacter()
});


console.log(sortZA(data.spells))
console.log(sortAZ(data.characters))
/*document.getElementById("sort-button-characters").addEventListener("click", () =>{
  sortAZ(data.characters).forEach((item) =>{
    document.getElementById("characters").appendChild(showCharacters(item))
  })});*/