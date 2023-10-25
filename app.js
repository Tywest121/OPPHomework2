let dog = {
    name: "Scooby-Doo",
    numLegs: 4,
    tails: 1,
    sayName: function(){
        return "The name of this Dog is " + this.name + ".";
    }
  };
  console.log(dog.name);
  dog.sayName();

  function Dog() {
    this.name = "Scooby-Doo";
    this.color = "brown";
    this.numLegs = 4;
  }
  let brownDog = new Dog();

  function Dog(name,color){
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }

  let Hound = {
    name: "Steve",
    color: "Red",
    numLegs: 4
  };

  let RedDog = new Dog("Steve", "Red");

  Hound instanceof Dog;

  let ownProps = [];

for (let property in dog) {
  if(dog.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);

function Dog(name){
    this.name=name;
}
Dog.prototype.numLegs=4;
let Pug=new Dog("Cliford");