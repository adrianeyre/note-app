function test(){}

test.Equals = function(passFunction, result, answer="expected " + passFunction + " to equal " + result) {
  if (passFunction===result){return true}else{return answer};
};

test.NotEquals = function(passFunction, result, answer="expected " + passFunction + " not to equal " + result) {
  if (passFunction!==result){return true}else{return answer};
};

test.HasContent = function(webpage, result, answer="FALSE") {

};

console.log(document.URL)
console.log(document.body)
