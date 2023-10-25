function create(obj) {
    function Father() {} // 新建一个构造函数
    Father.prototype = obj; // 构造函数的原型对象指向 obj
    return new Father(); // 返回实例对象
}
//! 简易版
