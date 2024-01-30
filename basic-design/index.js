let inp=document.querySelector('input')
let btn=document.querySelectorAll('button')

for (let button of btn) {
    button.addEventListener('click',()=>{
        let text = button.innerText

        if (text==="C") {
            inp.value = ''
        }
        else if (text === "=") {
            inp.value = eval(inp.value)
        }
        else {
            inp.value = inp.value+text
        }
    })
}
