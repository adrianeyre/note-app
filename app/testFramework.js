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

test.HasContent = function(website, result, answer="WRONG"){
  document.write("<iframe id='iframe01' height='100' width='100' src='src/test.htm'>");
  var content = document.getElementById('iframe01').contentDocument.body;
  // var content = document.getElementById('iframe01').getElementsByTagName('body');
  // var arr = Object.keys(content).map(function (key) { return content[key]; });
  // console.log(content.contentDocument.body.innerHTML);
  // console.log(content.contentWindow.document.body.innerHTML);
  // console.log(document.getElementById('iframe01'))
  // console.log(content.contentDocument.getElementsByTagName('body'))
  // console.log(content.contentWindow.document.getElementsByTagName('body'))
  // console.log(content.contentDocument.outterHTML);
  document.write("</iframe>");
  // console.log(content.contentWindow.document.body);
  // document.onload()
  // document.addEventListener("DOMContentLoaded", function(){  console.log("TEST") }); // Handler when the DOM is fully loaded });
  // console.log(content);
  if (content.matches("THE")){return true;}else{return answer;}
};

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
