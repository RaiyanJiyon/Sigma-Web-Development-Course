async function sleep() {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve(45);
        }, 1000);
    })
}

function sum(a, b, c) {
    return a + b + c;
}

(async function main() {
    // let [x, y, ...rest] = [1, 2, 7, 11, 2, 4, 6];
    // console.log(x, y, rest);

    let obj = {
        a: 1,
        b: 2,
        c: 3
    }
    
    let {a, b} = obj
    console.log(a, b)

    let arr = [1, 3, 5];
    // console.log(arr[0] + arr[1] + arr[2])
    console.log(sum(...arr))
})()