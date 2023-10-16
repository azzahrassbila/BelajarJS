// console.log("Haaiii")
// alert("Notifikasi")
// prompt("pinjem seratus")

// var Promnet = "pusing ngoding"
// console.log(Promnet)
// var Promnet = "ngoding enak"
// console.log(Promnet)

// let Promnet = "pusing ngoding"
// console.log(Promnet)
// Promnet = "ngoding enak"
// console.log(Promnet)

// const Promnet = "pusing ngoding"
// console.log(Promnet)
// Promnet = "ngoding enak"
// console.log(Promnet)

// let totalPoint = prompt("Masukkan Poin Anda")
//     if(totalPoint > 100){
//         document.write("<h1>Congratulation</h1>");
//     }
//     else{
//         document.write("<h1>Thank u</h1>");
// }

// let x = 6;
// let y = 3;

// if (x < 10 && y > 1) {
//   console.log("a: true");
// } else {
//   console.log("a: false");
// }

// if (x < 10 && y < 1) {
//   console.log("b: true");
// } else {
//   console.log("b: false");
// }

// if (x == 5 || y == 5) {
//     console.log("c: true");
// } else {
//     console.log("c: false");
// }

// if (x == 6 || y == 6) {
//     console.log("d: true");
// } else {
//     console.log("d: false");
// }

// let x = 6;
// let y = 3;

// console.log(x < 10 && y > 1)
// console.log(x < 10 && y < 1)
// console.log(x == 5||y == 5)
// console.log(x == 6||y == 5)
// console.log(!(x == y))

// let p = document.querySelector("p")
// let button = document.querySelector("button")
// let input = document.querySelector("input")

// button.addEventListener('click', function(){
//     let isi = input.value
//     console.log(isi)
//     p.innerHTML = isi
// })

const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        
        const completeCheckbox = document.createElement("input");
        completeCheckbox.type = "checkbox";
        completeCheckbox.classList.add("complete-checkbox");
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.classList.add("X-button");
        
        todoItem.innerHTML = `
            <span>${todoText}</span>
        `;
        
        todoItem.prepend(completeCheckbox);
        todoItem.appendChild(deleteButton);
        
        todoList.appendChild(todoItem);
        todoInput.value = "";
        
        completeCheckbox.addEventListener("change", () => {
            const todoSpan = todoItem.querySelector("span");
            todoSpan.innerHTML = completeCheckbox.checked
                ? `<del>${todoText}</del>`
                : todoText;
        });
        
        deleteButton.addEventListener("click", () => {
            todoItem.remove();
        });
    }
});

