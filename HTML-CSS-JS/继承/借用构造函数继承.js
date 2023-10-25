//! 调用call

function Person(age) {
    this.eyes = 2;
    this.age = age;
}

function Student(grade, school) {
    this.grade = grade;
    this.school = school;
}

function Boy(age, grade, school, nickName) {
    Person.call(this, age);
    // 运行Person函数, 将其中对this的操作全部指向当前this,
    // 即Person中所有对this的属性赋值, 全部复制到当前的Boy上
    Student.call(this, grade, school);
    this.nickName = nickName;
}

const me = new Boy(10, 2, "NJU", "neo");
console.log(me);

/**
 * ! 优点
 *  可实现多继承
 *  创建子类时, 可以向父类传递参数
 *  不需要修复构造函数的constructor指向
 */

/**
 * !缺点
 *  无法继承父类的原型属性和方法, 无法链式继承
 *  实例不是父类的实例, 只是子类的实例 (instance Boy 不是Person)
 */
