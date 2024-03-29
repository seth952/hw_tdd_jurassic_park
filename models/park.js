const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collection = [];

}

Park.prototype.addDino = function(dinosaur){
  this.collection.push(dinosaur);
}

Park.prototype.deleteDino = function(dinosaur){
  this.collection.pop(dinosaur);
}

Park.prototype.dinoMostVis = function(){
  let visited = this.collection[0];

  for (dinosaur of this.collection){
    if(dinosaur.guestsAttractedPerDay > visited.guestsAttractedPerDay){
    visited = dinosaur;
    }
  }
  return visited;
}


module.exports = Park;
