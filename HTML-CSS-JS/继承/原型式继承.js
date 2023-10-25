function Person(name) {
    this.name = name;
}

const me = Object.create(new Person());
// 这是对单个对象继承, 而不是继承构造函数

const test = Object.create(Person.prototype);
// 这不是继承Person, 而是继承Person的原型,
// test 和 Person 实例共享Person原型上的属性和方法, 但test没有Person实例的属性和方法
// 相当于test与Person实例是平级的
