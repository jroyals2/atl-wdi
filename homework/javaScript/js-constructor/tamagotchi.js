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
        console.log(`${this.name} WAAAHHHHHH!!!!!!`)
        console.log(this.foodInTummy)
    }
    puke(){
        this.foodInTummy -= 1;
        console.log("WAAAAA WAAAA");
        console.log(`${this.name} has this much food in their tummy ${this.foodInTummy}`);
    }
    yawn(){
        this.restedness -= 1;
        console.log(`${this.name} has current restedness of ${this.restedness}`)
    }
}

//create new Tamagotchis
const tamaRyan = new Tamagotchi('Ryan', 'Big beetle');
const tamaBen = new Tamagotchi('Ben', 'Small Thing') ;
tamaBen.cry();
tamaRyan.cry();
tamaBen.puke();
tamaRyan.yawn();


//test out your Tamagotchies below via console.logs
