'use strict';


(function(exports){
  function List(notes) {
    this.notes = [];
  }
  List.prototype.createNote(content){
    var note = new Note(content);
    List.notes.push(note);
  }
  exports.List = List;
  exports.List.createNote = List.createNote;
})(this);
