class EventEmmitter {
    constructor() {
        this.cache = {};
    }

    on(name, fn) {
        if (this.cache[name]) {
            this.cache.push(fn);
        } else {
            this.cache[name] = [fn];
        }
    }

    off(name, fn) {
        const newTasks = this.cache[name].filter((f) => f !== fn);
        if (newTasks.length === 0) delete this.cache[name];
        else this.cache[name] = newTasks;
    }

    emit(name, once = false, ...args) {
        if (this.cache[name]) {
            const tasks = this.cache[name];
            for (let fn of tasks) {
                fn(...args);
            }
            if (once) {
                delete this.cache[name];
            }
        }
    }

    showCache() {
        console.log(this.cache);
    }
}

const eventBus = new EventEmmitter();
const showNameAge = function (name, age) {
    console.log(`${name}-${age}`);
};

const sayHi = function (name, age) {
    console.log(`hi ${name} ${age}`);
};

eventBus.on("show", showNameAge);
eventBus.on("say", sayHi);
eventBus.showCache(0);
eventBus.emit("show", false, "neo", 12);
