//Footer Year Function
document.querySelector('#currYear').textContent = new Date().getFullYear();

let card1 = document.querySelector('.LCTcard1')
let card2 = document.querySelector('.LCTcard2')
let cards = [card1, card2]
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

// This is a function that acts as a slide show for the boards that appear on the home screen
  function alternateCards(input) {
      
      index = cards.indexOf(input)
      
        cards[index].style.display = 'block'
        cards[index].style.animation ="appear 3s"
        // change the delay here
        sleep(8000).then(() => {  
            cards[index].style.animation ="disappear 2s";
            sleep(2000).then(() => {  
                // don't touch anything here
                    cards[index].style.display ="none";        
                    index==cards.length-1?alternateCards(cards[0]):alternateCards(cards[index+1])
                })})

    }
    

alternateCards(card1)