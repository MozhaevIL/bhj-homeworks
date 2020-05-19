const hitsNumber = document.getElementById("dead");
const missesNumber = document.getElementById("lost");

let hits, misses;

function resetGame() {
    hits = 0;
    hitsNumber.textContent = hits;
    misses = 0;
    missesNumber.textContent = misses
}

resetGame();

function getHole(index) {
   return document.getElementById(`hole${index}`);
}


for (let i=1; i < 10; i++) {
    getHole(i).onclick = function holeCheck() {
        if (this.className.includes('hole_has-mole')) {
            hits += 1;
            hitsNumber.textContent = hits;
        } else {
            misses += 1;
            missesNumber.textContent = misses;
        }

        if (misses === 5) {
            alert ("5 промахов.\nПоражение!");
            resetGame();
        } else if (hits === 10) {
            alert ("10 попаданий.\nПобеда!");
            resetGame();
        }

      };
  }