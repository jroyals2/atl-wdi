console.log('player file is loaded');

var player = {
  name: "Neo",
  feedTamagotchi: function(tamagotchi) {
    tamagotchi.foodInTummy++;
    console.log('YUM!!! ' + tamagotchi.name + ' has been fed and now has: ' + tamagotchi.foodInTummy + ' in the tummy');
  },
  medicateTamagotchi: function(tamagotchi) {
    tamagotchi.health++;
    console.log(tamagotchi.name + ' has been medicated and now has health: ' + tamagotchi.health);
  },
  knockOutTamagotchi: function(tamagotchi) {
    tamagotchi.restedness++;
    console.log(tamagotchi.name + ' got some Zzzzs! Restedness: ' + tamagotchi.restedness);
  }
}; //end player
player.feedTamagotchi(tamaBen);
player.knockOutTamagotchi(tamaBen);
player.medicateTamagotchi(tamaBen);
player.feedTamagotchi(tamaRyan);
player.knockOutTamagotchi(tamaRyan);
player.medicateTamagotchi(tamaRyan);

//document.getElementById('feed').onclick = player.feedTamagotchi(tamaBen);
// feedButton.addEventListener("click", player.feedTamagotchi(tamaBen))
// $(() =>{
// $('#feed').on("click", player.feedTamagotchi(tamaBen));

// })