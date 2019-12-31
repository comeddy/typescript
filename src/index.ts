
class Human {
   public name: string;
   public age: number;
   public gender: string;
   constructor(name: string, age: number, genger: string) {
    this.name = name;
    this.age = age;
    this.gender = genger;
   }
}

const lynn = new Human("Lynn", 18, "female");

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(lynn));

export {};