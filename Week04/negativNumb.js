
const myFunc = (arr) => {

    let res = arr.filter(element => element>=0)

    return res
}


let test = [-1,-23,-9,8,7,6,5,4,3,2,1,0]
console.log(myFunc(test))