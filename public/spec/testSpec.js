describe("Test suite 1", function() {

  beforeEach(function(){
    var one = new Note("Hello");
    console.log(one);
  });

  it('Equal', function(){
    expect(returnTrue()).toEqual("HELLO");
  });

  it('Not equal', function(){
    expect(returnTrue()).toNotEqual("BYE");
  });

  it('Greater than', function(){
    expect(2).toBeGreaterThan(1);
  });

  it('Less than', function(){
    expect(1).toBeLessThan(2);
  });

  it('Contain', function(){
    expect("Yes").toContain("e");
  });

  it('Has content', function(){
    expect("index.html").toHaveContent("He");
  });

  it('Has element', function(){
    expect("index.html").toHaveElement("new-note-content");
  });

});

describe("Test suite 2", function() {

  // beforeEach(function(){
  //   var one = new Note("Goodbye");
  //   console.log(one);
  // });
  //
  //
  // it('returns HELLO', function(){
  //   console.log(4);
  //   return assert.Equals(returnTrue(),"HELLO");
  //
  // });
  //
  // it('returns 1', function(){
  //   console.log(5);
  //   return assert.Equals(returnTrue(),1);
  //
  // });
  //
  // it('array contains element bean', function(){
  //     console.log(6);
  //   return assert.Contains(array(),"bean");
  //
  // });
  //
  // it('checks website', function(){
  //   return assert.HasContent("test.html", "YES");
  // });
  //
  // it('checks website', function(){
  //   return assert.HasContent("test.html", "NO");
  // });
  //
  // it('checks website', function(){
  //   return assert.HasContent("test.html", "THE");
  // });
  //
  // it('clicks button', function(){
  //   return assert.HasElement("test.html", "BUTTON", "NO!!");
  // });
  //
  // it('clicks button', function(){
  //   return assert.HasElement("test.html", "submit", "NO!!");
  // });
});
