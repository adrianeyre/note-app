'use strict';

(function(exports){

  function Note(content){
    this.content = content;
  }

  Note.prototype.short = function() {
    if(this.content.length > 20) {
      return this.content.substring(0,20)+"...";
    }else{
      return this.content;
    }
  };

  Note.prototype.edit = function(newContent){
    this.content = newContent;
  };

  exports.Note = Note;
  exports.Note.short = Note.short;
  exports.Note.edit = Note.edit;
})(this);
