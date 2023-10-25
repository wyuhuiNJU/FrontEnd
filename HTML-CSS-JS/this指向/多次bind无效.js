const obj1 = {
    name: "obj1",
};

const obj2 = {
    name: "obj2",
};

function fn() {
    console.log(this);
}

fn(); // window

const newFn = fn.bind(obj1);
newFn.bind(obj2)(); // ! 多次绑定bind无效, 只有第一次有效
//! 为什么?
