const box = document.querySelectorAll('.cell')
const cellElement = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const display = document.getElementById('display')
const winner = document.getElementById('winner')
const button = document.getElementById('button')
const button2 = document.getElementById('button2')
const cube =  document.querySelectorAll('li')
 
function reset() {
    const cube = document.querySelectorAll('li')
    display.classList.remove('show')
    for (let index = 0; index < cube.length; index++) {
        cube[index].remove()
        
    }
    
    // for (let index = 0; index < cellElement.length; index++) {
    //   cellElement[index].removeChild(cube);
        
    // }
    // document.location.reload()
//    cellElement[0].removeChild(cube)

   
    start()
    return
 }

 button2.addEventListener('click',function () {
    document.location.reload()
 })
console.log(cube)
const xClass = 'x'
const circleClass = 'circle'
let circleTurn
start()
button.addEventListener('click',reset)
function start() {
 

 cellElement.forEach(cell => {
     cell.addEventListener('click', handle, {once:true})
    
 })

//  cellElement[0].removeChild(cube)
display.classList.remove('show')
//  reset(cellElement)
}       
console.log(cellElement,'kop');

circleTurn = false
function handle(e) {
    
 const cell = e.target;

 const currentClass = circleTurn ? circleClass : xClass
//  if (checkWin(currentClass)) {
//     console.info('KKKKKKKKKKKKKKKKKKKKKKK')
//    display.classList.add('show')
//   if (currentClass === circleClass) {
//     winner.innerText ="O's"
//   }else if (currentClass === xClass) {
//     winner.innerText ="X's"
//   }
//  } else if (isDraw()) {
//    endGame(true)
//  }

 placeMark(cell, currentClass)
 swap()
 setHover()
 isDraw()
 checkGameStaus()

}
function endGame(draw) {
    if (draw) {
        winner.innerText ="none"   
        display.classList.add('show')
        console.log('yh');
    }
   
}

function  placeMark(cell, currentClass) {
 let cube = document.createElement("li")
 cell.appendChild(cube)
 cube.classList.add(currentClass)
 cube.setAttribute('value', currentClass)
  
 
 
  return cell

 
}

function swap() {
    circleTurn =!circleTurn
}
function setHover() {
    board.classList.remove('circle')
    board.classList.remove('x')
    if (circleTurn = circleTurn) {
        board.classList.add('circle')
    }
    else {
        board.classList.add('x') 
    }
}
let cub =  document.querySelectorAll('li')

function checkWin(first,second,third) {
       // const result  =  winCombo.some(combination => {
    //     return combination.every(index => {
    //         return cellElement[index].classList.contains(currentClass)     
    //     })
    // })
    let scoreCircle =  document.querySelector('.circleScore')
    let scoreX =  document.querySelector('.xScore')
    // // for (let i = 0; i < boxes.length; i++) {
    // //     // console.log(boxes[i],'mkmkmkmk');
    // // }
    // console.log(boxes.classList,'mkmkmkmk');
//    console.log(boxes[0].getAttribute('class')); 
     if (cellElement[first].innerHTML === '<li class="x" value="x"></li>' &&
     cellElement[second].innerHTML === '<li class="x" value="x"></li>' &&
     cellElement[third].innerHTML === '<li class="x" value="x"></li>') {
        display.classList.add('show');
        winner.innerText ="X's";

    //    for (let index = 0; index < 9; index++) {
        
          scoreX.innerText++;
    //    }
      
     
 } else if (cellElement[first].innerHTML === '<li class="circle" value="circle"></li>' &&
 cellElement[second].innerHTML === '<li class="circle" value="circle"></li>' &&
 cellElement[third].innerHTML === '<li class="circle" value="circle"></li>') {
        display.classList.add('show')
        winner.innerText ="O's";
        scoreCircle.innerText++;
      }
// console.log(result)
//     return result
}   

// function isDraw() {
//     return [...cellElement].every(cell => {
//         return cell.classList.contains(xClass) ||
//         cell.classList.contains(circleClass)     
//     })
//    console.log(y);
// }
function checkGameStaus() {
    checkWin(0, 1, 2);
    checkWin(3, 4, 5);

    checkWin(6, 7, 8);
     checkWin(0, 3, 6);
     checkWin(1, 4, 7);
     checkWin(2, 5, 8);
     checkWin(0, 4, 8);
     checkWin(2, 4, 6);
}
function isDraw() {
    let boxes =  document.querySelectorAll('li')
   
    if (boxes.length === 9) {
        console.log('isDraw')
        display.classList.add('show')
        winner.innerText ="No one";
    }
   
   

}


