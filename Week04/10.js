
const myFunc = (arg) => {

    let golos = ['а', 'е', 'и', 'і', 'о', 'у', 'я', 'ю', 'є', 'ї'];
    let temp = [];

    arg.split('').forEach(element => {
        golos.forEach(el => {
            if(el==element){
                temp.push(el)
            }
        })
    });


    return [temp.length, temp]
}


let test = 'ааурилтжжщло'
console.log(myFunc(test))