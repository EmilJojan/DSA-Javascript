function ReverseSentence(str){
    return str.split(' ').reverse().join(' ')
}

function ReverseWhole(str){
    return str.split("").reverse().join("")
}

function reversingWithouSpace(str){
    str=str.replaceAll(' ','')
    return str.split('').reverse().join('')

}

let name1='Welcome All HelloWorld'
console.log("Original String: "+name1)
console.log("Reversing the Sentence: "+ReverseSentence(name1)) 
console.log("Reversing the whole: "+ReverseWhole(name1))
console.log("Reversing without space: "+reversingWithouSpace(name1))