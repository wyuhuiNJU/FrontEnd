function Person(name, age) {
    this.name = name;
    this.age = age;
}

const me = new Person("wyuhui", 20);
console.log(me.__proto__ === Person.prototype); // true
console.log(Object.getPrototypeOf(me) === Person.prototype); // true
