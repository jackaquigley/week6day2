const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
}

Park.prototype.numberOfDinosaurs = function () {
  return this.dinosaurs.length;
}

Park.protoype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
}

module.exports = Park;
