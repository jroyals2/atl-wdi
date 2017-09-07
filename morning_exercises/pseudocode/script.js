//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
  totalLarge = total - (small * 60);
  costOfLarge = totalLarge / large;
  return costOfLarge;
};

//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
  const earth = 24901;
  totalGallons = earth/milesPerGallon;
  totalPrice = totalGallons * fuelPrice;
  return totalPrice;
};

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(a, b, c, d){
const totalFruitCostco= ((b / 100) * a);
const totalFruitKirk = (d / 100) * c;
const totalPure = totalFruitCostco + totalFruitKirk;
const totalGall = (a + c);
const everything = totalPure / totalGall;
return everything;
};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
