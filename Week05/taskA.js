let s = "5F3Z-2e-9-w"; 
let k = 4

let S = "2-5g-3-J"
let K = 2


const myFunc = (key ,ln) => {
    let res = key.split('-').join('');
    let temp = '';
    let count = 0;

    for(let i=res.length-1; i>=0; i--){
        if(count<ln){
            temp += res[i]
            count+=1
        }else{
            temp += '-'+res[i]
            count = 1
        }
        // console.log(count);

    }
    return temp.split('').reverse().join('')

}


console.log(myFunc(s,k));
console.log(myFunc(S,K));
