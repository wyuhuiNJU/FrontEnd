const arr = [2, 5, 7, 2];
const obj = {
    name: "obj",
};

arr.forEach(function (item, index, arr) {
    console.log(this); // window
}, obj); // ! forEach的第二个参数可指定this指向

arr.forEach((item) => {
    console.log(this); // window
}, obj); // ! 箭头函数无法改变this指向, 所以无效

arr.sort(function (a, b) {
    console.log(this); // window
});

arr.sort((a, b) => {
    console.log(this); // window
});

const obj1 = {
    obj1Fn: function () {
        const arr = [2, 5, 7, 2];
        console.log(this); // obj1
        arr.forEach(function () {
            console.log(this); // window
        });
        arr.forEach(
            function () {
                console.log(this); // obj1
            }.bind(this)
        );
        // ! 绑定 this 为当前 this 而不是window

        console.log(this); // obj1
        arr.sort(function () {
            console.log(this); // window
        });
    },
};

obj1.obj1Fn();

setTimeout(function () {
    console.log(this); // window
}, 10);

const btn = document.querySelector("button");
// btn = addEventListener("click", () => {
//     console.log(this); // window
// });

// btn = addEventListener(
//     "click",
//     function () {
//         console.log(this, "fn"); // window
//     }.bind(this)
// );

btn.onclick = function () {
    console.log(this);
};
//! onClick的this, 指向button ?
// btn.onclick = (() => {
//     console.log(this);
// }).bind(this);

// ! 子函数, 即回调函数, 一般由window执行
// ! 是接口规定的, 可在文档中找到
