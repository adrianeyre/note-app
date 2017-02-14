
(function(exports){


  function Equals(passFunction, result, answer="expected " + passFunction + " to equal " + result) {
    if (passFunction===result){return true;}else{return answer;}
  };

  function NotEquals(passFunction, result, answer="expected " + passFunction + " not to equal " + result) {
    if (passFunction!==result){return true;}else{return answer;}
  };

  function GreaterThan(passFunction, result, answer="expected " + passFunction + " to be greater than " + result) {
    if (passFunction > result){return true;}else{return answer;}
  };

  function LessThan(passFunction, result, answer="expected " + passFunction + " to be less than " + result) {
    if (passFunction < result){return true;}else{return answer;}
  };

  function Contains(passFunction, result, answer="expected " + passFunction + " to contain " + result) {
    if (passFunction.includes(result)){return true;}else{return answer;}
  };

  function HasContent (website, result, answer="WRONG"){
    document.write("<iframe id='iframe01' height='100' width='100' src='src/test.htm'>");
    var content = document.getElementById('iframe01').contentDocument.body;
    document.write("</iframe>");
    if (content.matches("THE")){return true;}else{return answer;}
  };

  function output (title, result) {
    var css = "";
    if (result!==true){css="in"; fail++;}else{pass++;}
    var output = "<div id='"+css+"correct'>&nbsp&nbsp&nbsp&nbsp"+title+": "+result+"</div>";
    return output;
  };

  function it(title, passFunction){
    var result = passFunction();
    document.write(output(title, result));
  };

  function describe (title, passFunction) {
    console.log("not called")
    document.write("<b>"+title+"</b>");
    passFunction();
    displayResult();
  };

  function initiate(){
    document.write("<div id='testResults'>Pass = 0 Fail = 0</div>");
    var pass = 0;
    var fail = 0;
  }

  function displayResult(){
    document.write("<script>document.getElementById('testResults').innerHTML = 'Pass = "+ pass +" Fail = "+ fail +"'</script>");
  };
  initiate()

  exports.assert = {}
  exports.assert.Equals = Equals;
  exports.assert.NotEquals = NotEquals;
  exports.assert.GreaterThan = GreaterThan;
  exports.assert.LessThan = LessThan;
  exports.assert.Contains = Contains;
  exports.assert.HasContent = HasContent;

  exports.it = it
  exports.describe = describe

})(this)
