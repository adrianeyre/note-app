describe("Test suite 1", function() {

  it('returns HELLO', function(){
    return assert.Equals(returnTrue(),"HELLO");
  });

  it('returns 1', function(){
    return assert.Equals(returnTrue(),1);
  });

  it('array contains element bean', function(){
    return assert.Contains(array(),"bean");
  });
});

describe("Test suite 2", function() {

  it('returns HELLO', function(){
    return assert.Equals(returnTrue(),"HELLO");
  });

  it('returns 1', function(){
    return assert.Equals(returnTrue(),1);
  });

  it('array contains element bean', function(){
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
