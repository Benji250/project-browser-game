//Code from Brandon
let runningBoy = 1;

function gameLoop() {
  runningBoy++;
  if (runningBoy > 8)runningBoy = 1;
  document.querySelectorAll('.runningBoy').forEach((e) => {
    e.setAttribute('hidden', '');
  }); 
 document.querySelector('.runningBoy'+runningBoy).removeAttribute('hidden');
 setTimeout(() => {
    gameLoop();
  }, 100) 

 
 }

 gameLoop();

let deadBoy = 1;

function jumpLoop() {
jumpBoy++;
if (jumpBoy > 12)jumpBoy = 1;
  document.querySelectorAll('.jumpBoy').forEach((e) => {
    e.setAttribute('hidden', '');
  }); 
 document.querySelector('.jumpBoy'+jumpBoy).removeAttribute('hidden');
 setTimeout(() => {
    jumpLoop();
  }, 100) 
}

// document.addEventListener('keydown', (event) => {
//     if (event.code === 'Spacebar') gameLoop();
//   });
//   let jumpingBoy = 1;

// function gameLoop() {
//   runningBoy++;
//   document.querySelector('.jumpingingBoy').addClass('hidden');
// document.querySelector('.jumpingBoy'+jumpingBoy).removeClass('hidden');

// requestAnimationFrame(gameLoop);
// }

// gameLoop();



// document.addEventListener('keydown', (event) => {
//     if (event.code === 'Spacebar') gameLoop();
//   });