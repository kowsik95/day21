// let o = new Promise ((resolve,reject) => {
//     let a = 1
//     if (a < 3){
//         resolve('{success: yes}');
//     }else{
//         reject(rejected);
//     }
// })
// console.log(o);

// o.then((data) => {
//     console.log(data);
// }).catch((data) =>{
//     console.log(data);
// })

// let a = () => {
//     return new Promise ((resolve,reject) =>{
//         let a = 10;
//         if(a <= 10){
//             resolve("success");
//         }else{
//             reject("fail");
//         }
//     })
// }
// let b = () => {
//     return new Promise ((resolve,reject) =>{
//         let b = 10;
//         if(b <= 10){
//             resolve("success");
//         }else{
//             reject("fail");
//         }
//     })
// }

// Promise.all([a(),b()]).then((data) =>{
//     console.log(data);
// }).catch((err) =>{
//     console.log(err);
// })

// arr = [89,86,97,98,56];

// let mark =(marks) => {
//      return new Promise((resolve,reject) =>{
//         let total= marks.reduce((a,b) =>{
//                return a + b;  
//             })
//         resolve(total);
//      })
    
// }
// mark(arr).then((data) =>{
//         console.log(data)
//         let avg = data/5;
//         console.log(avg);
// })

async function add(a,b){
    let c = a + b;
    console.log(c);
    d = await minus();
    console.log(d);
    return c;
}
function minus(){
    setTimeout (() => {
        console.log("Hello");
    },5000)
    return "minus";
}

let result = add(1,2).then((x) =>{
    console.log("then value");
    console.log(x);
})
console.log(result);

// function a(f){
//     console.log("1");
//     f(a);
// }

// function b(x){
//     console.log("2");
//     x(b);
// }
// a(b);