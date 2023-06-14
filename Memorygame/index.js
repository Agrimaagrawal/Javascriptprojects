document.addEventListener('DOMContentLoaded',()=>{
const cardArray=[
    {
    name:'fries',
    img:'images/fries.png',
      },
      {
        name:'cheeseburger',
        img:'images/cheeseburger.png',
      },
      {
        name:'ice-cream',
        img:'images/ice-cream.png',
      },
      {
        name:'milkshake',
        img:'images/milkshake.png',
      },
      {
        name:'pizza',
        img:'images/pizza.png',
      },
      {
        name:'hotdog',
        img:'images/hotdog.png',
      },
      {
        name:'fries',
        img:'images/fries.png',
          },
          {
            name:'cheeseburger',
            img:'images/cheeseburger.png',
          },
          {
            name:'ice-cream',
            img:'images/ice-cream.png',
          },
          {
            name:'milkshake',
            img:'images/milkshake.png',
          },
          {
            name:'pizza',
            img:'images/pizza.png',
          },
          {
            name:'hotdog',
            img:'images/hotdog.png',
          },


]
cardArray.sort(()=>0.5-Math.random())
const gridDisplay=document.querySelector('#grid')
let  cardChosen=[]
let cardchossenid=[]
let cardwon=[]
let result=document.getElementById('result')
 function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        const card=document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)
        console.log(card ,i)

    }
 }
 
 function chechMatch(){
    let cards=document.querySelectorAll('img')
    if(cardchossenid[0]==cardchossenid[1]){
        cards[cardchossenid[0]].setAttribute('src','images/blank.png')
        cards[cardchossenid[1]].setAttribute('src','images/blank.png')
        alert("same card")
    }

   else if(cardChosen[0]==cardChosen[1]){
        alert('you found a match')
        cards[cardchossenid[0]].setAttribute('src','images/white.png')
        cards[cardchossenid[1]].setAttribute('src','images/white.png')
        cards[cardchossenid[0]].removeEventListener('click',flipCard)
        cards[cardchossenid[1]].removeEventListener('click',flipCard)
        cardwon.push(cardChosen)
    }
    else{
        cards[cardchossenid[0]].setAttribute('src','images/blank.png')
        cards[cardchossenid[1]].setAttribute('src','images/blank.png')
        
    }
    cardChosen = []
    cardchossenid = []
    if (cardwon.length==cardArray.length/2){
        result.innerHTML='Congratulations You found them all'

    }
   

 }
 function flipCard(){
      let cardId=this.getAttribute('data-id')
      cardChosen.push(cardArray[cardId].name)
      this.setAttribute('src',cardArray[cardId].img)
      cardchossenid.push(cardId)
      console.log(cardChosen)
      if(cardChosen.length===2){
        setTimeout(chechMatch(),500);
      }
 }
 createBoard()
})
 
