function test(){
}

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

test.output = function(title, result) {
  var css = "";
  if (result!==true){css="in"; counter.fail++}else{counter.pass++}
  var output = "<div id='"+css+"correct'>&nbsp&nbsp&nbsp&nbsp"+title+": "+result+"</div>";
  return output;
};

this.it = function(title, passFunction){
  var result = passFunction();
  document.write(test.output(title, result));
};

this.describe = function(title, passFunction) {
  document.write(title);
  passFunction();
  document.write("<script>document.getElementById('p1').innerHTML = 'Pass = "+counter.pass+" Fail = "+counter.fail+"'</script>");
};

function Counter() {
  this.pass = 0;
  this.fail = 0;
}

var counter = new Counter();

document.write("<p id='p1'>Pass = 0 Fail = 0</p>");
