/* let oldObj = {age:0};

let stateList = [
    {age:oldObj.age + 1},
    {age:oldObj.age + 1},
    {age:oldObj.age + 1}
];


stateList.forEach((newObj) => {
    oldObj =  Object.assign({},oldObj,newObj)
}) */

let oldObj = { age: 0 };

let stateList = [
    (preState) => { return { age: preState.age + 1 } },
    (preState) => { return { age: preState.age + 1 } },
    (preState) => { return { age: preState.age + 1 } },
]
stateList.forEach((fn) => {
    let newObj = fn(oldObj);
    oldObj = Object.assign({}, oldObj, newObj)
})
