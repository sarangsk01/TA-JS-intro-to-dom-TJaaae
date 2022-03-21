console.log(got);
let parentElement = document.querySelector(".mainbox");
let allPeople = got.houses.reduce((acc,cv) =>{
    acc = acc.concat(cv.people);
    return acc;
},[]);

let cardsHTML = allPeople.map((person) =>{
 return `<li class="box">
         <div class="flex">
         <img
           src=${person.image} 
           alt=${person.name}
         />
          <h2>${person.name}</h2>
          </div>
          <p>${person.description}</p>
         <div class="btn width-100"><a href =${person.wikilink}>Learn More!</a></div>
        </li>`;
});

parentElement.innerHTML = cardsHTML.join("");
console.log(allPeople);
console.log(cardsHTML);