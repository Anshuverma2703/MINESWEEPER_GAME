console.log("welcome");
const body = document.getElementsByTagName("body")[0];
const bombs = [];
let score = 0;

let gameOver = false;

const VisitedNode = [];

const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", function () {
  window.location.reload();
});

function IncreamnetScore() {
  score++;
  const scoreElement = document.getElementById("score");
  scoreElement.innerHTML = score;
  if(score == 71){
    const end  = document.getElementById("resultDisplay");
    end.innerHTML = "<h1>win</h1>"
    
  }
}
function createEnding() {
  const end  = document.getElementById("resultDisplay");
  end.innerHTML= "<h1>game over</h1>";
  
}

function ShowAllBomb() {
  const allBombs = document.getElementsByClassName("bomb");
  for (let bomb of allBombs) {
    setTimeout(time,1000);
    function time () {
      bomb.style.backgroundImage = "url('https://img.icons8.com/emoji/48/000000/bomb-emoji.png')";
      bomb.style.background = "red"
      bomb.style.backgroundImage = "url('https://img.icons8.com/emoji/48/000000/bomb-emoji.png')";

    }
  }
  createEnding();
}


function CreateGrid() {
  //9*9 grid is making
  for (let i = 0; i < 9; i++) {
    const row = document.createElement("div");
    row.className="grid";
    row.style.display = "flex";
    for (let j = 0; j < 9; j++) {
      const column = document.createElement("div");
      column.className ="grid";
      column.style.width = "50px";
      column.style.height = "50px";
      column.style.background = "gray";
      column.style.border = "1px solid black";

      const currentIndex = i * 9 + j;

      if (bombs.includes(currentIndex)) {
        column.className = "bomb";
      }

      column.addEventListener("click", () => {
        // if cuureent index is bombs array then background red otherwise background green
        if (!gameOver) {
          if (bombs.includes(currentIndex)) {
            column.style.backgroundImage = "url('https://img.icons8.com/emoji/48/000000/bomb-emoji.png')";
            gameOver = true;
            ShowAllBomb();
          } else {
            column.style.background = "green";
            if (!VisitedNode.includes(currentIndex)) {
              IncreamnetScore();
              VisitedNode.push(currentIndex);
            }
          }
        }
      });

      row.appendChild(column);
    }
    body.appendChild(row);
  }
}

function GenerateRandomNumber() {
  //it give you a number random number
  let randomNumber = Math.random();

  // maths.random gives a random number between 0 to 1
  //   console.log("random Number is", randomNumber);

  randomNumber = randomNumber.toFixed(2);
  randomNumber = randomNumber * 100;
  randomNumber = randomNumber % 81;
  randomNumber = Math.floor(randomNumber);

  // randomNumber  = parsInt(randomNumber);

  return randomNumber;
  
}

function PlacingBomb() {
  while (bombs.length !== 15) {
    const randomNumber = GenerateRandomNumber();
    //check if Bomb array has this number
    // includes check if the element is present in the array
    if (!bombs.includes(randomNumber)) {
      bombs.push(randomNumber);
    }
  }
}

PlacingBomb();
CreateGrid();
// console.log(bombs);
