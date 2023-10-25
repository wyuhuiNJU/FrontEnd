// 全部拉伸
function flatArr(arr) {
    const resArr = [];
    arr.forEach((item) => {
        if (Array.isArray(item)) resArr.push(...flatArr(item));
        else resArr.push(item);
    });
    return resArr;
}

const arr = [[1, 2, 3], 4, [[5, [6]], 7]];
console.log(flatArr(arr));

// 规定拉伸层数
function flatWithLayer(arr, n) {
    function dfs(arr, depth) {
        const ansArr = [];
        if (depth === n) return arr;
        for (let item of arr) {
            if (Array.isArray(item)) {
                ansArr.push(...dfs(item, depth + 1));
            } else {
                ansArr.push(item);
            }
        }
        return ansArr;
    }
    return dfs(arr, 0);
}

const flat1 = flatWithLayer(arr, 3);
console.log(flat1);
