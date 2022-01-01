// console.log('Hello from the browser')


// function diff(a,d){
//     console.log("the difference is " ,a-d)
// }
// diff(9,6)
// let str = 'pepcoder'
// let slicedstr = str.slice(3,7)
// console.log(slicedstr)


let cap = {
    firstName : 'steve',
    lastName : 'rogers',
    friends : ['bucky' , 'tony' , 'banner'],
    address : {
        state : 'manhattan',
        city : 'new york'
    },
    sayHi : function fn(){
        console.log('Captains says Hi')
    }
}
console.log(cap)
cap.sayHi()
console.log(cap.friends[2])
console.log('captain lives in' , cap.address.state)