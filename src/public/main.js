// HAGO REFERENCIA DE LOS DATOS QUE ENVIA EL DORMULARIO
const noteForm = document.querySelector('#noteForm') //ESTE ES EL FORMULARIO QUE DEVUELVE LA ACCION DE ENVIAR
const title = document.querySelector('#title') // ESTE ES EL INPUT DONDE SE DEVUELVE EL TITULO INGRESADO
const description = document.querySelector('#description') // ESTE ES EL TEXAREA QUE DEVUELVE LA DESCRIPCION

noteForm.addEventListener('submit', e => { // SE ESCUCHA A LA ACCION DE ENVIAR DEL FORMULARIO
    e.preventDefault() // SE CANCELA LA ACCION POR DEFECTO DE REFRESCAR LA PAGINA AL ACCIONAR EL ENVIO
    //FUNCION DE (SOCKETS.JS) LE PASAMOS LOS DATOS DEL FORM

    if (glovalNoteID) {
        updateNote(glovalNoteID, title.value, description.value)
    } else {
        saveNote(title.value, description.value)
    }

    title.value = ''
    description.value = ''

    title.focus()
})