// 定义Person类
function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log("Hello, my name is " + this.name);
};

// 定义Student类
function Student(grade) {
    this.grade = grade;
}

Student.prototype.study = function () {
    console.log("Studying...");
};

// 定义Boy类，继承Person和Student的属性和方法
function Boy(name, grade) {
    Person.call(this, name); // 调用Person类的构造函数，继承name属性
    Student.call(this, grade); // 调用Student类的构造函数，继承grade属性
}

// 继承Person类的方法
Boy.prototype = Object.create(Person.prototype);
Boy.prototype.constructor = Boy;

// 继承Student类的方法
Object.assign(Boy.prototype, Student.prototype);
// ! 浅拷贝, Student的方法修改时, Boy的方法不会跟着变化

var boy = new Boy("John", 10);
boy.sayHello(); // 输出: Hello, my name is John
boy.study(); // 输出: Studying...

Person.prototype.sing = function () {
    console.log("lalala~");
};

boy.sing(); // 原型链的继承是深拷贝, Person方法修改, Boy的方法跟着改

Student.prototype.readBook = function () {
    console.log("之乎者也");
};

boy.readBook(); // 报错, 因为找不到readBook方法
