'use strict';

describe("Note", function() {

  it("saves content upon creation", function() {
    var note = new Note("Message");
    expect(note.content).toEqual("Message");
  });

  it("can shorten the content to 20 chars", function() {
      var note = new Note("12345678901234567890 this shouldn't show");
      expect(note.short()).toEqual("12345678901234567890...");
  });

  it("won't shorten if content is exactly 20 chars", function() {
      var note = new Note("12345678901234567890");
      expect(note.short()).toEqual("12345678901234567890");
  });
})
