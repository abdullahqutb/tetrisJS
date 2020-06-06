document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  let squares = Array.from(document.querySelectorAll('.grid div'));
  const scoreDisplay = document.querySelector('#score');
  const startButton = document.querySelector('#startButton');
  const width = 10;

  console.log(squares);
  // showAlert('he');
});

function showAlert (name) {
  // Alert message
  alert('You have been alerted by the GODS!!! ' + name);
}
