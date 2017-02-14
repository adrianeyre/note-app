'use strict';
var list = new List;

document.getElementById('addnote').addEventListener('click', function(event) {
    list.createNote(document.getElementById('new-note-content').value);
    document.getElementById('new-note-content').value = "";
    updateNotes();
    fadeIn('notes-container');
}, false);

function updateNotes() {
    var index = (list.notes.length - 1);
    var noteId = "<li class=note id=note-" + index + ">";
    var content = noteId + list.notes[index].short() + "</li>";
    document.getElementById('notes').innerHTML += content;
    getNotes();
}

function getNotes() {
    var notes = document.getElementsByClassName('note');
    for(var i = 0; i <= (notes.length - 1); i++) {
        noteClick(notes, i);
    }
}

function noteClick(notes, i) {
    document.getElementById(notes[i].id).addEventListener('click', function(event) {
    var elem = document.getElementById('currentnote');
    elem.innerHTML = list.notes[i].content;
    fadeIn('current-note-container');
    }, false);
}

function fadeIn(container) {
    var elem = document.getElementById(container);
    var opacity = 0;
    var id = setInterval(frame, 12);
    function frame() {
        if (opacity >= 100) {
            clearInterval(id);
        } else {
            opacity++;
            document.getElementById(container).classList.add("show");
            elem.style.opacity = (Math.floor(opacity) / 100);
        }
    }
}
