'use strict';

function Note(content) {
  this.content = content;
}

Note.prototype.short = function () {
  if(this.content.length > 20) {
    return this.content.substring(0,20)+"...";
  }else{
    return this.content
  }
};
