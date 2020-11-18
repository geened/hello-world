const num = 5
const num2 = 10
//console.log(num + num2)

const add1 = (number) => {
    return number + 1
}
//console.log(add1(num))

const array = [1,2,3,4,5]
for(let i = 0; i < array.length; i++) {
    console.log(add1(array[i]))
}
