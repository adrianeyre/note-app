describe("Test suite 1", function() {

  beforeEach(function(){
    var one = new Note("Hello");
    console.log(one);
  });

  it('returns HELLO', function(){
    console.log(1);
    return assert.Equals(returnTrue(),"HELLO");

  });

  it('returns 1', function(){
    console.log(2);
    return assert.Equals(returnTrue(),1);

  });

  it('array contains element bean', function(){
    console.log(3);
    return assert.Contains(array(),"bean");

  });
});

describe("Test suite 2", function() {

  beforeEach(function(){
    var one = new Note("Goodbye");
    console.log(one);
  });


  it('returns HELLO', function(){
    console.log(4);
    return assert.Equals(returnTrue(),"HELLO");

  });

  it('returns 1', function(){
    console.log(5);
    return assert.Equals(returnTrue(),1);

  });

  it('array contains element bean', function(){
      console.log(6);
    return assert.Contains(array(),"bean");

  });

  it('checks website', function(){
    return assert.HasContent("test.html", "YES");
  });

  it('checks website', function(){
    return assert.HasContent("test.html", "NO");
  });

  it('checks website', function(){
    return assert.HasContent("test.html", "THE");
  });

  it('clicks button', function(){
    return assert.HasElement("test.html", "BUTTON", "NO!!");
  });

  it('clicks button', function(){
    return assert.HasElement("test.html", "submit", "NO!!");
  });
});
