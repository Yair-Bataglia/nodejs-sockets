"use strict";

var socket = io();
var saveNote = function saveNote(title, description) {
  //FUNCION QUE TOMA DOS STRINGS
  socket.emit('client:newnote', {
    //EMICION SOCKET CON UN NOMBRE Y ENVIA UN JSON CON LOS PARAMETROS DE ANTES
    title: title,
    description: description
  });
};
var deleteNote = function deleteNote(id) {
  socket.emit('client:deletenote', id);
};
var getNote = function getNote(id) {
  socket.emit('client:getnote', id);
};
var updateNote = function updateNote(id, title, description) {
  socket.emit('client:updatenote', {
    id: id,
    title: title,
    description: description
  });
};
socket.on('server:newnote', appenNote); //SI RECIBE UNA NOTA DEL SERVIDOR EJECUTA LA FUNCIO DE UI.JS

socket.on('server:loadnotes', renderNotes);
socket.on('server:selectednote', function (note) {
  var title = document.querySelector('#title');
  var description = document.querySelector('#description');
  title.value = note.title;
  description.value = note.description;
  glovalNoteID = note.id;
});