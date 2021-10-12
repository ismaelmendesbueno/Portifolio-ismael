let botao = document.querySelector("#botao")

botao.addEventListener("click", function(){
    let txt3 = document.querySelector("#txt3")
    let texto3 = (txt3.value)

    if (texto3.length == 0){
        alert("Please insert something")
    }
})