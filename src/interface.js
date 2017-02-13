'use strict';
var list = new List

document.getElementById('addnote').addEventListener('click',function(event){
  list.createNote(document.getElementById('new-note-content').value)
  updateNotes(){}
}, false);

function updateNotes(){

}
