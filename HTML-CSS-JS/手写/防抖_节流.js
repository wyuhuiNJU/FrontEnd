function debounce(func, wait) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            func.apply(context, args);
        }, wait);
    };
}

// function throttle(func, wait) {
//     let context, args;
//     let previous = 0;
//     return function () {
//         const now = +new Date();
//         context = this;
//         args = arguments;
//         // 超过wait才重新执行, 否则
//         if (now - previous > wait) {
//             func.apply(context, args);
//             previous = now;
//         }
//     };
// }

function throttle(func, wait) {
    let previous = 0;
    return (...args) => {
        const now = +new Date();
        if (now - previous > wait) {
            func(...args);
            previous = now;
        }
    };
}
