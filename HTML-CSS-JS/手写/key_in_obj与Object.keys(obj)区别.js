function Father() {
    this.name = "wan";
    this.age = 20;
}

function Son() {
    this.sonName = "neo";
}

Son.prototype = new Father();
Son.prototype.constructor = Son;

const me = new Son();
console.log(me);

for (let key in me) {
    console.log(key);
}

console.log(me.name);
console.log("----------");

for (let key of Object.keys(me)) {
    console.log(key);
}

// ! 区别:
// key in obj, 获取所有属性, 包括原型链上的
// Object.keys(obj), 只获取当前对象的key
