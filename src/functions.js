//call apply bind example
{
    let user = {
        name: 'dk',
        age: 10
    }

    function getDetails(city, company) {
        console.log(this.name + "-" + this.age + "-" + city + "-" + company)
    }

    //to run this getDetails we can attach the user object (this) to it using call or apply

    //main difference of call and bind is that in call we pass parameter one by one and in apply we pass as array

    getDetails.call(user, 'pune', 'infy') // dk-10-pune-infy

    getDetails.apply(user, ['cwa', 'wipro']) //dk-10-cwa-wipro

    //but bind works differently first it creates a funtion then we can execute it

    let newGetDetails = getDetails.bind(user)

    newGetDetails('pune', 'infy') //dk-10-pune-infy
}


//attaching the function to Object prototype


{
    let user = {
        name: 'dk',
        age: 10
    }

    function getDetails(city, company) {
        console.log(this.name + "-" + this.age + "-" + city + "-" + company)
    }

    Object.prototype.getDetails = getDetails

    //get details function will be awailable in all the object as we have attached it to it;s prototye

    user.getDetails('d', 'f')
}

//Closure : inner function makes a closure with it's outer lexical scope variables available in outer function will be available in inner also

{
    function OuterFunction() {
        var count = 0
        return function InnerFunction() {
            console.log(++count)
        }
    }

    let counter = OuterFunction()
    //it will return inner function and if we execute this inner function multiple time it will have the reference of count outer variable
    //and it will increase it's value in each execution

    counter()
    counter()
    counter()
    counter()

}

//counter that increase the counter in every 1 second

// {
//     function counter() {
//         var count = 0
//         return function increment() {
//             var re = setInterval(myFunc, 1000)
//             function myFunc(){
//                 if (count === 9)
//                     clearInterval(re)
//                 console.log(++count)
//             }
//         }
//     }

//     counter()()
// } 

// design stopwatch counter

// {
//     function stopWatch() {
//         var start = new Date().getTime()

//         return function startStopWatch() {
//             var si = setInterval(myWatch, 1000)
//             function myWatch() {
//                 var timeInMiliseconds =(new Date().getTime() - start)
//                 let h, m, s;
//                 h = Math.floor(timeInMiliseconds / 1000 / 60 / 60);
//                 m = Math.floor((timeInMiliseconds / 1000 / 60 / 60 - h) * 60);
//                 s = Math.floor(((timeInMiliseconds / 1000 / 60 / 60 - h) * 60 - m) * 60);
//                 // to get time format 00:00:00

//                 s < 10 ? s = `0${s}` : s = `${s}`
//                 m < 10 ? m = `0${m}` : m = `${m}`
//                 h < 10 ? h = `0${h}` : h = `${h}`


//                // console.log(`${h}:${m}:${s}`);
//                 // console.log(inr.getHours()+":"+inr.getMinutes()+":"+inr.getSeconds())
//             }
//         }

//     }
//     stopWatch()()
// }

//alternate method
// {
//     function stopWatch() {
//         var h = m = s = 0

//         return function startStopWatch() {
//             var si = setInterval(myWatch, 1000)
//             function myWatch() {
//                 ++s
//                 if (s === 60) {
//                     ++m
//                     s = 0
//                 }
//                 if (m === 60) {
//                     ++h
//                     m = 0
//                 }
//                 //console.log(h+":"+m+":"+s)
//             }
//         }

//     }
//     stopWatch()()
// }