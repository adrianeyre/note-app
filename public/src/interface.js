'use strict';

var list = new List;

document.getElementById('addnote').addEventListener('click', function(event) {
    addNote();
}, false);

(function(exports) {

    function addNote() {
        list.createNote(document.getElementById('new-note-content').value);
        document.getElementById('new-note-content').value = "";
        updateNotes();
        fadeIn('notes-container');
    }

    function updateNotes() {
        var index = (list.notes.length - 1);
        var noteId = "<li class=note id=note-" + index + ">";
        var content = noteId + list.notes[index].short() + "</li>";
        document.getElementById('notes').innerHTML += content;
        getNotes();
    }

    function getNotes() {
        var notes = document.getElementsByClassName('note');
        for (var i = 0; i <= (notes.length - 1); i++) {
            noteClick(notes, i);
        }
    }

    function noteClick(notes, i) {
        document.getElementById(notes[i].id).addEventListener('click', function(event) {
            var elem = document.getElementById('currentnote');
            elem.innerHTML = list.notes[i].content;
            fadeIn('current-note-container');
            editNote(list.notes[i], notes[i].id);
        }, false);
    }

    function editNote(note, noteElement) {
      var noteElement = noteElement;
      var note = note;
      document.getElementById("editbutton").addEventListener('click', function(event) {
        fadeOut("new-note-container");
        fadeIn("edit-note-container");
        document.getElementById("edit-note-content").value = note.content;
        saveEdit(note, noteElement);
      }, false);
    }

    function saveEdit(note, noteElement){
      document.getElementById("save").addEventListener('click', function(event) {
        var newContent = document.getElementById('edit-note-content').value
        note.edit(newContent);
        var elem = document.getElementById(noteElement);
        elem.innerHTML = newContent;
        elem.click();
        fadeOut("edit-note-container");
        fadeIn("new-note-container");
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

    function fadeOut(container) {
        var elem = document.getElementById(container);
        var opacity = 1;
        var id = setInterval(frame, 12);
        document.getElementById(container).classList.remove("show");
        function frame() {
            if (opacity >= 0) {
                clearInterval(id);
            } else {
                opacity--;
                elem.style.opacity = (Math.floor(opacity) * 100);
            }
        }
    }

    exports.addNote = addNote;
    exports.updateNotes = updateNotes;
    exports.getNotes = getNotes;
    exports.noteClick = noteClick;
    exports.editNote = editNote;


})(this);
