function Person(name) {
    this.name = name;
}

function Student(grade, school) {
    this.grade = grade;
    this.school = school;
}

function Boy(name, grade, school, nickName) {
    Person.call(this, name); // 继承属性
    Student.call(this, grade, school); // 属性多继承
    this.nickName = nickName;
}

Boy.prototype = Person.prototype; // 继承方法
Boy.prototype.constructor = Boy; // 指回
