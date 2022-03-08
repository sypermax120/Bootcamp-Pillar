
const sum = (arr) => {
    let sum = 0
    arr.forEach(element => {
        sum += element
    });
    return sum
}


let test = [1,2,3,4,5,6,7,8,9]
console.log(sum(test))