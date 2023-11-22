let str = "Hello World!";
console.log(str);


function factorial(num){
    if(num==0||num==1){
        return num;
    }
    return num * factorial(num-1);
}
let n = factorial(5);
console.log(n);