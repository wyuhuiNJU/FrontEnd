// ! 绑定优先级: new > 显示绑定 > 隐式绑定(默认绑定, 即谁调用就指向谁)

// ---------------------------------------------------------------------
function foo(a) {
    this.a = a;
    console.log(this);
}
var obj1 = {
    foo: foo,
};
var obj2 = {};

obj1.foo(2); // !隐式绑定, foo调用者为obj1, 所以foo里的 this 是obj1
console.log(obj1.a); // 2

obj1.foo.call(obj2, 3); // !call 改变了this指向, 绑定到了obj2
console.log(obj1.a); // 2 (没变)
console.log(obj2.a); // 3

var bar = new obj1.foo(4); // obj1.foo(4)绑定失效, 没让obj1.a变为4
// ! obj1.foo 是隐式绑定, new 的优先级比他它高
console.log(obj1.a); // undefined
console.log(bar.a); // 4

// ---------------------------------------------------------------------
// 显式绑定 与 new
function test1(a) {
    this.a = a;
}
const obj3 = {};
const test1Bind = test1.bind(obj3); // 生成绑定this后的新函数

test1Bind(2);
console.log(obj3.a); // 2 // !绑定到了obj3

const newTest1Bind = new test1Bind(3);
console.log(obj3.a); // 2  //! 还是2没变, test1Bind的this没有指向obj3
console.log(newTest1Bind.a); // 3 //! 3被绑定到了new的对象上了
// ! new 优先级高于显式绑定
