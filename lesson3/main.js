// function sayHello(){
//     console.log("hello")
// }
//
// sayHello()
//
// function getfullname(user,age){
//     if(age < 18){
//         alert("close")
//     }
//     else{
//         alert(user.first_name + " " + user.last_name + " " + "open")
//     }
// }
//
// const user = {
//     first_name: "john",
//     last_name: "barbaro"
// }
//
// const age = prompt("Сколько вам лет?")
//
// getfullname(user,age)

function numbers(number1,number2){
    if(number1>number2){
        console.log("Первое больше")
    } else if(number2>number1){
        console.log("Второе больше")
    } else{
        console.log("Они равны")
    }
}
const number = {
    number1: prompt("Число?"),
    number2: prompt("Число?")
}
numbers(number.number1,number.number2)

// const input = document.getElementById ("input")
// const button = document.getElementById ("button")
//
// button.onclick = function (){
//     console.log(input.value)
// }


