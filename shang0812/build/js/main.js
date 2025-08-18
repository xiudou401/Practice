// class Person {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   play() {
//     console.log(`${this.name} is ${this.age}`);
//   }
// }
// const p1 = new Person('Will', 18);
// p1.play();
// class Student extends Person {
//   sports: string;
//   constructor(name: string, age: number, sports: string) {
//     super(name, age);
//     this.sports = sports;
//   }
//   override play() {
//     console.log(`${this.name} is ${this.age} and loves ${this.sports}`);
//   }
// }
// const s1 = new Student('eason', 5, 'soccer');
// s1.play();
// class Person {
//   constructor(protected name: string, protected age: number) {}
//   protected getDetails() {
//     console.log(`${this.name} is ${this.age} `);
//   }
//   introduce() {
//     this.getDetails();
//   }
// }
// const p1 = new Person('Eason', 5);
// p1.introduce();
// class Student extends Person {
//   play() {
//     console.log(`${this.name} loves football`);
//   }
// }
// const s1 = new Student('Eason', 5);
// abstract class Package {
//   constructor(public weight: number) {}
//   abstract calculate(): number;
//   printPackage() {
//     console.log(
//       `the parcel is ${this.weight} and it costs ${this.calculate()}  dollars`
//     );
//   }
// }
// class StandardPackage extends Package {
//   constructor(weight: number, public unitPrice: number) {
//     super(weight);
//   }
//   calculate(): number {
//     return this.weight * this.unitPrice;
//   }
// }
// const s1 = new StandardPackage(10, 5);
// s1.printPackage();
// abstract class Parcel {
//   constructor(public weight: number) {}
//   abstract calculate(): number;
//   printParcel() {
//     console.log(
//       `you parcel is ${this.weight} kg and it's ${this.calculate()} dollars`
//     );
//   }
// }
// class StandardParcel extends Parcel {
//   constructor(weight: number, public unitPrice: number) {
//     super(weight);
//   }
//   calculate(): number {
//     return this.weight * this.unitPrice;
//   }
// }
// const s1 = new StandardParcel(10, 2);
// s1.printParcel();
// class ExpressParcel extends Parcel {
//   constructor(
//     weight: number,
//     public UnitPrice: number,
//     public extraPrice: number
//   ) {
//     super(weight);
//   }
//   calculate(): number {
//     if (this.weight > 10) {
//       return (this.weight - 10) * this.extraPrice + 10 * this.UnitPrice;
//     } else {
//       return this.weight * this.UnitPrice;
//     }
//   }
// }
// const e1 = new ExpressParcel(12, 5, 2);
// e1.printParcel();
// interface PersonInterface {
//   name: string;
//   age: number;
//   speak(n: number): void;
// }
// class Person implements PersonInterface {
//   constructor(public name: string, public age: number) {}
//   speak(n: number): void {
//     for (let i = 0; i < n; i++) {
//       console.log(`my name is ${this.name} and I am ${this.age}`);
//     }
//   }
// }
// const s1 = new Person('will', 18);
// s1.speak(5);
// let person: {
//   name: string;
//   age: number;
//   [key: string]: any;
// };
// person = { name: 'eason', age: 5, gender: 'male' };
// console.log(person);
// let person: {
//   name: string;
//   age: number;
//   [key: string]: any;
// };
// person = { name: 'xiaomi', age: 12, gender: 'male' };
// console.log(person);
// let person: { name: string; age: number; [key: string]: any };
// person = { name: 'xiao', age: 13, gender: 'male' };
// console.log(person);
// let person: {
//   name: string;
//   age: number;
//   [key: string]: any;
// };
// person = { name: 'eason', age: 18, gender: 'male' };
// console.log(person);
// type Area = {
//   height: number;
//   width: number;
// };
// type Address = {
//   num: number;
//   cell: number;
//   room: string;
// };
// type House = Area & Address;
// const h1: House = {
//   height: 100,
//   width: 200,
//   num: 2,
//   cell: 2,
//   room: '203',
// };
// console.log(h1);
// function demo(): void {
//   return undefined;
// }
// // demo();
// console.log(demo());
class Person {
    name;
    age;
    id;
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    getPrivateInfo() {
        return `your id is ${this.id}`;
    }
    getInfo() {
        return `name is ${this.name}, age is ${this.age}`;
    }
    getFullInfo() {
        return this.getInfo() + ', ' + this.getPrivateInfo();
    }
}
const p1 = new Person('will', 2, 'fasdfasd12321');
console.log(p1.getFullInfo());
export {};
//# sourceMappingURL=main.js.map