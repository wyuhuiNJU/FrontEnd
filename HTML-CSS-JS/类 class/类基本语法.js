//! 声明式:
class Person {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

const me = new Person(20, "neo");
console.log(me.name); // neo
console.log(Person.name); // Person
// 类的 name 属性默认为其名称 (与实例的name不同)

//! 表达式
// className 是个代称, 只能在类内部使用, (也可以匿名)
const ConstClassName = class ClassName {
    constructor() {
        this.item = "hi";
        console.log(ConstClassName.name); //ClassName
        console.log(ClassName.name); // className
    }
};

console.log(ConstClassName.name); // ClassName
const demo = new ConstClassName(); // ClassName

/**
 * ! 类与构造函数的区别
 *  构造函数可以当做普通函数执行, class 只能new
 */

// ! 属性表达式
const methodName = "getItem";

class Person {
    constructor() {}

    // * 动态属性名
    [methodName]() {
        // ...
    }
}
