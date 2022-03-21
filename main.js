function PolarBear(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "Polar Bear";
  this.image = "images/polar_bear.jpg";
}

function Terrier(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "Jack Russell Terrier";
  this.image = "images/terrier.jpg";
}

function Chicken(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "Hen";
  this.image = "images/hen.jpg";
}

var polarBear = new PolarBear('Frosty', 2);
var terrier = new Terrier('Fido', 12);
var chicken = new Chicken('Fern', 6);

const animals = [polarBear, terrier, chicken];

const animalNames = [polarBear.name, terrier.name, chicken.name];

function generateRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
  let idx = generateRandomIndex(3);
  return animalNames[idx];
}

function generateRandomAge() {
  let idx = generateRandomIndex(3);
  return animals[idx].age;
}

function generateRandomAnimal() {
  let idx = generateRandomIndex(3);
  return animals[idx];
}

function onLoad() {
  let animal = generateRandomAnimal();
  document.getElementById("animal").src = animal.image;
  document.getElementById("animal").alt = animal.image_alt;
  document.getElementById("name").innerHTML = animal.name;
  document.getElementById("age").innerHTML = animal.age;
}