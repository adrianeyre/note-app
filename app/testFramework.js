function test(){}

test.Equals = function(passFunction, result, answer="expected " + passFunction + " to equal " + result) {
  if (passFunction===result){return true;}else{return answer;}
};

test.NotEquals = function(passFunction, result, answer="expected " + passFunction + " not to equal " + result) {
  if (passFunction!==result){return true;}else{return answer;}
};

test.GreaterThan = function(passFunction, result, answer="expected " + passFunction + " to be greater than " + result) {
  if (passFunction > result){return true;}else{return answer;}
};

test.LessThan = function(passFunction, result, answer="expected " + passFunction + " to be less than " + result) {
  if (passFunction < result){return true;}else{return answer;}
};

test.Contains = function(passFunction, result, answer="expected " + passFunction + " to contain " + result) {
  if (passFunction.includes(result)){return true;}else{return answer;}
};

test.HasContent = function(website, result){
  // document.write("<frameset>")
  // document.write("<frame id='iframe01' src='src/test.htm'>")
  document.write("<iframe id='iframe01' height='0' width='0' src='src/test.htm'></iframe>")
  // console.log(document.getElementById('iframe01'))
  // var content = document.getElementById('iframe01')
  var content = document.getElementById('iframe01')
  // document.write("</frameset>")
  // console.log(content)
  // content = String(content)
  console.log(content)
  // document.write("IM HERE")
  if (content === (result)){return true}else{return "WRONG"}
}

test.output = function(title, result) {
  var css = "";
  if (result!==true){css="in"; counter.fail++;}else{counter.pass++;}
  var output = "<div id='"+css+"correct'>&nbsp&nbsp&nbsp&nbsp"+title+": "+result+"</div>";
  return output;
};

this.it = function(title, passFunction){
  var result = passFunction();
  document.write(test.output(title, result));
};

this.describe = function(title, passFunction) {
  counter = (typeof counter != 'undefined') ? counter : new Counter();
  document.write("<b>"+title+"</b>");
  passFunction();
  this.displayResult();
};

this.displayResult = function(){
  document.write("<script>document.getElementById('testResults').innerHTML = 'Pass = "+counter.pass+" Fail = "+counter.fail+"'</script>");
};

function Counter() {
  document.write("<div id='testResults'>Pass = 0 Fail = 0</div>");
  this.pass = 0;
  this.fail = 0;
}

// document.write("<frameset>")
// document.write("<iframe id='iframe01' height='0' width='0' src='src/test.htm'></iframe>")
// console.log(document.getElementById('iframe01'))
// var content = document.getElementById('iframe01')
// document.write("</frameset>")
// document.write(content)
// document.write("IM HERE")
