const person = {
    isHuman: "yes",
    isMale: "not sure",
    sendMessage: function () {
        return `I am a person, am I a human? ${this.isHuman}, am I a man? ${this.isMale}`;
    },
};

const me = Object.create(person);
me.isMale = "yes"; // 在me上修改属性, person的属性不变
console.log(me.__proto__ === person); // true
me.__proto__.isHuman = "no"; // 在person(原型)上修改属性
console.log(me.isHuman); // no
console.log(person.isHuman); // no

const boyObj = {
    gender: "male",
};

const personObj = {
    isHuman: true,
};
