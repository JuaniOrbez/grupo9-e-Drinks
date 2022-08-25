window.addEventListener("load", function () {

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
        } else if (campoPassword.value.length < 5) {
            errores.push("La contraseña debe tener al menos 5 caracteres")
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
})