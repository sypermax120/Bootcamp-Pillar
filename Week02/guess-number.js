
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

let count = 0

let randomValue = Math.round(getRandomArbitrary(1,100))

const guess = (randomValue, inputValue) => {
    count+=1

    if(count<=5){
        // console.log(count)
        
        if(randomValue === inputValue){
            return true
        }else{return false}

    }else{
        return count
        // document.location.reload(); 
    }


}

console.log( guess(randomValue, 10))
console.log( guess(randomValue, 15))
console.log( guess(randomValue, 20))
console.log( guess(randomValue, 25))
console.log( guess(randomValue, 30))

console.log( guess(randomValue, 35))
console.log( guess(randomValue, 40))