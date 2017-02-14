'use strict';

function List() {
  this.notes = [];
}

List.prototype.createNote = function(content) {
  var note = new Note(content);
  this.notes.push(note);
};
