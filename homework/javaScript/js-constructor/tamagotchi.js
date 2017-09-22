console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor (name) {
        this.name = name;
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
    }
    cry(){
        this.foodInTummy -= 1;
        console.log(this.foodInTummy)
        console.log("WAAAHHHHHH!!!!!!")
    }
}

//create new Tamagotchis
const tamaRyan = new Tamagotchi('Ryan');
const tamaBen = new Tamagotchi('Ben');
tamaBen.cry();
tamaBen.cry();


//test out your Tamagotchies below via console.logs
