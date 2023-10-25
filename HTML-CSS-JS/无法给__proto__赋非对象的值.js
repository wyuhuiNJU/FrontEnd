function Person() {
    this.eyes = 2;
    this.head = 1;
}

const man = new Person();
console.log(man.constructor); // 原型链上的 constructor
man.__proto__ = 1; //! 无效, 被JS引擎忽略
console.log(man.__proto__.constructor === man.constructor); // true
