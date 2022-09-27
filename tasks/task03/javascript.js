// 数组
let nameArray = ['Paxos','Bob','Justin'];

// 使用数组
console.log(nameArray[0]);
console.log(nameArray.length);

// 遍历数组
nameArray.forEach((item,index,array) => {
    console.log(item,index);
})

// 添加元素到数组末尾
// 返回新的长度
let newLength = nameArray.push("fuckedYZT")
console.log("新长度为：", newLength,"\n","最后一个元素是：",nameArray[newLength-1]);

// 删除末尾元素
// 返回删除的元素
let last = nameArray.pop()
console.log("删除了",last);

// 删除头部元素
let first = nameArray.shift() 
console.log("删除了",first);

// 往头部添加元素
// 返回新的长度
newLength = nameArray.unshift('Paxxs');
console.log("新长度为：", newLength,"\n","第一个元素是：",nameArray[0]);
console.log("bob 在",nameArray.indexOf('Bob'));