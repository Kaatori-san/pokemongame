class Pokemon {
  constructor(name, sprite, hp, moves) {
      this.name = name;
      this.sprite = sprite;
      this.hp = hp;
      this.fullhp = hp;
      this.moves = moves;
  }
}

const pkmList = [
  ['Charizard', 'https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif', 360,
      [
          ['Flamethrower', 'fire', 95, 0.95],
          ['Dragon Claw', 'dragon', 80, 0.95],
          ['Air Slash', 'fly', 75, 0.85],
          ['Tackle', 'normal', 70, 0.95],
      ]
  ],
  ['Blastoise', 'https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif', 362,
      [
          ['Surf', 'water', 90, 0.95],
          ['Crunch', 'normal', 80, 0.95],
          ['Ice Punch', 'ice', 75, 0.95],
          ['Flash Cannon', 'steel', 80, 0.95],
      ]
  ],
  ['Venusaur', 'https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif', 364,
      [
          ['Petal Blizzard', 'grass', 90, 0.95],
          ['Sludge Bomb', 'poison', 90, 0.95],
          ['Earthquake', 'ground', 100, 0.95],
          ['Body Slam', 'normal', 85, 0.95],
      ]
  ],
];

const typeMatch = {
  'Charizard': [['ground'], ['water', 'rock'], ['fire', 'grass', 'steel']],
  'Blastoise': [[''], ['grass'], ['fire', 'water']],
  'Venusaur': [['poison'], ['fire', 'fly', 'ice', 'steel'], ['grass', 'water']],
};

function spawn(bool) {
  const p = pkmList[Math.floor(Math.random() * pkmList.length)];
  const pkm = new Pokemon(p[0], p[1], p[2], p[3]);

  if (bool) {
      for (let i = 0; i < 4; i++) {
          document.getElementById('m' + i).value = pkm.moves[i][0];
      }
  }
  return pkm;
}

const pk1 = spawn(true);
const s1 = document.createElement('img');
s1.src = pk1.sprite;
s1.classList.add('pokemon-image');
document.getElementById('pk1').appendChild(s1);
document.getElementById('hp1').innerHTML = '<p>HP: ' + pk1.hp + ' / ' + pk1.fullhp + '</p>';

const pk2 = spawn(false);
const s2 = document.createElement('img');
s2.src = pk2.sprite;
s2.classList.add('pokemon-image');
document.getElementById('pk2').appendChild(s2);
document.getElementById('hp2').innerHTML = '<p>HP: ' + pk2.hp + ' / ' + pk2.fullhp + '</p>';

for (let i = 0; i < 4; i++) {
  const btn = document.getElementById('m' + i);
  const move = pk1.moves[i];
  addHandler(btn, move, pk1, pk2);
}

function addHandler(btn, move, pk1, pk2) {
  btn.addEventListener('click', function (e) {
      attack(move, pk1, pk2, 'hp2', '');
      setTimeout(() => {
          attack(pk2.moves[Math.floor(Math.random() * 3)], pk2, pk1, 'hp1', 'Foe ');
      }, 2000);
  });
}

function attack(move, attacker, receiver, hp, owner) {
  document.getElementById('comment').innerHTML = '<p>' + owner + attacker.name + ' used ' + move[0] + '!</p>';
  const effectiveness = calculateEffectiveness(move[1], receiver.name);
  const power = calculatePower(move[2], effectiveness);
  
  if (Math.random() < move[3]) {
      receiver.hp -= Math.floor(power);
      document.getElementById(hp).innerHTML = '<p>HP: ' + receiver.hp + ' / ' + receiver.fullhp + '</p>';
  } else {
      setTimeout(() => {
          document.getElementById('comment').innerHTML = '<p>It had no effect!</p>';
      }, 1000);
  }
  checkWinner(hp);
}

function calculateEffectiveness(moveType, receiverName) {
  const receiverTypes = typeMatch[receiverName];
  let effectiveness = 1;
  
  for (let i = 0; i < receiverTypes.length; i++) {
      if (receiverTypes[i].includes(moveType)) {
          switch (i) {
              case 0:
                  effectiveness = 0;
                  break;
              case 1:
                  effectiveness = 2;
                  break;
              case 2:
                  effectiveness = 0.5;
                  break;
          }
          break;
      }
  }
  return effectiveness;
}

function calculatePower(basePower, effectiveness) {
  return basePower * effectiveness + Math.floor(Math.random() * 10);
}

function checkWinner(hp) {
  const f = (pk1.hp <= 0) ? pk1 : (pk2.hp <= 0) ? pk2 : false;
  if (f !== false) {
      document.getElementById(hp).innerHTML = '<p>HP: 0/' + f.fullhp + '</p>';
      alert('GAME OVER: ' + f.name + ' fainted!');
      setTimeout(() => {
          location.reload();
      }, 1500);
  }
}