(function () {
    let num: string = "20"
    console.log(num);

    enum info {
        name,
        age
    }
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
    let num1: number = 33;
    let num2: number = 88;
    let num3: number = 0;
    num3 = num1,
        num1 = num2,
        num2 = num3,
        console.log(num1, num2);

    //数组
    let arr: (number | string)[] = [1, 2, 3, '123']
    let arr1: Array<number | string> = ['1', 2, 3]

    //元组
    //已知元素的数量和类型
    let newArr: [boolean, string, number] = [true, '123', 123]


})()
