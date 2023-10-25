function Father(name) {
    this.name = name;
    this.say = function () {
        console.log("hello");
    };
}

Father.prototype.sing = function () {
    console.log("lalala~");
};

/**
 * 原型链继承
 */

function Son() {}
Son.prototype = new Father();
// ! 子类的原型是父类的实例对象
// 父类中的this属性被继承, 父类的原型也被子类链式继承
console.log(Son);

// 此时 Son 实例的 constructor,也就是Son.prototype.constructor, 是Father实例的constructor
// 应当手动指回 Son
Son.prototype.constructor = Son;

/**
 * ! 优点
 *  子类的实例也是父类的实例
 *  父类新增的属性方法, 子类都能访问
 */
const theSon = new Son();
console.log(theSon instanceof Son); // true
console.log(theSon instanceof Father); // true
// instance 链式查找

/**
 * ! 缺点
 *  无法实现多继承
 *  创建子类时, 无法向父类传递参数
 */
