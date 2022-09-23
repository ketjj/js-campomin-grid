// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

const container = document.querySelector('.main_container');



document.getElementById('btn-output').addEventListener('click', function(){
  //VER.1
  container.innerHTML = ''
  //VER.2
  // while (container.firstChild) {
  //   container.removeChild(container.lastChild);
  // }
  
  let level = document.getElementById('selectlevel').value;
  let grid = 0;
  let currentClass = '';
  
  if(level === '100'){
    grid = 100;
    currentClass = 'box-veryhard'
  } else if(level === "81"){
    grid = 81;
    currentClass = 'box-hard'
  } else if(level === "49"){
    grid= 49;
    currentClass = 'box-easy'
  }

 
  
  for(let i = 1; i <= grid; i++){
    const boxEl = document.createElement("div");
    boxEl.append(i);
    boxEl.className = currentClass;
    boxEl.addEventListener('click', function(){
      boxEl.classList.toggle('box-clicked')
    })
    container.append(boxEl);
  };

  //container.textContent = '';
 

  })


  


