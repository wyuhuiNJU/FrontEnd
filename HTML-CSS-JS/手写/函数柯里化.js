function curry(fn) {
    const curried = (...args) => {
        if (args.length === fn.length) return fn(...args);
        return (...restArgs) => curried(...args, ...restArgs);
    };
    return curried;
}
// !如果参数不够, 返回接受保留已传参数、接受待传参数的函数
// 箭头函数是为了不用绑定this

function add(a, b, c, d) {
    return a + b + c + d;
}

const curriedAdd = curry(add);

const ans = curriedAdd(1, 2)(3)(4);

console.log(ans);
