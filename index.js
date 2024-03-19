let trainer = {
    name: `Kaatori`,
    age: 19,
    pokemonList: [],

    addPokemon: function(pokemon) {
        this.pokemonList.push(pokemon);
        console.log(`${pokemon.name} added to ${this.name}'s team!`);
    }
};

function Pokemon(name, level, health, attack) {
    this.name = name;
    this.level = level;
    this.health = health;
    this.attack = attack;
}

Pokemon.prototype.attackOpponent = function(opponent) {
    console.log(`${this.name} tackles ${opponent.name}!`);
    opponent.health -= this.attack; 
    console.log(`${opponent.name}'s health reduced to ${opponent.health}`);
};

let snorlax = new Pokemon(`Snorlax`, 10, 500, 75);
let charmander = new Pokemon(`Charmander`, 5, 100, 50);
let squirtle = new Pokemon(`Squirtle`, 5, 100, 50);

setTimeout(() => console.log(`A wild ${charmander.name} and ${squirtle.name} appeared!`), 500);
setTimeout(() => console.log(charmander), 1000);
setTimeout(() => console.log(squirtle), 1250);
setTimeout(() => console.log(`\n${trainer.name} sent out ${snorlax.name}`), 1500);
setTimeout(() => console.log(snorlax), 2000);
setTimeout(() => console.log(`\nBattle!\n`), 2250);
setTimeout(() => charmander.attackOpponent(snorlax), 2500);
setTimeout(() => squirtle.attackOpponent(snorlax), 3000);
setTimeout(() => snorlax.attackOpponent(charmander), 4000);
setTimeout(() => snorlax.attackOpponent(squirtle), 5000);
setTimeout(() => console.log(`\n${trainer.name} attempted to catch ${charmander.name} and ${squirtle.name}...`), 6000);
setTimeout(() => console.log(`Success!\n`), 6500);

setTimeout(() => {
    trainer.addPokemon(snorlax);
    trainer.addPokemon(charmander);
    trainer.addPokemon(squirtle);    
},7000)
setTimeout(() => {
    console.log(`\nTrainer Information:`);
    console.log(`Trainer Name: ${trainer['name']}`);
    console.log(`Trainer Age: ${trainer['age']}`);
    console.log(`Pokemon Owned: ${trainer['pokemonList'].length}`);
}, 7500);
