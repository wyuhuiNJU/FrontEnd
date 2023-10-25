const fatherObj = {
    lastName: "wan",
};

// 方式1
const sonObj1 = Object.create(fatherObj);
console.log(sonObj1.lastName); // wan

// 方式2
const sonObj2 = {};
sonObj2.__proto__ = fatherObj;
console.log(sonObj2.lastName); // wan

// 方式1创建出来的sonObj1初始状态一定是空的, 不能实现 __proto__链的拼接
// 方式2可以拼接
