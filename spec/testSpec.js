// console.log(test.Equals(returnTrue(),"HELLO"));
// console.log(test.NotEquals(returnTrue(),1,"THIS IS WHAT I WANT TO DISPLAY"));
// console.log(test.GreaterThan(greaterThan(), 6));
// console.log(test.Contains(array(),"bean"));

describe("Test suite 1", function() {

  it('returns HELLO', function(){
    return test.Equals(returnTrue(),"HELLO");
  });

  it('returns 1', function(){
    return test.Equals(returnTrue(),1);
  });

  it('array contains element bean', function(){
    return test.Contains(array(),"bean");
  });
});

describe("Test suite 2", function() {

  it('returns HELLO', function(){
    return test.Equals(returnTrue(),"HELLO");
  });

  it('returns 1', function(){
    return test.Equals(returnTrue(),1);
  });

  it('array contains element bean', function(){
    return test.Contains(array(),"bean");
  });

  it('checks website', function(){
    return test.HasContent("test.htm", "THE");
  });
});
