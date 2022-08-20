// lesson #5
// const names = [NaN, 131, 50, null, 12, 101, 'Bob', -23, ' ', 'Юра','юра', 'Alex', 'Victor', 'victor', 'John', 'Cina', 100];


//bubble sort
const num = [1, 131, 11, 50, 12, 100, 5, 23];
console.log(num)


for (let i = 0; i <= num.length; i++) {
    let isSorted = true
    for (let j = 0; j < num.length - 1 - i; j++) { // по возрастанию
        if (num[j] > num[j + 1]) {
            isSorted = false;
                // Пример c кружками
            // let temp = num[j]
            // num[j] = num[j + 1]
            // num[j + 1] = temp
            [num[j + 1], num[j]] = [num[j], num[j + 1]]
        }
    }
    if (isSorted)break
}


console.log(num)


// const yo = names.sort()
// console.log(names)


// const compareFunc = (a, b) =>{
//     if (a < b){
//         return -1
//     }else {
//         return 1
//     }
// }
// const yo = number.sort(compareNum).reverse()
//
// function compareNum(a, b) {
//     return a - b;
// }
//
// console.log(yo)


// const student = [
//     {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 950
//     },
//     {
//         name: "Alex",
//         age: 23,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         name: "Cina",
//         age: 21,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     },
//     {
//         name: "John",
//         age: 19,
//         isMarried: false,
//         scores: 121,
//
//     }
// ]
//
// let newArray;
// // const studentScore = student.sort((a, b) => a.scores - b.scores)
// const studentScore = student.sort((a, b) => a.name.localeCompare(b.name))
//
// console.log(studentScore)
// console.log(newArray)


//
// const todoLists = [
//     {
//         id: 1,
//         title: 'What to learn',
//         filter: 'all',
//     },
//     {
//         id: 2,
//         title: 'What to buy',
//         filter: 'all',
//     },
// ]
//
// const tasks = {
//     1: [
//         {id: 11, title: 'JS', isDone: false},
//         {id: 12, title: 'HTML', isDone: false},
//         {id: 13, title: 'CSS', isDone: false},
//     ],
//     2: [
//         {id: 11, title: 'JS', isDone: false},
//         {id: 12, title: 'HTML', isDone: false},
//         {id: 13, title: 'CSS', isDone: false},
//     ]
// }