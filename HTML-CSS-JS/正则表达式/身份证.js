// 输入的较长数字字符串
const numberString = "1234567890";

// 使用正则表达式在每3个数字之间添加逗号
const formattedNumber = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

console.log(formattedNumber); // 输出: "1,234,567,890"

// 插入的位置
/**
 * 1. 该位置后面有三个数字
 * 2. 该位置前面仍然有数字
 */
