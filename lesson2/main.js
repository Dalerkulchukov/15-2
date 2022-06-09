const arr=[
    {
        username:"jack",
        full_name:"jack Koin"
    },
    {
        username:"jack",
        full_name:"jack Koin"
    },
    {
        username:"jack",
        full_name:"jack Koin"
    },
    {
        username:"jack",
        full_name:"jack Koin"
    },
    {
        username:"jack",
        full_name:"jack Koin"
    },
    {
        username:"jack",
        full_name:"jack Koin"
    },
    {
        username:"jack",
        full_name:"jack Koin"
    },
    {
        username:"jack",
        full_name:"jack Koin"
    },

]
for(let i=0; i < arr.length; i++){
    if(i===2){
        break;
    }else{
        console.log(arr[i])
    }
}
for(let user of arr){
    console.log(user)
}
const obj={
    key1:"b1",
    key2:"b2",
    key3:"b3",
    key4:"b4",
    key5:"b5",
}
for(let key in obj){
    console.log(obj[key])
}
// const users=[
//     {
//         username: "jack",
//         salary:500
//     },
//  {
//         username: "john",
//         salary:1000
//     },
//  {
//         username: "Shaman",
//         salary:10000
//     },
//
// ]
//
// // for(let user of users){
// //     if(usere.salary > 500){
// //         filteredUsers.push(user)
// //     }
// // }
// // console.log(filteredUsers)
//
// const filteredUsers=users.filter(user => user. salary > 500)
// console.log(filteredUsers)

const robot=[
    {
        username: "mark 2",
        power:1000
    },
    {
        username: "mark 4",
        power:2000
    },
    {
        username: "mark 42",
        power:5000
    },
    {
        username: "mark 49 halkbuster",
        power:10000
    },
    {
        username: "mark 50",
        power:20000
    },

]

const filteredUsers=robot.filter( user => user. power > 5000)
console.log(filteredUsers)


