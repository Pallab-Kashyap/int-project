const rememberMeBox = document.querySelector("#remember-me-input")
const inputField = document.querySelectorAll(".input-field");
const onlineIdInput = document.querySelector("#input-id")
const passwordInput = document.querySelector("#input-password")
const loginBtn = document.querySelector("#submit-btn")

console.log(inputField);

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

const removeInputFieldActiveState = () => {
    inputField.forEach((e) => {
        if(e.firstElementChild.value === '')
            e.lastElementChild.classList.remove('active-span')

            e.classList.remove('active-input')
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

const handleInputValue = (e) =>{
    let input = e.currentTarget
    console.log(input);
}


const highlightLoginBtn = () => {
    if(onlineIdValue != '' && passwordValue != '')
        loginBtn.style = "background: green;"
    else
        loginBtn.style = "background: rgba(218, 217, 217, 0.932);"
}


window.addEventListener('click', (e) => {
    if(e.target.type === 'text' || e.target.type === 'password') return
    removeInputFieldActiveState()
})