const notesList = document.querySelector('#notes') // ACCEDO AL AL DIV QUE VA A CONTENER TODAS LAS NUEVAS NOTAS

let glovalNoteID = ''

const noteUI = note => { // ESTA FUNCION TOMA UN PARAMETRO COMO VALOR Y PROCESA EL MISMO
    console.log(note)

    const div = document.createElement('div')

    //AGREGO AL DIV LIST UN H1 CON LA PROPIEDAD TITLE DEL NOTE
    div.innerHTML = `
    <div class="card card-body rounded-0 mb-2 mb-2 animate__animated animate__fadeInUp">
        <div class="d-flex justify-content-between">
            <h1 class="h3 card-title">${note.title}</h1>
            <div>
                <button class="btn btn-danger delete" data-id="${note.id}">delete</button>
                <button class="btn btn-secondary update" data-id="${note.id}">update</button>
            </div>
        </div>
            <p>${note.description}</p>
    </div>
    `;

    const btnDelete = div.querySelector('.delete')
    const btnUpdate = div.querySelector('.update')

    btnDelete.addEventListener('click', () => {
        deleteNote(btnDelete.dataset.id)
    })

    btnUpdate.addEventListener('click', () => {
        getNote(btnUpdate.dataset.id)
    })

    return div
}

const renderNotes = notes => {
    notesList.innerHTML = ''
    notes.forEach(note => {
        notesList.append(noteUI(note))
    });
}

const appenNote = note => {
    notesList.append(noteUI(note))
}