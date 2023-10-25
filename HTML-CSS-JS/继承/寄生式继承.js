function Person(name) {
    this.name = name;
}

function Student(grade, school) {
    const student = Object.create(new Person());
    student.grade = grade;
    student.school = school;
    return student;
    // ! 利用的是当构造函数有return值时, new出的实例对象是return的对象
}

Person.prototype.sing = function () {
    console.log("singing");
};

const me = new Student("3", "nju");
