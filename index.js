
let data1 = 1
let data2 = "1.25"
//console.log(data1, typeof data1)
//console.log(data2, typeof data2)

let data3 = data1 + parseFloat(data2)
console.log(data3)

//let data3 = data1 + toString() + data2
//console.log(data3, typeof data3)

//Array
let data = ["one", 2 , true]
//console.log(data[2], typeof data [2])

//object
 user = 
{
    name : "Mai",
    faculty : "FKEKK" ,
    phone : "0166031029" ,
    email : "b022110122@student.utem.edu.my"
}
//console.log( user.email)

 user = 
{
    name : "Mai",
    faculty : "FKEKK" ,
    phone : ["0166031029" , "0105281029"] ,
    email : "b022110122@student.utem.edu.my"
}
//console.log(user.phone[0])

user = 
{
    name : "Mai",
    faculty : "FKEKK" ,
    phone : {office:"0166031029" , mobile: "0105281029"} ,
    email : "b022110122@student.utem.edu.my"
}
console.log(user.phone.mobile)