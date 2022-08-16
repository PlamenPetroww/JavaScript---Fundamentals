function catFactory(catInfo) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    sayMeow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }
  let myCats = [];
  for(let el of catInfo) {
    let token = el.split(' ');
    let catName = token[0];
    let catAge = token[1];
    let myNewCat = new Cat(catName, catAge);
    myCats.push(myNewCat);
  }
  for(let myNewCat of myCats) {
    myNewCat.sayMeow()
  }
}

catFactory(['Mellow 2', 'Tom 5'])
