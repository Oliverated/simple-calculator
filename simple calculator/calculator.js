let inpDisplay = document.getElementById('display-input')


// buttons
let penBtn = document.getElementById('penbtn')
let clrBtn = document.getElementById('clrbtn')
let delBtn = document.getElementById('delbtn')
let numBtn1 = document.getElementById('btn1')
let numBtn2 = document.getElementById('btn2')
let numBtn3 = document.getElementById('btn3')
let numBtn4 = document.getElementById('btn4')
let numBtn5 = document.getElementById('btn5')
let numBtn6 = document.getElementById('btn6')
let numBtn7 = document.getElementById('btn7')
let numBtn8 = document.getElementById('btn8')
let numBtn9 = document.getElementById('btn9')
let numBtn0 = document.getElementById('btn0')
let dotBtn = document.getElementById('dotbtn')

// operators


let divBtn = document.getElementById('divbtn')
let mulBtn = document.getElementById('mulbtn')
let subBtn = document.getElementById('subbtn')
let addBtn = document.getElementById('addbtn')

let equalBtn = document.getElementById('equalbtn')

//button fuction


numBtn1.addEventListener('click', () =>
    inpDisplay.value += 1
)

numBtn2.addEventListener('click', () =>
    inpDisplay.value += 2
)

numBtn3.addEventListener('click', () =>
    inpDisplay.value += 3
)

numBtn4.addEventListener('click', () =>
    inpDisplay.value += 4
)


numBtn5.addEventListener('click', () =>
    inpDisplay.value += 5
)

numBtn6.addEventListener('click', () =>
    inpDisplay.value += 6
)

numBtn7.addEventListener('click', () =>
    inpDisplay.value += 7
)

numBtn8.addEventListener('click', () =>
    inpDisplay.value += 8
)

numBtn9.addEventListener('click', () =>
    inpDisplay.value += 9
)

numBtn0.addEventListener('click', () =>
    inpDisplay.value += 0
)

dotBtn.addEventListener('click', () =>
    inpDisplay.value += '.'
)

// operator fuction

penBtn.addEventListener('click', () =>{

inpDisplay.value  =  inpDisplay.value / 100

// inpDisplay.value  +=       
}
)

clrBtn.addEventListener('click', () =>
    inpDisplay.value = ''
)



divBtn.addEventListener('click', () =>
    inpDisplay.value += '/'
)

mulBtn.addEventListener('click', () =>
    inpDisplay.value += '*'
)

subBtn.addEventListener('click', () =>
    inpDisplay.value += '-'
)

addBtn.addEventListener('click', () =>
    inpDisplay.value += '+'
)




equalBtn.addEventListener('click', function () {
    inpDisplay.value = eval(inpDisplay.value)

    inpDisplay.innerHTML = inpDisplay.value
})


delBtn.addEventListener('click', () =>
    inpDisplay.value = inpDisplay.value.slice(0, - 1)
)