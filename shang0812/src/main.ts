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

abstract class Parcel {
  constructor(public weight: number) {}
  abstract calculate(): number;
  printParcel() {
    console.log(
      `you parcel is ${this.weight} kg and it's ${this.calculate()} dollars`
    );
  }
}

class StandardParcel extends Parcel {
  constructor(weight: number, public unitPrice: number) {
    super(weight);
  }
  calculate(): number {
    return this.weight * this.unitPrice;
  }
}

const s1 = new StandardParcel(10, 2);
s1.printParcel();

class ExpressParcel extends Parcel {
  constructor(
    weight: number,
    public UnitPrice: number,
    public extraPrice: number
  ) {
    super(weight);
  }
  calculate(): number {
    if (this.weight > 10) {
      return (this.weight - 10) * this.extraPrice + 10 * this.UnitPrice;
    } else {
      return this.weight * this.UnitPrice;
    }
  }
}

const e1 = new ExpressParcel(12, 5, 2);
e1.printParcel();
