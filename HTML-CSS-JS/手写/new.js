function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function () {
    return this.firstName + this.lastName;
};

const me = new Person("neo", "wan");
console.log(me);
console.log(me.getFullName());

/**
 * new 完成是事情
 *  1. 创建新对象
 *  2. 继承父类原型上的方法
 */

function myNew(constructFn, ...args) {
    // obj 是构造函数, 其 prototype 是构造函数的原型对象
    // 基于 obj 的原型 创建一个新的对象
    // const newObj = Object.create(constructFn.prototype);
    const newObj = {};
    newObj.__proto__ = constructFn.prototype;
    // ! 构造函数的原型对象 是 实例对象的原型
    const result = constructFn.apply(newObj, args); // obj里所有对this的赋值, 都赋值给newObj的this
    // const resultType = Object.prototype.toString.call(result);

    if (typeof result === "object")
        //! 需要补充判断类型
        return result; // 如果返回值是对象, new 出来的是返回值
    else return newObj; // 如果不是对象, new出来的是新的实例对象
}

// ---------------------------普通函数---------------------------------------------
function simpleFn() {
    console.log("hi");
}
console.log(simpleFn);
console.log(simpleFn.prototype);
console.log(JSON.stringify(simpleFn.prototype));
console.log(JSON.stringify(simpleFn.prototype) === JSON.stringify({})); // true
//! 普通函数的原型对象是空对象 ( 多了个 constructor )
// 给函数的prototype定义方法, 或者在函数内给this赋属性值, 都会让其变为构造函数

/**
 * ! 任何函数都有个原型对象
 * ! new 这个构造函数时, 是让新对象继承了该原型对象
 * ! 并且把 构造函数中对this的赋值, 全转移给新对象
 * ! 最终实现的是, 构造函数中对this的赋值, 实例对象都有; 原型对象的属性方法, 也在实例对象的原型链上
 * ! 构造函数返回对象的情况除外
 */

//! TODO 测试 null
console.log(typeof null);

function NullType() {
    this.name = "NullType";
    return 11;
}

const a = new NullType();
console.log(a);

const b = myNew(NullType);
console.log(b);
