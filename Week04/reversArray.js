
const revers = (arr) => {
    let temp = []

    for(i=arr.length-1; i>=0; i--){
        temp.push(arr[i])
    }

    return temp
}


let test = [1,2,3,4,5,6,7,8,9]
console.log(revers(test))