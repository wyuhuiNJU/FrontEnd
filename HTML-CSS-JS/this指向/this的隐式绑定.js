// 隐式绑定 / 隐式丢失
const obj1 = {
    fn: function () {
        console.log(this);
    },
};

obj1.fn(); // obj1
const fnInObj1 = obj1.fn;
fnInObj1(); // window
// ! function 的 this 是在调用的时候才产生
// obj1.fn() , 由obj调用, this指向obj
// const fnInObj1 = obj1.fn; 赋值而没调用, 运行 fnInObj1() 的时候, 调用者是 window
