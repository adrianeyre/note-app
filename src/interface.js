'use strict';
var list = new List

document.getElementById('addnote').addEventListener('click', function(event) {
    list.createNote(document.getElementById('new-note-content').value);
    updateNotes();
}, false);

function updateNotes() {
    var index = (list.notes.length - 1);
    var noteId = "<li id=note-" + index + ">";
    var content = noteId + "<a href='URL-GOES-HERE'/>" + list.notes[index].content+ "</li>";
    document.getElementById('notes').innerHTML += content;
}
