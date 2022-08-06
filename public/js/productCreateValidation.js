window.onload = function(){
const form = document.querySelector(".f-registro")
form.addEventListener("submit", (e) =>{
    let emptyElements = []
    form.querySelectorAll("input").forEach(input =>{
        if(input.value ===""){
            emptyElements.push(input)
        }
    })
    if(emptyElements.length >0){
        e.preventDefault()
    }
})

}
