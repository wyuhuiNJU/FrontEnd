// 验证对象的大括号不是作用域
const outerObj = {
    outerFn: function () {
        const innerObj = {
            innerFn: function () {
                console.log(this); // innerObj
            },
            innerArrowFn: () => {
                console.log(this); // outerObj
            },
        };
        return innerObj;
    },
    outerArrowFn: () => {
        const innerArrowObj = {
            innerArrowFn: () => {
                console.log(this); // widnow
            },
        };
        return innerArrowObj;
    },
};

const innerObj = outerObj.outerFn();
innerObj.innerFn(); // innerObj
innerObj.innerArrowFn(); // outerObj
// ! innerArrowFn定义处作用域, 不是innerObj的大括号, 而是outerFn的大括号
const innerArrowObj = outerObj.outerArrowFn();
innerArrowObj.innerArrowFn();
// ! 两层箭头函数, this一路向上搜作用域, 到了最外层的window
