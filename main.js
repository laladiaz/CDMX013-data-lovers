//import { example } from './data.js';

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
                <p class="book-release-day">Spell Type: ${item.releaseDay}</p>
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
    const container = document.createElement('div')
  
    let htmln = ` <div id="characters-container${item.id}" class="characters-container">
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
    <button id="btn-characters${item.id}" class="btn-characters">${item.name}</button>
    `;
  
    container.innerHTML = htmln
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
  
  data.characters.map((item) => {
    document.getElementById("characters").appendChild(showCharacters(item))
  });
  
  