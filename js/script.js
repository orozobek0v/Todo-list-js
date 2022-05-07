//Вход====================================================================================


// const login = document.querySelector('.login'),
//     password = document.querySelector('.password'),
//     btn = document.querySelector('.btn')
//
// let counter = 3
// btn.addEventListener('enter', () => {
//     if (login.value() === 'fs9' && password.value() === '123') {
//         alert('Welcome to my world')
//     } else {
//         counter--
//         if (counter === 2) {
//             alert(`У вас ${counter}  попытки осталось`)
//         } else if (counter === 1) {
//             alert(`У вас ${counter} попытки осталось`)
//         } else {
//             alert('Сиз коп ката кетирдиниз, сизге кирууго болбойт.')
//         }
//     }
// })
// console.log(login.value())
// console.log(password.value())


//Todo-list/

const input = document.querySelector('.text'),
    addBtn = document.querySelector('.btn'),
    clearBtn = document.querySelector('.clear__btn'),
    list = document.querySelector('.list')

addBtn.addEventListener('click', () => {
    if (input.value.trim()) {
        const li =
            `<li class="item">
                           <span class="span">${input.value}</span>
                           <button class="btn2">delete</button>
             </li>`
        list.innerHTML += li
        input.value = ''
    }
})

input.addEventListener('keyup', (e) => {
    e.preventDefault()
    if (input.value.trim() && e.keyCode === 13 ) {
        const li =
            `<li class="item">
                           <span class="span">${input.value}</span>
                           <button class="btn2">delete</button>
             </li>`
        list.innerHTML += li
        input.value = ''
    }
})

console.log(list)

clearBtn.addEventListener("click" , () => {
    list.innerHTML = null
} )

list.addEventListener('click', (e) => {
    if (e.target.classList[0] === 'btn2') {
        e.target.parentNode.remove()
    } else if (
        e.target.classList[0] === 'span') {
        e.target.classList.toggle('text-line')
    }
})
console.log(list)
















