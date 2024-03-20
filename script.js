class Pokemon{
    constructor(name, sprite,hp,moves){
        this.name=name;
        this.sprite=sprite;
        this.hp=hp;
        this.fullhp=hp;
        this.moves=moves;
    }
}
let pkmList=[
    [`Charizard`,`https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif`, 360, 
    [`Flamethrower`,`fire`,95,0.95]
    [`Dragon Claw`,`dragon`,80,0.95]
    [`Air Slash`,`flying`,75,0.85]
    [`Slash`,`normal`,70,0.85]
    ],

    [`Blastoise`,`https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif`, 490, 
    [`Surf`,`water`,90,0.95]
    [`Crunch`,`normal`,80,0.95]
    [`Ice Punch`,`ice`,75,0.95]
    [`Flash Cannon`,`steel`,80,0.95]
    ],

    [`Venusaur`,`https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif`, 590, 
    [`Petal Blizzard`,`grass`,95,0.95]
    [`Sludge Bomb`,`poison`,90,0.95]
    [`Earthquake`,`ground`,100,0.95]
    [`Body Slam`,`normal`,85,0.95]
    ],
];
let typeMatch={
    'Charizard':[['ground'],['water','rock'],['fire','grass','steel']],
    'Blastoise':[['water'],['grass'],['fire','water']],
    'Venusaur':[['poison'],['fire','flying','ice','steel'],['grass','water']],
}

function spawn(bool){
    let p=pkmList[Math.floor(Math.random()*pkmList.length)];
    let pkm=new Pokemon(p[0],p[1],p[2],p[3]);

    if(bool){
        for(i=0;i<4;i++){
            document.getElementById(`m`+i).value=pkm.moves[i][0];
        }
        return pkm;
    }
}
let pk1=spawn(true);
s1=document.createElement('img');;
s1.src=pk1.sprite;
document.getElementById('pk1').appendChild(s1);
document.getElementById('hp1').innerHTML=`<p>HP: `+pk1.hp+` / `+pk1.fullhp+`</p>`;

let pk2=spawn(false);
s2=document.createElement('img');;
s2.src=pk2.sprite;
document.getElementById('pk2').appendChild(s2);
document.getElementById('hp2').innerHTML=`<p>HP: `+pk2.hp+` / `+pk2.fullhp+`</p>`;

for(i=0;i<4;i++){
    let btn=document.getElementById(`m`+i);
    let move=pk1.moves[i];
    function addHandler(btn,move,pk1,pk2){
        btn.addEventListener('click',function(e){
            attack(move,pk1,pk2,`hp2`,``);
            setTimeout(attack,2000,pk2.moves[Math.floor(Math.random()*3)],pk2,pk1,`hp1`,`Foe `);
        });
    }
    addHandler(btn,move,pk1,pk2);
}

function attack(){
    
}

function checkWinner(){
    
}