let btn = document.getElementById('btn');
let output = document.getElementById('output');

let clubName = [
  'Spicey', 'Twith', 'Slice', 'Taste', 'Germph', 'Slash', 'Trash', 'Gush',
];

let thingA = [
  'Adult babies', 'Furbies', 'Intimidation scenarios', 'Newsies fantasies', 'F-ed up leprechaun situations', 'DJ baby Bok Choi',
];

let thingB = [
  'Ripped midgets', 'Screaming babies with mozart wigs', 'Stilts', 'Throw-up music', 'Teddy graham people', 'Glass'
];

let thingC = [
  'Human fire hydrants', 'A rabbi that looks like Jaquin Phoenix', 'Carnival barkers', 'Puppets in disguise', '10 jacked homeless guys in old fashioned bathing suits', 'Sneezing',
];

function hotSpot(){
  var pick = `New York's hottest club is ${clubName[Math.floor(Math.random() * clubName.length)]}. It's got everything: ${thingA[Math.floor(Math.random() * thingA.length)]}, ${thingB[Math.floor(Math.random() * thingB.length)]}, and ${thingC[Math.floor(Math.random() * thingC.length)]}`;
  output.innerHTML = pick;
}

// hotSpot();
btn.addEventListener('click', hotSpot)