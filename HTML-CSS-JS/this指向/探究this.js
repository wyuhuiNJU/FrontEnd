// function demo() {
//     console.log(this === window);
// }
// this.demo(); // true
// window.demo(); // true
// // ! 全局函数的调用者是window [ 函数的独立调用 ]
// const demoConst = function () {
//     console.log(this === window);
// };
// demoConst(); // true
// // window.demoConst(); // 报错 // ! 取消注释
// // ! const/let 声明的函数, 没被挂载在window上
// var demoVar = function () {
//     console.log(this === window);
// };
// demoVar(); // true
// this.demoVar(); // true
// // ! var 匿名函数被挂载在了window上

const obj = {
    name: "obj",
    fn: function () {
        console.log(this); // obj
        function innerFn() {
            console.log(this);
        }
        innerFn(); // window
        innerFn.call(this); // obj
    },

    arrowFn: () => {
        console.log(this); // window
    },
    closureFn: function () {
        console.log(this);
        return function closureReturnFn() {
            console.log(this); // window  | 仍然是独立调用函数
        };
    },
};

obj.fn();
// ! 谁执行, this指向谁. innerFn是独立调用函数, this指向window

obj.arrowFn();
// ! 箭头函数this = 定义位置的作用域的this
// ! 对象的大括号不是作用域, 所以 this 是再外层, 就是全局

obj.closureFn()();
// ! 闭包返回的函数, 不是任何对象的属性, 所以仍然是独立调用函数, this指向window

// 函数作为参数 赋值
function outerFn(fn) {
    console.log(this, "outer"); // window, 因为是独立调用
    fn();
}

const obj1 = {
    fnInObj: function () {
        console.log(this);
    },
};

obj1.fnInObj(); // obj1

outerFn(obj1.fnInObj); // window // ! 独立调用
//TODO 找this, 关注的是执行时候
