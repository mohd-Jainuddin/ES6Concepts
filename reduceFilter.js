let arr = [10,22,23,43,21,25,67,45,32,45];


// filter
let filter = arr.filter((item)=>{
    item <= 30 ? console.log(item) : ''
})

// reduce
let reduce = arr.reduce((total,item)=>{
    return total+item
},0)
console.log(reduce)

// map
let map = arr.map((item)=>{
    console.log(item)
})

// forEach
arr.forEach((item)=>{
    console.log(item)
})
