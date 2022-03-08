
const myFunc = (arr) => {

    let res = arr.split(' ').filter(element => element.length>=1).join(' ')
    return [res, arr]
}


let test = 'hgvhv    vbjhbjbjb hjbjhb    jbjhbkb lmlkmlk    kmk'
console.log(myFunc(test))