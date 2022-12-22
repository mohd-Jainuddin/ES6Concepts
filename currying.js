// currying function 

// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }

// let res = add(5)(2)(3);
// console.log(res)




// Infinite curring function

function add(a){
    return function(b){
        if(b) return add(a+b);
        else return a;
    }
}

let res = add(2)(3)(5)(4)()
console.log(res)