async function sleep() {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve(45);
        }, 1000);
    })
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
})()