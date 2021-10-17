console.log('Hello test !!!');

// variable
{
    var a = 1; //ใช้ได้ทุกที่
    let b = 2; //ใช้ได้เฉพาะใน {}
    const c = 3; //เหมือน Let แต่เป็นค่าคงที่
}
console.log('Variable value = ', a);

// Array
{
    let arr = [1, 2];
    console.log('Array = ', arr);

    //add ค่าลง array
    let pushArr = arr.push(3,4);
    console.log('Push array = ', pushArr + ' / Result = ', arr);

    //เอาค่าออกจาก array และ return ค่าออกมา
    let popArr = arr.pop();
    console.log('Pop array', popArr + ' / Result = ', arr);
}
