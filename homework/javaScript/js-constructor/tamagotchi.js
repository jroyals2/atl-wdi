console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor (name, creatureType) {
        this.name = name;
        this.creatureType = creatureType;
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
    }
    cry(){
        this.foodInTummy -= 1;
        console.log(this.foodInTummy)
        console.log(`${this.name} WAAAHHHHHH!!!!!!`)
    }
}

//create new Tamagotchis
const tamaRyan = new Tamagotchi('Ryan', 'Big beetle');
const tamaBen = new Tamagotchi('Ben', 'Small Thing') ;
tamaBen.cry();
tamaRyan.cry();


//test out your Tamagotchies below via console.logs
