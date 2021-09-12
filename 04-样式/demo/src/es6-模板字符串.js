const name = 'six';
const age = 16;
const str = `my name is ${name},my age is ${age}`

function test(...args) {
    console.log(args)
}

test(1, 2, 3, 4)
// 在js中除了可以用（）来调用函数外；
// 还可使用模板字符串来调用函数
test`1,3,5,${name},${age}`
