let text =  document.getElementById("text")
let buttones =  document.getElementById("buttones")

for(let i = 0; i <= 16; i++){
    const number =  document.getElementById(`b_${i}`)
    number.addEventListener("click",()=>{
        if(number.id != "b_15" && number.id != "b_16"){
            text.value = text.value + number.value
        }else if(number.id == "b_16"){
            let eli = text.value.substr(0,text.value.length - 1)
            text.value = eli
        }else{
            text.value = ""
        }
    })
}

button.addEventListener("click",()=>{
    let aws = eval(text.value)
    text.value = aws
})






