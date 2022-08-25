window.onload = function () {
    const form = document.querySelector(".f-registro")
    const formElements = form.querySelectorAll(".formElement")
    const name = document.querySelector("#name")

    const campoImage = document.querySelector("#image")
    
    name.focus()

    formElements.forEach(formElement => formElement.addEventListener('blur', e => {

        const element = e.srcElement
        const p = document.querySelector("#error" + element.id)
        const backError = document.querySelector("#backError" + element.id)

        if (backError) {
            backError.parentNode.removeChild(backError)
        }

        let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        let esValido = expReg.test(element.value)


        let jpg = /(.jpg)$/i
        let png = /(.png)$/i
        let jpeg = /(.jpeg)$/i
        let gif = /(.gif)$/i
        if (element.name === "image" && !jpg.exec(campoImage.value) && !png.exec(campoImage.value) && !jpeg.exec(campoImage.value) && !gif.exec(campoImage.value)) {
            formElement.classList.add("isInvalid")
            p.innerHTML = "Imagen invalida. Seleccione un archivo JPG, JPEG, PNG, GIF"
            
        }

        else if (element.value === "") {
            p.innerHTML = 'El campo ' + element.placeholder + ' no puede estar vacío'
            element.classList.add("isInvalid")

        }
        else if (element.name === "first_name" && element.value.length < 2) {
            p.innerHTML = 'El campo nombre debe tener al menos 2 caracteres'
            element.classList.add("isInvalid")

        }

        else if (element.name === "last_name" && element.value.length < 2) {
            p.innerHTML = 'El campo ' + element.placeholder + ' debe tener al menos 2 caracteres'
            element.classList.add("isInvalid")

        }

        else if (element.name === "password" && element.value.length < 8) {
            p.innerHTML = 'El campo ' + element.placeholder + ' debe tener al menos 8 caracteres'
            element.classList.add("isInvalid")

        }

        else if (element.name === "email" && esValido == false) {
            p.innerHTML = "El email debe ser valido"
            element.classList.add("isInvalid")
        }


        else {
            element.classList.remove("isInvalid")
            p.innerHTML = ""
        }

    }))

    form.addEventListener("submit", (e) => {
        let errores = []

        formElements.forEach(formElement => {
            const p = document.querySelector("#error" + formElement.id)

            if (formElement.value === "") {
                formElement.classList.add("isInvalid")
                p.innerHTML = 'El campo ' + formElement.placeholder + ' no puede estar vacío'
                errores.push(formElement)
            }

            if (formElement.name === "first_name" && formElement.value.length > 0 && formElement.value.length < 2) {
                formElement.classList.add("isInvalid")
                p.innerHTML = 'El campo ' + formElement.placeholder + ' debe tener al menos 2 caracteres'
                errores.push(formElement)
            }

            if (formElement.name === "last_name" && formElement.value.length > 0 && formElement.value.length < 2) {
                formElement.classList.add("isInvalid")
                p.innerHTML = 'El campo ' + formElement.placeholder + ' debe tener al menos 2 caracteres'
                errores.push(formElement)
            }

            if (formElement.name === "password" && formElement.value.length > 0 && formElement.value.length < 8) {
                formElement.classList.add("isInvalid")
                p.innerHTML = 'El campo ' + formElement.placeholder + ' debe tener al menos 8 caracteres'
                errores.push(formElement)
            }

            if (formElement.name === "email" && esValido == false) {
                formElement.classList.add("isInvalid")
                p.innerHTML = "El email debe ser valido"
                errores.push(formElement)
            }

        

            let jpg = /(.jpg)$/i
            let png = /(.png)$/i
            let jpeg = /(.jpeg)$/i
            let gif = /(.gif)$/i
            if (formElement.name === "image" && !jpg.exec(campoImage.value) && !png.exec(campoImage.value) && !jpeg.exec(campoImage.value) && !gif.exec(campoImage.value)) {
                formElement.classList.add("isInvalid")
                p.innerHTML = "Imagen invalida. Seleccione un archivo JPG, JPEG, PNG, GIF"
                errores.push(formElement)
            }
        })

        if (errores.length > 0) {
            console.log("no send form")
            e.preventDefault()
        }

    })

}



/*  window.addEventListener("load", function () {

   let formulario = document.querySelector(".f-registro")

   formulario.addEventListener("submit", (e) => {
       let errores = [];

       let campoNombre = document.querySelector("#nombre")
       if (campoNombre.value == "") {
           errores.push("Nombre vacio")
       } else if (campoNombre.value.length < 2) {
           errores.push("El nombre debe tener al menos 2 caracteres")
       }

       let campoApellido = document.querySelector("#apellido")
       if (campoApellido.value == "") {
           errores.push("Apellido vacio")
       } else if (campoApellido.value.length < 2) {
           errores.push("El apellido debe tener al menos 2 caracteres")
       }

       let campoEmail = document.querySelector("#email")

       const expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
       const esValido = expReg.test(campoEmail.value)

       if (campoEmail.value == "") {
           errores.push("Email vacio")
       } else if (esValido == false) {
           errores.push("El email debe ser valido")}


       let campoPassword = document.querySelector("#password")
       if (campoPassword.value == "") {
           errores.push("Contraseña vacia")
       } else if (campoPassword.value.length < 8) {
           errores.push("La contraseña debe tener al menos 8 caracteres")
       }

         let campoImage = document.querySelector("#image")
         let jpg = /(.jpg)$/i
         let png = /(.png)$/i
        if (campoImage.value == "") {
            errores.push("Imagen vacia")
        } else if (!jpg.exec(campoImage.value) && !png.exec(campoImage.value)) {
           errores.push("Imagen invalida. Seleccione un archivo JPG o PNG")
        }
      

       if (errores.length > 0) {
           e.preventDefault()
           let ulErrores = document.querySelector("div.errores ul")
           for (let i = 0; i < errores.length; i++) {
               ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
           }
       }

   })
})    */