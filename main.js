


const sm = document.getElementById('small')

const clickHandler = (e) => {
    console.log(e)
    alert('Victor and React')
}
const clickHandler1 = (e) => {
    console.log(e)
    alert('Victor and React')
}

// sm.onclick = clickHandler

sm.addEventListener('click', clickHandler)
// sm.removeEventListener('click', clickHandler)
sm.addEventListener('click', clickHandler1)





// const students = [
//     {
//         name: "John",
//         age: 19,
//         isMarried: false,
//         scores: 100
//     },
//     {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85,
//     },
//     {
//         name: "Alex",
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
// ];













