
const myFunc = () => {
    let temp = []

    for(i=0; i<=10; i++){

        if(i%2==0){
            temp.push(i)
        }
    }

    return temp
}

console.log(myFunc())