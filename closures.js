let sum = function(a){
    console.log(a)
    let c=4;
    return function(b){
        return a+b+c;
    }
}

let store = sum(2);
console.log(store(4));


// Example 2

let total = function(a,b,c){
    return {
        getTwo: function(){
            return a+b;
        },
        getThree: function(){
            return a+b+c;
        }
    }
} 

let res = total(5,4,3);
console.log(res.getTwo())
console.log(res.getThree());


