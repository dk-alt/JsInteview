
console.log("100" + 1) //1001

console.log("100" - 1) //99

console.log("abc" - 1) //Nan


//remove duplicates from array
{
    let arr = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4]
    let uArr = new Set(arr)
    console.log([...uArr]) // [1,2,3,4]
}

//remove duplicate object with using map and set

{
    let arr = [{ name: 'dk', age: 20 }, { name: 'dk', age: 20 }, { name: 'hm', age: 23 }]
    console.log([...new Set(arr.map(x => JSON.stringify(x)))].map(x => JSON.parse(x)))
}

//Unique from mixed array
{
    let arr = [1, 3, 3, 2, 2, { a: '1', b: '2' }, { a: '1', b: '2' }, { a: '1', c: '4' }]


    let uniqueObj = {}
    let uniqueArr = []
    for (let i = 0; i < arr.length; i++) {

        if (typeof arr[i] === 'object' && !uniqueObj[JSON.stringify(arr[i])]) {
            uniqueObj[JSON.stringify(arr[i])] = arr[i]
            uniqueArr.push(arr[i])
        }
        else if (typeof arr[i] !== 'object' && !uniqueObj[arr[i]]) {
            uniqueObj[arr[i]] = arr[i]
            uniqueArr.push(arr[i])
        }
    }

    console.log(uniqueArr)
}

//remove  dubplicates from array using filter
{
    let arr = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5, 6, 7]

    let uniqueArr = arr.filter((number, index, originalArr) => {
        return originalArr.indexOf(number) === index
    })

    console.log(uniqueArr)
}

///count fruits(string) and store in object using reduce

{
    fruits = ['mango', 'mango', 'banana', 'banana', 'apple']

    let obj = fruits.reduce((obj, fruit) => {

        if (!obj[fruit]) {
            obj[fruit] = 1
        }
        else if (obj[fruit]) {
            obj[fruit] = obj[fruit] + 1
        }
        return obj
    }, {})

    console.log(obj)
}

//merge array using rest operator
{
    let a1 = [1, 2, 3]
    let a2 = ["a", 'b', "c"]
    console.log([...a1, 'new', ...a2])
}

//shallow copy and deep copy
{
    let user1 = {
        name: 'dk',
        age: '28'
    }

    user2 = user1 //this is shallow copy

    //now user 2 has the reference of user1 so both are pointing to the same address
    console.log(user1, user2)
    //if i'll change user1  then user 2 will also change

    user1.age = '20'

    console.log(user1, user2)   //user 2 is also updated


    //lets do the deep copy

    let user3 = JSON.parse(JSON.stringify(user1))
    console.log(user1, user3)

    //now user1 and user3 have same data but difference memory loaction if i'll change user1 user3 will not change
    user1.age = '23'
    console.log(user1, user3)

}

//copy using rest operator very important  
{
    let user = {
        name: 'dk',
        age: '28',
        adderess: {
            city: 'pune',
            pincode: '411017'
        }
    }

    let user1 = {...user}

    console.log(user,user1)

    //if we use rest operator to copy the object, only first level is deep copy and nested level is shallow 
    // It means if we change first level data it won't change in copied object but if we will change the nested level it will chagne

    user.name = 'AK'
    user.adderess.city = "mumbai"

    console.log(user,user1) //check in console user1's nested level is changed because it is refering to same old object

    //to solve this problem we can spread (copy) the nested object also

    let user2 = {...user, adderess: {...user.adderess}}

    // if we will change the city in user then user2 won't get affected

    user.adderess.city = 'newcity'

    console.log(user,user2)
}


//destructuring  of object
{
    let user = {
        name: 'dk',
        age: '28',
        adderess: {
            city: 'pune',
            pincode: '411017'
        }
    }

    let {name,age} = user //destructuring the first/root level

    console.log(name,age) //dk,28

    //destructuring the nested level

    let { adderess : {city, pincode}} = user

    console.log(city,pincode) //pune 411017
}


 


