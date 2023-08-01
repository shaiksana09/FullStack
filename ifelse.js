//ifelse.js



// var num = 10
// if(num>20) {
//     console.log("Numis not graeter than 20")
// }
// else {
//     console.log("Num is greater than 20")
// }

// var ars = 12
// if(ars>2 && ars<10){
//     console.log("Good Morning")
// }
// else if(ars>10 && ars<20) {
//     console.log("Good Afternoon")
// }
// else if(ars>20 && ars<100){
//     console.log("Good Evening")
// }
// else{
//     console.log("Good Night")
// }

//prmopt is used to take th einput from the user
// var num = prompt("Enter the integer value:")
// console.log(num)
// if(num%2==0) {
//     console.log("even")
// }
// else{
//     console.log("odd")
// }
// alert(num)


// var num = 20
// switch(num) {
//     case 0:
//         console.log("It is zero")
//         break;
//     case 1:
//         console.log("It is one")
//         break;
//     case 2:
//         console.log("It is two")
//         break;
//     default:
//         console.log("It is beyond the value 2")
// }


// do-while
// var num = prompt("Enter any value: ")
// var count = 0
//  do{
//     console.log("hello")
//     count++
// }while(num<count)



//while multiplication
// var num = prompt("Enter the digit: ")
// var i = 1 
// while(i<=10){
//     console.log(num + "*" + i + "=", num*i)
//     i++ 
// }



//while number print
// var num = prompt("Enter the number")
// var i = prompt("Enter how many times the number you want to print")
// while(i != 0) {
//     console.log(num)
//     i--
// }


// var arr = [10, 20, 30, "sana", "s", 890.9]
// for(var i =0; i<arr.length;i++) {
//     console.log(arr[i])
// }


// //to access of them in the same line
var arr = [10, 20, 30, "sana", "s", 890.9]
var out = ""
for(var i =0; i<arr.length;i++) {
   out+=(arr[i] + " ")
}
console.log(out)
for(var num in arr) {
    console.log(num) // giving the indexes
}
