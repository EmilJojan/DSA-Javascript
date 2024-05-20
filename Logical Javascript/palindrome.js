function palindromeNumber(num){
    let reverse=num.toString().split('').reverse().join('')
    return num.toString()===reverse
}

console.log(palindromeNumber(121)) 
console.log(palindromeNumber(123))