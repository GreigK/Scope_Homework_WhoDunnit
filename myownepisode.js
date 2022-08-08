const scenario = {
    murderer: 'Ally',
    room: 'Break out area',
    weapon: 'rubber duck'
  };
  
  const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
  }

  const changeRoom = function(newRoom) {
    scenario.room = newRoom
  }
  
  const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
  }
  
  changeWeapon('MacBook');
  const verdict = declareWeapon();
  console.log(verdict);
