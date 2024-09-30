const rememberMeBox = document.querySelector("#remember-me-input")
const inputField = document.querySelectorAll(".input-field");
const onlineIdInput = document.querySelector("#input-id")
const passwordInput = document.querySelector("#input-password")
const loginBtn = document.querySelector("#submit-btn")
// const showPassword = document.querySelector("#show-password-btn")


let rememberMeToggle = false;
rememberMeBox.addEventListener('click', (e) => {
    rememberMeToggle = !rememberMeToggle
    rememberMeBox.innerHTML = rememberMeToggle ? '&check;' : ''
})

const handleInputFieldClick = (e) => {
    removeInputFieldActiveState()
    e.currentTarget.classList.add('active-input')
    e.currentTarget.lastElementChild.classList.add('active-span')
}

const removeInputFieldActiveState = (e) => {
    // showPassword.style.display = 'none'
    // if(e === 'input-password') return
    inputField.forEach((input) => {

        // console.log(input.firstElementChild.value)

        if(input.firstElementChild.value === ''){
            // if(input.firstElementChild.id === 'input-password'){
            //     console.log('jfwofoi');
            //     console.log(input.firstElementChild.value === '');
            // }
            // console.log('e');
            input.lastElementChild.classList.remove('active-span')
            // console.log('ent');
        }

        input.classList.remove('active-input')
            // console.log('ecom');
    })
}

inputField.forEach((e) => e.addEventListener('click', (e) => handleInputFieldClick(e)))

let onlineIdValue = '';
let passwordValue = '';

const setInputValues = () => {
    onlineIdValue = onlineIdInput.value;
    passwordValue = passwordInput.value;
    highlightLoginBtn()
};

onlineIdInput.addEventListener('input', setInputValues)
passwordInput.addEventListener('input', setInputValues)

// const handleInputValue = (e) =>{
//     let input = e.currentTarget
// }


const highlightLoginBtn = () => {
    if(onlineIdValue != '' && passwordValue != '')
        loginBtn.style = "background: green;"
    else
        loginBtn.style = "background: rgba(218, 217, 217, 0.932);"
}


window.addEventListener('click', (e) => {
    // if(e.target.id === 'input-password') showPassword.style.display = 'block'
    if(e.target.type === 'text' || e.target.type === 'password') return
    removeInputFieldActiveState(e)
})

loginBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const loginText = loginBtn.firstChild
    loginText.style.animation = 'submitBtnAnimation .6s ease .1s'
    // loginText.innerHTML = `<img src="./assets/loading.gif" alt="">`
    // console.log(loginText);
})

// showPassword.addEventListener('click', (e) => {
//     e.preventDefault()
//     e.stopPropagation()
//     if(passwordInput.type === 'password'){
//         passwordInput.setAttribute('type', 'text')
//         showPassword.innerHTML = 'Hide'
//     }
//     else{
//         passwordInput.setAttribute('type', 'password')
//         showPassword.innerHTML = 'Show'
//     }

// })