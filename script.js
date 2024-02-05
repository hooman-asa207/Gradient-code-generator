let $ = document
const input1 = $.querySelector("#color-1")
const input2 = $.querySelector("#color-2")
const generateBtn = $.querySelector("#submit")
const copyBtn = $.querySelector("#copy")
const codeArea = $.querySelector("#code")
const dirBtns = $.querySelectorAll(".buttons button")

dirBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        removeActiveClass()
        btn.classList.toggle("active")
    })
})

generateBtn.addEventListener("click", () => {
    let mainBtn = $.querySelector(".active")
    let mainBtnDir = mainBtn.dataset.dir
    codeArea.value = `background: linear-gradient(${mainBtnDir}, ${input1.value} 0%, ${input2.value} 100%);`
    document.body.style.cssText = codeArea.value
})

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(codeArea.value)
})

function removeActiveClass() {
    dirBtns.forEach(btn => {
        btn.classList.remove("active")
    })
}