const socket = io()

const saveNote = (title, description) => { //FUNCION QUE TOMA DOS STRINGS
    socket.emit('client:newnote', { //EMICION SOCKET CON UN NOMBRE Y ENVIA UN JSON CON LOS PARAMETROS DE ANTES
        title,
        description
    })
}

const deleteNote = id => {
    socket.emit('client:deletenote', id)
}

const getNote = id => {
    socket.emit('client:getnote', id)
}

const updateNote = (id, title, description) => {
    socket.emit('client:updatenote', {
        id,
        title,
        description
    })
}

socket.on('server:newnote', appenNote) //SI RECIBE UNA NOTA DEL SERVIDOR EJECUTA LA FUNCIO DE UI.JS

socket.on('server:loadnotes', renderNotes)

socket.on('server:selectednote', note => {
    const title = document.querySelector('#title')
    const description = document.querySelector('#description')

    title.value = note.title
    description.value = note.description

    glovalNoteID = note.id
})