function typeOf(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

console.log(typeOf("111")); // string
console.log(typeOf(111)); // number
const fn = () => {};
console.log(typeOf(fn)); // function
