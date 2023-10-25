// 使用
function fn() {
    console.log(this);
    console.log(arguments);
}

fn.call(1, 2, 3, 4); // ! 第一个位置, 1, 会被包装为对象 Number(1)
fn.apply(1, [2, 3, 4]); // ! 同样被包装为 Number(1)

fn.call(null, 2, 3, 4);
fn.call(undefined, 2, 3, 4); // ! null 和 undefined 无法被包装为对象, 因此采用默认的 window 为 this 指向
