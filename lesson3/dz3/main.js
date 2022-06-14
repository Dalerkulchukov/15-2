function numbers(number1,number2){
    if(number1<number2){
        console.log(alert("Первое меньше"))
    }else if(number2<number1){
        console.log(alert("Второе меньше"))
    }else{
        console.log(alert("Они равны"))
    }

}

numbers(prompt("Введите первое число!"),prompt("Введите второе число!"))

function countchar(text){
   console.log(text.length)
}
countchar(prompt("Напишите что нибудь!"))


