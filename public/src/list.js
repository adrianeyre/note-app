'use strict';

(function(exports){

  function List() {
    this.notes = [];
  }

  List.prototype.createNote = function(content){
    var note = new Note(content);
    this.notes.push(note);
  };

  exports.List = List;
  exports.List.createNote = List.createNote;
})(this);
