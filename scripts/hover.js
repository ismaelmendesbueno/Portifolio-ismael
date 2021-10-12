let show = document.querySelectorAll("div.dev")
let showHide = document.querySelectorAll(".showHide")

console.log(show);
show.forEach((item,index) => {
    item.addEventListener("click", ()=> {
      showHide.forEach((item, index, parte) => {
        console.log(parte);
        item.classList.toggle("showHideOn")
      })
    })
})


