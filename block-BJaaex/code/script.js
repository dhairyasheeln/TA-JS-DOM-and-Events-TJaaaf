// Card data
const cardsArray = [
    {
      name: 'shell',
      img: 'media/blueshell.png',
    },
    {
      name: 'star',
      img: 'media/star.png',
    },
    {
      name: 'bobomb',
      img: 'media/bobomb.png',
    },
    {
      name: 'mario',
      img: 'media/mario.png',
    },
    {
      name: 'luigi',
      img: 'media/luigi.png',
    },
    {
      name: 'peach',
      img: 'media/peach.png',
    },
    {
      name: '1up',
      img: 'media/1up.png',
    },
    {
      name: 'mushroom',
      img: 'media/mushroom.png',
    },
    {
      name: 'thwomp',
      img: 'media/thwomp.png',
    },
    {
      name: 'bulletbill',
      img: 'media/bulletbill.png',
    },
    {
      name: 'coin',
      img: 'media/coin.png',
    },
    {
      name: 'goomba',
      img: 'media/goomba.png',
    },
  ]


let gameGrid=cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());



  const game=document.getElementById('game');
  
  const grid=document.createElement('section');
  grid.classList.add('grid');

  game.append(grid);


  gameGrid.forEach((item) => {
    // Create card element with the name dataset
    const card = document.createElement('div')
    card.classList.add('card')
    card.dataset.name = item.name
  
    // Create front of card
    const front = document.createElement('div')
    front.classList.add('front')
  
    // Create back of card, which contains
    const back = document.createElement('div')
    back.classList.add('back')
    back.style.backgroundImage = `url(${item.img})`
  
    // Append card to grid, and front and back to each card
    grid.appendChild(card)
    card.appendChild(front)
    card.appendChild(back)
  })


  let firstGuess = ''
  let secondGuess = ''
  let count = 0
  let previousTarget = null;
  let delay=1200;

  grid.addEventListener('click',handleClick);
  function handleClick(event)
  {
      let clicked=event.target;
      
      if(clicked.nodeName === 'SECTION' ||
      clicked === previousTarget ||
      clicked.parentNode.classList.contains('selected'))
      {
          return 
      }
      if(count<2)
      {
          count++;
          if(count===1)
          {
            firstGuess=clicked.parentNode.dataset.name;
            console.log(firstGuess);
            clicked.parentNode.classList.add('selected');
          }
          else{
            secondGuess = clicked.parentNode.dataset.name;
            console.group(secondGuess);
            clicked.parentNode.classList.add('selected')
          }
          if (firstGuess !== '' && secondGuess !== '') {
            // and the first guess matches the second match...
            if (firstGuess === secondGuess) {
              // run the match function
                setTimeout(match, delay)
                setTimeout(resetGuesses, delay)
              
            }
            else{
                setTimeout(resetGuesses, delay)
            }
          }
          previousTarget = clicked;
          
      }
      
  }

  const match = () => {
    var selected = document.querySelectorAll('.selected')
    selected.forEach((card) => {
      card.classList.add('match')
    })
  }


  const resetGuesses = () => {
    firstGuess = ''
    secondGuess = ''
    count = 0
  
    var selected = document.querySelectorAll('.selected')
    selected.forEach((card) => {
      card.classList.remove('selected')
    })
  }

  
