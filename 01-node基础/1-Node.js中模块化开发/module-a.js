const add = (m, n) => m + n;
// 第一个add是exports对象的属性，第二个add是add函数
exports.add = add;
//exports相当于module.exports的别名，相当于两个都指向同一个对象
//但是当两个分别指向不同的对象是，最终以module.exports导出的对象为准