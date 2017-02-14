'use strict';

(function(exports){
  function Note(content){
    this.content = content;
  }
  Note.protoype.short(this.content) {
    if(this.content.length > 20) {
      return this.content.substring(0,20)+"...";
    }else{
      return this.content
    }
  }
 exports.Note.short = Note.short;
 exports.Note = Note;
})(this);
