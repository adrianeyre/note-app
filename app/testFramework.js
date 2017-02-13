function test(){}

test.Equals = function(passFunction, result, answer="expected " + passFunction + " to equal " + result) {
  if (passFunction===result){return true}else{return answer}
};

test.NotEquals = function(passFunction, result, answer="expected " + passFunction + " not to equal " + result) {
  if (passFunction!==result){return true}else{return answer}
};

test.GreaterThan = function(passFunction, result, answer="expected " + passFunction + " to be greater than " + result) {
  if (passFunction > result){return true}else{return answer}
};

test.LessThan = function(passFunction, result, answer="expected " + passFunction + " to be less than " + result) {
  if (passFunction < result){return true}else{return answer}
};

test.Contains = function(passFunction, result, answer="expected " + passFunction + " to contain " + result) {
  if (passFunction.includes(result)){return true}else{return answer}
};
