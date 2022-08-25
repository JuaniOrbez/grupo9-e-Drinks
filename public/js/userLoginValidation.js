window.addEventListener("load", function () {

    let formulario = document.querySelector(".log-form")

    formulario.addEventListener("submit", (e) => {
        let errores = [];

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


        if (errores.length > 0) {
            e.preventDefault()
            let ulErrores = document.querySelector("div.errores ul")
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }

    })
})