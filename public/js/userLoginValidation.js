window.onload = function () {
    const form = document.querySelector(".log-form")
    const formElements = form.querySelectorAll(".formElement")
    const email = document.querySelector("#email")

    email.focus()

    formElements.forEach(formElement => formElement.addEventListener('blur', e => {

        const element = e.srcElement
        const p = document.querySelector("#error" + element.id)
        const backError = document.querySelector("#backError" + element.id)

        if (backError) {
            backError.parentNode.removeChild(backError)
        }

        let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        let esValido = expReg.test(element.value)


        if (element.value === "") {
            p.innerHTML = 'El campo ' + element.placeholder + ' no puede estar vacio'
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
                p.innerHTML = 'El campo ' + formElement.placeholder + ' no puede estar vacio'
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

        })

        if (errores.length > 0) {
            console.log("no send form")
            e.preventDefault()
        }

    })

}