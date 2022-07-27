const students = [
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
];


//Filter

// const filterFunction = (array, callBack) => {
//     const result = new Array()
//     for (let i = 0; i < array.length; i++){
//         if(callBack(array[i]) !== true){
//             result.push(array[i])
//         }
//     }
//     return result
// }
//
// console.log(filterFunction(students, el => el.isMarried))


// find

const findFunction = (array, callBack) => {
    for (let i = 0; i < array.length; i++){
        if(callBack(array[i]) === true){
            return array[i]
        }
    }
}

console.log(findFunction(students, s => s.name === "John" || "Alex" ))





// вытащить имена
// const getNames = (array) => {
//     const result = []
//     const getValueForResult = el => el.name
//     //
//     for (let i = 0; i < array.length; i++){
//         const newValue = getValueForResult(array[i])
//         result[i] = newValue
//     }
//   return result
// }
// console.log(getNames(students))
//
//
// const getScores = (array) => {
//     const result = []
//
//     const getValueForResult = el => el.scores
//
//     for (let i = 0; i < array.length; i++){
//         const newValue = getValueForResult(array[i])
//         result[i] = newValue
//     }
//
//     return result
// }
//
// console.log(getScores(students))
//
//
// const addScores = (array) => {
//     const result = []
//
//     const getValueForResult = el => ({...el, scores: el.scores + 10})
//
//     for (let i = 0; i < array.length; i++){
//         const newValue = getValueForResult(array[i])
//         result[i] = newValue
//     }
//
//     return result
// }
//
// console.log(addScores(students))


// const mapFunction = (array, callBack) => {
//     const result = []
//     for (let i = 0; i < array.length; i++){
//         const newValue = callBack(array[i])
//         result[i] = newValue
//     }
//     return result
// }

// console.log(students.filter(el => el.name))


//
// console.log(mapFunction(students, el => el.name))
// console.log(mapFunction(students, el => el.scores))
// console.log(mapFunction(students, el => ({...el, scores: el.scores + 10})))
// Lesson #1

// console.log(Array.isArray([]))
//
// const user = {
//     name: 'Bob',
//     age: 23,
//     isStudent: true,
// }
// // console.log(user)
// // const user2 = user
// // user.name = 'Alex'
//
// const user2 = {...user}
// user2.name = 'Alex'
// console.log(user)
//
// console.log(user2)
//
// const students = [
//     {name: "Alex"},
//     {name: "Bob"},
//     {name: "Donald"},
//     {name: "Ann"},
// ]















