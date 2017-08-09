const app = "I don't do much."

function bumpCounter() {
    let counter = 0;
  function addBump() {
    counter++
  }
  function getBumps() {
    return counter;
  }

  return {
    addBump,
    getBumps

  };
}


function createAnimal(animalType) {
  return function createDevice(deadlyDevice){
  let obj = {}
    obj["animalType"] = animalType
    obj["deadlyDevice"] = deadlyDevice
  return obj
  }
}

var sharkCreator = createAnimal('Shark')
var sharkWithFrickinLaserbeam = createAnimal('Shark')('Laserbeam')
var sharkWithFrickinCannon = createAnimal('Shark')('Cannon')
