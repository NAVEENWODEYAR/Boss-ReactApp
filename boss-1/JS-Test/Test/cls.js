class Test
{
     cName = 'Boss';
     cId = 1;
    getMsg()
        {
            console.log(this.cName);
            console.log(this.cId);
        }
}
var a = new Test();
// console.log(a);
// console.log(a.getMsg);
console.log(a.getMsg());