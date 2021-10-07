let botao = document.querySelector("#botao")

botao.addEventListener("click", function(){
    let txt1 = document.querySelector("#txt1")
    let texto1 = (txt1.value)

    let txt2 = document.querySelector("#txt2")
    let texto2 = (txt2.value)

    let txt3 = document.querySelector("#txt3")
    let texto3 = (txt3.value)

    if (texto1.length >= 1 && texto2.length >= 1 && texto3.length >= 1){
        let dev = document.querySelector(".dev")
        dev.innerHTML = "Form sent"
    }else{
        alert("insert something")
    }
})