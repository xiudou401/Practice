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
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak(n) {
        for (let i = 0; i < n; i++) {
            console.log(`my name is ${this.name} and I am ${this.age}`);
        }
    }
}
const s1 = new Person('will', 18);
s1.speak(5);
export {};
//# sourceMappingURL=main.js.map