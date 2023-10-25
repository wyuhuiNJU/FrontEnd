function Person(name) {
    this.name = name;
}

Person.prototype.say = function () {
    console.log("hi");
};

function Student(name, grade) {
    Person.call(this, name); // 继承属性
    this.grade = grade;
}

// Student.prototype = new Person(); // No! 多调用了一次Person
// Student.prototype = Person.prototype; // 可以
Student.prototype = Object.create(Person.prototype); // 最优  //!寄生
//! 没有直接指向Person的原型对象, 而是隔了一层.
//! 在这层可以定义Student类的公共属性/方法, 且不会出现在父类Person的原型对象上

Student.prototype.readBook = function () {
    console.log("之乎者也");
};

const me = new Student();
me.readBook();

const anyone = new Person();
anyone.readBook(); // 报错, 父类没收到子类公用属性的影响
