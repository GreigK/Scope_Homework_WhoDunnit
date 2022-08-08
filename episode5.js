const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
  };
  
  const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
  }
  
  const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
  }
  
  changeWeapon('Revolver');
  const verdict = declareWeapon();
  console.log(verdict);


  // the scenario function can't be changed but it's attributes can be
  // I think changeWeapon won't work due to it attempting to create a newWeapon
  // changeWeapon will make it appear as Revolver, this is because it's only chaning the attribute