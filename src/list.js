'use strict';

function List() {
  this.notes = {};
  this.id = 0;
}

List.prototype.createNote = function(description) {
  this.id += 1;
  var note = new Note(description, this.id);
  this.notes[note.id] = note;
};
