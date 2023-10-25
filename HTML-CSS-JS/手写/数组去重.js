// ES5
function removeRepete(arr) {
    const res = arr.filter((item, index, arr) => {
        return arr.indexOf(item === index);
    });
    return res;
}

// ES6
function removeRepete2(arr) {
    return [...new Set(arr)];
}
