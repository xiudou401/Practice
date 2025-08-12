class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  play() {
    console.log(`${this.name} is ${this.age}`);
  }
}

const p1 = new Person('Will', 18);
p1.play();

class Student extends Person {
  sports: string;
  constructor(name: string, age: number, sports: string) {
    super(name, age);
    this.sports = sports;
  }
  override play() {
    console.log(`${this.name} is ${this.age} and loves ${this.sports}`);
  }
}

const s1 = new Student('eason', 5, 'soccer');
s1.play();
