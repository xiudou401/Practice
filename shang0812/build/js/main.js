class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    play() {
        console.log(`${this.name} is ${this.age}`);
    }
}
const p1 = new Person('will', 18);
console.log(p1);
p1.play();
class Student extends Person {
    sports;
    constructor(name, age, sports) {
        super(name, age);
        this.sports = sports;
    }
    play() {
        console.log(`${this.name} is ${this.age} and loves ${this.sports}`);
    }
}
const s1 = new Student('eason', 5, 'soccer');
s1.play();
export {};
//# sourceMappingURL=main.js.map