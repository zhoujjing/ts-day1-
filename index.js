(function () {
    var num = "20";
    console.log(num);
    var info;
    (function (info) {
        info[info["name"] = 0] = "name";
        info[info["age"] = 1] = "age";
    })(info || (info = {}));
    console.log("info", info);
    // console.log("name",info[0]);
    console.log("name", info.name);
    console.log('age', info.age);
    // enum describe{
    //     num1=33,
    //     num2=88,
    // }
    // console.log('num1',describe.num2);
    // console.log('num2',describe.num1);
    var num1 = 33;
    var num2 = 88;
    var num3 = 0;
    num3 = num1,
        num1 = num2,
        num2 = num3,
        console.log(num1, num2);
    //数组
    var arr = [1, 2, 3, '123'];
    var arr1 = ['1', 2, 3];
    //元组
    //已知元素的数量和类型
    var newArr = [true, '123', 123];
})();
