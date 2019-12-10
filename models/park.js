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

Park.prototype.dinoMostVis = function(dinosaur){
  this.collection.map(dinosaur);

}


module.exports = Park;
