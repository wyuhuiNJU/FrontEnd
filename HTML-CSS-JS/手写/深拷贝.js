// ! JSON.parse(JSON.stringify()), 破坏原型链结构, 无法使用静态方法

const { map } = require("lodash");

// JSON 也不支持 undefined, Date, RegExp, 函数
class Person {
    constructor(uname, age) {
        this.uname = uname;
        this.age = age;
    }
}

Person.prototype.sing = function () {
    console.log("lalala~~");
};

const me = new Person("neo", 20);
me.sing();
console.log(me instanceof Person); // true

const clonedMe = JSON.parse(JSON.stringify(me));

console.log(clonedMe);
try {
    clonedMe.sing(); // 报错
} catch {
    console.log("错误");
}

// -------------------------------------------------------------------------------------

// ! 递归深拷贝 ( 普通 )
function deepClone(target) {
    if (!(target instanceof Object)) {
        return target;
    }
    let newObj;
    if (target instanceof Array) {
        newObj = [];
    } else if (target instanceof Object) {
        newObj = {};
    }

    for (let key of Object.keys(target)) {
        newObj[key] = deepClone(target[key]);
        newObj[key].__proto__ = target[key].__proto__; // ! 接上原型链
    }

    return newObj;
}

const person1 = new Person("wyuhui", 28);
const person2 = new Person("neo", 20);

const obj = {
    item: 1,
    objItem: {
        person1: person1,
        person2: {
            uname: "person2",
            user: person2,
        },
    },
};

console.log(obj);
console.log(obj.objItem.person1 instanceof Person); // true
const newObj = deepClone(obj);
console.log(newObj.objItem.person1 instanceof Person); // false

// ------------------------
// ! 最全面的深拷贝
const bestDeepClone = function (source, cache = new map()) {
    // 避免循环引用
    if (cache.get(source)) {
        return cache.get(source);
    }

    if (!(source instanceof Object)) return source;
    if (source instanceof Function) {
        const newFunction = source.bind(null);
        newFunction.prototype = bestDeepClone(source.prototype);
        return newFunction;
    }
    if (source instanceof Date) {
        const newDate = new Date(source.getTime());
        return newDate;
    }

    let newObj;
    if (source instanceof RegExp) {
        newObj = new RegExp(source.source, source.flags);
    } else if (source instanceof Array) {
        newObj = [];
    } else {
        newObj = {};
    }

    cache.set(source, newObj);
    for (let key of Object.keys(source)) {
        newObj[key] = bestDeepClone(source[key], cache);
        newObj[key].__proto__ = source[key].__proto__;
    }
};
