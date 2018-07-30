const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

// let index = 0

// function init() {
//   // your code here
//   const body = document.querySelector("body")
//     body.addEventListener("keydown", function(e) {
    
//     const key = e.key
    
//     if (key === codes[index]) {
//       index++;
//         if (index===codes.length) {
//           alert("hurray")
//         }
//     }
// }
// }
let index = 0

function init () {

const body = document.querySelector('body')

body.addEventListener('keydown', function(e) {
  console.log(e.key)
  const key = e.key
  if (e.key === codes[index]) {
    index++;
      if (index === codes.length) {
        alert ("hurray")
        index = 0
      }
  }
  else {
    index = 0
  }
})
}