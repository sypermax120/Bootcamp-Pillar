
const sort = (arr) => {

    for(i=0; i<=arr.length-1; i++){
        for(j=0; j<=arr.length-2; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp

            }
        }
    }

    return arr
}


let test = [9,8,7,6,5,4,3,2,1,0]
console.log(sort(test))