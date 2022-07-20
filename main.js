console.log(Array.isArray([]))

const user = {
    name: 'Bob',
    age: 23,
    isStudent: true,
}
// console.log(user)
// const user2 = user
// user.name = 'Alex'

const user2 = {...user}
user2.name = 'Alex'
console.log(user)

console.log(user2)