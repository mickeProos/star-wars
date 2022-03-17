const request ='https://swapi.dev/api/people'

  class character1 { 
  constructor(name, height, mass) {
  this.name = name
  this.height = height
  this.mass = mass 

  if(name == "Beru Whitesun lars") {
    this.characterPicture1 = "./images/beru.jpg"
  }else if (name =="Biggs Darklighter") {
  this.characterPicture1 = "./images/biggs.jpg"
  }else if (name =="C-3PO") {
  this.characterPicture1 = "./images/c-3po.jpg"
  }else if (name =="Leia Organa") {
  this.characterPicture1 = "./images/leia.jpg"
  }else if (name =="Luke Skywalker") {
  this.characterPicture1 = "./images/luke.jpg"
  }else if (name =="Obi-Wan Kenobi") {
  this.characterPicture1 = "./images/obi-wan.jpg"
  }else if (name =="Owen Lars") {
  this.characterPicture1 = "./images/owen.jpg"
  }else if (name =="R2-D2") {
  this.characterPicture1 = "./images/r2-d2.jpg" 
  }else if (name =="R5-D4") {
  this.characterPicture1 = "./images/r5-d4.jpg"
  }else if (name =="Darth Vader") {
  this.characterPicture1 = "./images/vader.jpg"
} 
else {
  console.log("Wierd name, cant find image")
}
}  
}

class character2 { 
  constructor(name, height, mass) {
  this.name = name
  this.height = height
  this.mass = mass 

  if(name == "Beru Whitesun lars") {
    this.characterPicture2 = "./images/beru.jpg"
  }else if (name =="Biggs Darklighter") {
  this.characterPicture2 = "./images/biggs.jpg"
  }else if (name =="C-3PO") {
  this.characterPicture2 = "./images/c-3po.jpg"
  }else if (name =="Leia Organa") {
  this.characterPicture2= "./images/leia.jpg"
  }else if (name =="Luke Skywalker") {
  this.characterPicture2 = "./images/luke.jpg"
  }else if (name =="Obi-Wan Kenobi") {
  this.characterPicture2 = "./images/obi-wan.jpg"
  }else if (name =="Owen Lars") {
  this.characterPicture2 = "./images/owen.jpg"
  }else if (name =="R2-D2") {
  this.characterPicture2 = "./images/r2-d2.jpg" 
  }else if (name =="R5-D4") {
  this.characterPicture2 = "./images/r5-d4.jpg"
  }else if (name =="Darth Vader") {
  this.characterPicture2 = "./images/vader.jpg"
} 
else {
  console.log("Wierd name, cant find image")
}
}  
}
let fetchData = async (url) => {
  let response = await fetch(url)
  let json = await response.json()
  
  
  return json
}



let dataBtn1 = document.querySelector('.get-data-btn-1')
let dataBtn2 = document.querySelector('.get-data-btn-2')
let compareBtn = document.querySelector('.compare-btn')

let name1 = document.querySelector('#name1')
let name2 = document.querySelector('#name2')
let height = document.querySelector('#height1')
let height2 = document.querySelector('#height2')
let mass = document.querySelector('#mass1')
let mass2 = document.querySelector('#mass2')
let birthYear = document.querySelector('#birth-year1')
let birthYear2 = document.querySelector('#birth-year2')

let dropdown1 = document.querySelector(".dropdown-content1")
let dropdown2 = document.querySelector(".dropdown-content2")
let characterPicture1 = document.querySelector('.character-picture1')
let characterPicture2 = document.querySelector('.character-picture2')


function getInfo1() {

 Fetchpicture1()
    .then((characterInfo) => { 
    updateInfo1(characterInfo)
    }) 
  }

  function getInfo2() {

    Fetchpicture2()
    .then((characterInfo) => { 
    updateInfo2(characterInfo)
    }) 
    }

function updateInfo1(data) {
  name1.innerText = data.name
  
  
  height.innerText = `Height: ${data.height}`
  mass.innerText = `mass: ${data.mass}`
  birthYear.innerText = `birth-year: ${data.birth_year}`

 
}

function updateInfo2(data) {
 
  name2.innerText = data.name
  
 

  height2.innerText = `Height: ${data.height}`
  mass2.innerText = `mass: ${data.mass}`
  birthYear2.innerText = `birth-year: ${data.birth_year}`
}

dataBtn1.addEventListener('click', getInfo1)
dataBtn2.addEventListener('click', getInfo2)

async function Fetchpicture1 () {
let  id1 = dropdown1.value;
let charOneobj =  await fetchData(`${request}${id1}`)
console.log(id1)

let {name, height, mass } = charOneobj
let charOne = new character1(name, height, mass );
console.log(characterPicture1);
characterPicture1.innerHTML = `<img src="${charOne.characterPicture1}" alt="Character" height="400px"
width="400px"> `;
return charOne


}

Fetchpicture1()

async function Fetchpicture2 () {
  let  id2 = dropdown2.value;
  let charTwoObj =  await fetchData(`${request}${id2}`)
  console.log(id2)
  
  let {name, height, mass } = charTwoObj
  let charTwo = new character2(name, height, mass );
  console.log(characterPicture2);
  characterPicture2.innerHTML = `<img src="${charTwo.characterPicture2}" alt="Character" height="400px"
  width="400px"> `;
  
  return charTwo
  
  }
  
  Fetchpicture2()





// 3 fixa compare button



// function statsCheck() {

// Fetchpicture1()
//     .then((characterInfo1) => { 
//     return characterInfo1.height , characterInfo1.mass
//     }) 

// Fetchpicture2()
//     .then((characterInfo2) => { 
//     return characterInfo2.height , characterInfo2.mass
//     }) 

async  function statsChecker1() {
    let [characterInfo1, characterInfo2] = await Promise.all([Fetchpicture1(), Fetchpicture2()]);
    console.log(characterInfo1 , characterInfo2)
    
    //height
    if (characterInfo1.height > characterInfo2.height ) {
      console.log("winner is character 1 in height ")
      if (characterInfo1.mass > characterInfo2.mass) {
        console.log("winner is character 1 in mass")
      }
      if (characterInfo1.mass < characterInfo2.mass) {
        console.log("winner is character 2 in mass")
      } 
      else  {
          console.log("IT'S A TIE")
      } 
    } 
    
    else if (characterInfo2.height > characterInfo1.height ) {
      console.log("winner is character 2  in height ")
      if (characterInfo1.mass > characterInfo2.mass) {

        console.log(characterInfo1.mass)
        console.log("winner is character 1 in mass")
      }
      if (characterInfo1.mass < characterInfo2.mass) {
        console.log(characterInfo2.mass)
        console.log("winner is character 2 in mass")
      } 
      else  {
          console.log("IT'S A TIE")
      } 
    } 
    else{
        console.log("IT'S A TIE")
    } 

  }
  
 

 
compareBtn.addEventListener('click', statsChecker1)