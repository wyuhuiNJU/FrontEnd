class Person {
    constructor(name) {
        this.name = name;
    }
}

class Student extends Person {
    constructor(name, grade) {
        super(name); // 继承了属性
        this.grade = grade;
    }
}

const me = new Student("neo", 3);
console.log(me);

Person.prototype.say = function () {
    console.log("hi");
};

me.say(); // 父类添加属性, 子类跟随

console.log(Student.prototype === Person);
console.log(new Student());
console.log(Object.getPrototypeOf(Student) === Person);

// Student 是 Person创建的类?

// console.log(Object.getPrototypeOf(Student));

function Father(name) {
    this.name = name;
}

function Son(name, age) {
    this.age = age;
    Father.call(this, name);
}

// // // Son.prototype = Object.create(Father.prototype);
Son.prototype = Object.create(Father.prototype);
Son.prototype.constructor = Son;
console.log(new Son(10, "neo"));

// console.log(Object.getPrototypeOf(Son) === Father);
