window.onload = function(){
const form = document.querySelector(".f-registro")
const formElements = form.querySelectorAll(".formElement")
const name = document.querySelector("#name")
const erroresInput = form.querySelectorAll(".erroresInput")
const errores = document.querySelector(".errores")
const erroresName = document.querySelector(".erroresName")
const erroresDescription = document.querySelector(".erroresDescription")
const erroresImage = document.querySelector(".erroresImage")
const imagen = document.querySelector(".imagen")
console.log(erroresInput)

name.focus()
    
    formElements.forEach(formElement => formElement.addEventListener('blur', e=>{
        
        
        const element = e.srcElement
        const p = document.querySelector("#error" + element.id)
        const backError =document.querySelector("#backError" + element.id)
        
    if (backError){
        backError.parentNode.removeChild(backError)
    }   
    if (element.value ==="" && element.name === "image"){
        p.innerHTML = 'El archivo '+ element.placeholder +' debe ser un archivo válido (JPG, JPEG, PNG, GIF)'
            element.classList.add("isInvalid")
            
        }
        
        else if (element.value ==="" ){
            p.innerHTML = 'El campo '+ element.placeholder +' no puede estar vacío'
            element.classList.add("isInvalid")
            
        }
        else if((element.name === "name") && element.value.length < 5){
            p.innerHTML = 'El campo '+ element.placeholder +' debe tener al menos 5 caracteres'
            element.classList.add("isInvalid")
            
        }
        
        else if((element.name === "description") && element.value.length < 20){
            p.innerHTML = 'El campo '+ element.placeholder +' debe tener al menos 20 caracteres'
            element.classList.add("isInvalid")
            
        }
        else if((element.name === "image")){
            p.innerHTML = 'El archivo '+ element.placeholder +' debe ser un archivo válido (JPG, JPEG, PNG, GIF)'
            element.classList.add("isInvalid")
            
        }
        
        else{
            element.classList.remove("isInvalid")
            p.innerHTML = ""
        }
        
    }))
    
    form.addEventListener("submit", (e) =>{
        let errores = []

        
       
        formElements.forEach(formElement =>{ 
            const p = document.querySelector("#error" + formElement.id)

           if(formElement.value ===""){  
            formElement.classList.add("isInvalid")
            p.innerHTML = 'El campo ' + formElement.placeholder + ' no puede estar vacío'
                 errores.push(formElement)
             }
            
         if ((formElement.name ==="name")&& formElement.value.length >0 && formElement.value.length < 5){
                formElement.classList.add("isInvalid")
                p.innerHTML= 'El campo '+ formElement.placeholder +' debe tener al menos 5 caracteres'    
                errores.push(formElement)
            } 

          if  ((formElement.name ==="description")&& formElement.value.length > 0 && formElement.value.length < 20){
            formElement.classList.add("isInvalid")
            p.innerHTML= 'El campo '+ formElement.placeholder +' debe tener al menos 20 caracteres'  
            errores.push(formElement)
        } 
        })
    
        if(errores.length >0){
            console.log("no send form")
            e.preventDefault()
        } 

        })

}
