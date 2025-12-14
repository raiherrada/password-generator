const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOneEl = document.getElementById("password-one")
let passwordTwoEl = document.getElementById("password-two")

function generatePassword(){
    passwordOneEl.textContent = ""
    for (let i = 0; i < 15; i++){
        let randomCharacterOneIndex = Math.floor(Math.random() * characters.length)
        passwordOneEl.textContent += characters[randomCharacterOneIndex]
    }
    passwordTwoEl.textContent = ""
    for (let i = 0; i < 15; i++){
        let randomCharacterTwoIndex = Math.floor(Math.random() * characters.length)
        passwordTwoEl.textContent += characters[randomCharacterTwoIndex]
    }
}

function copyToClipboard(element) {
    const text = element.textContent

    if (!text) return

    navigator.clipboard.writeText(text).then(() => {
        const messageEl = document.getElementById("copy-message")
        messageEl.textContent = "Password copied to clipboard!"

        setTimeout(() => {
            messageEl.textContent = ""
        }, 2000)
    })
}

passwordOneEl.addEventListener("click", () => {
    copyToClipboard(passwordOneEl)
})

passwordTwoEl.addEventListener("click", () => {
    copyToClipboard(passwordTwoEl)
})