const dead = document.getElementById(“dead”);
const lost = document.getElementById(“lost”);

let counterKilledMoles = 0;
let counterMisses = 0;


function getHole( index ) {
  return document.getElementById(hole${index});
}

for (let i = 0; i < 10; i++) {
  debugger;
  let hole = getHole(i);
  console.log(hole);
}

