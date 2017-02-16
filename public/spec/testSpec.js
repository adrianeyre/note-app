describe("Test suite 1", function() {

  beforeEach(function(){
    var one = new Note("Hello");
  });

  it('Equal', function(){
    expect("HELLO").toEqual("HELLO");
  });

  it('Not equal', function(){
    expect("HELLO").toNotEqual("BYE");
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

});

describe("Test suite 2", function() {

  beforeEach(function(){
    var one = new Note("Goodbye");
  });

  it('Equal', function(){
    expect(returnTrue()).toEqual("HELLO");
  });

  it('array contains element bean', function(){
    expect(array()).toContain("bean");
  });

});
