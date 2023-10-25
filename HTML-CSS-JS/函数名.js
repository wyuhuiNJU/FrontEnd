//! 函数具有 name 和 length 属性

function functionFn() {}
console.log(functionFn.name); //funcctionFn

console.log(function () {}.name); // 空字符串

// 匿名函数
const constAnonymous = function () {};
console.log(constAnonymous.name); // constAnonymous

const constNamedFunction = function namedFunction() {};
console.log(constNamedFunction.name); // namedFunction

// 构造函数, 没有区别
function ConstructFunction() {
    this.num = 1;
}
console.log(ConstructFunction.name); // ConstructFunction

const ConstConstructFunction = function () {
    this.num = 1;
};
console.log(ConstConstructFunction.name); // ConstConstructFunction

// 类
class DemoClass {
    constructor() {}
}
console.log(DemoClass.name); //DemoClass

const ConstAnonymousClass = class {
    constructor() {}
};
console.log(ConstAnonymousClass.name); //ConstAnonymousClass

const ConstNamedClass = class NamedClass {
    constructor() {}
};
console.log(ConstNamedClass.name); //NamedClass
