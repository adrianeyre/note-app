
(function(exports){
  var pass = 0;
  var fail = 0;
  var tests = 0;
  var myResult = [];
  var myTest = [];
  var myTitle = [];

  function Equals(passFunction, result, answer="expected " + passFunction + " to equal " + result) {
    if (passFunction===result){return true;}else{return answer;}
  }

  function NotEquals(passFunction, result, answer="expected " + passFunction + " not to equal " + result) {
    if (passFunction!==result){return true;}else{return answer;}
  }

  function GreaterThan(passFunction, result, answer="expected " + passFunction + " to be greater than " + result) {
    if (passFunction > result){return true;}else{return answer;}
  }

  function LessThan(passFunction, result, answer="expected " + passFunction + " to be less than " + result) {
    if (passFunction < result){return true;}else{return answer;}
  }

  function Contains(passFunction, result, answer="expected " + passFunction + " to contain " + result) {
    if (passFunction.includes(result)){return true;}else{return answer;}
  }

  function createFrame(website){
    document.write("<div id='test"+tests+"'>&nbsp&nbsp&nbsp&nbspWaiting Results!"+(tests)+"</div>");
    document.write("<iframe id='iframe"+tests+"' height='0' width='0' src=spec/" + website + "></iframe>");
  }

  function HasContent(website, result, answer = "expected website to contain: "+result) {
    createFrame(website);
    myTest.push(tests);
    document.getElementById('iframe'+tests).onload = function(targeter) {
      var target = targeter.currentTarget;
      var content = target.contentWindow.document.body.innerHTML;
      if (content.includes(result)) {myResult.push(true);} else {myResult.push(answer);}
      return;
    };
  }

  function HasElement(website, element, answer = "expected click on button: "+element){
    createFrame(website);
    myTest.push(tests);
    document.getElementById('iframe'+tests).onload = function(targeter){
      var target = targeter.currentTarget;
      var elementCheck = target.contentWindow.document.getElementById(element);
      if (elementCheck !== null) {
        myResult.push(true);
      } else {
        myResult.push(answer);
      }
      return;
    };
  }

  function output (title, result) {
    var css = "";
    if (result!==true){css="in"; fail++;}else{pass++;}
    var output = "<div id='"+css+"correct'>&nbsp&nbsp&nbsp&nbsp"+title+": "+result+"</div>";
    return output;
  }

  function it(title, passFunction){
    tests++;
    var result = passFunction();
    if (typeof(result) === 'undefined') {
      myTitle.push(title);
      setTimeout(delayedAnswer, 500,tests);
    } else {
      document.write(output(title, result));
    }
  }

  function initiate(){
    document.write("<div id='testResults'>Pass = 0 Fail = 0</div>");
  }

  function delayedAnswer(number){
    var i = myTest.indexOf(number);
    document.getElementById("test"+myTest[i]).innerHTML = output(myTitle[i], myResult[i]);
    document.getElementById('testResults').innerHTML = "Pass = " + pass + " Fail = " + fail;
  }

  function describe (title, passFunction) {
    document.write("<b>"+title+"</b>");
    passFunction();
    displayResult();
  }

  function displayResult(){
    document.write("<script>document.getElementById('testResults').innerHTML = 'Pass = "+ pass +" Fail = "+ fail +"'</script>");
  }

  initiate();

  exports.assert = {};
  exports.assert.Equals = Equals;
  exports.assert.NotEquals = NotEquals;
  exports.assert.GreaterThan = GreaterThan;
  exports.assert.LessThan = LessThan;
  exports.assert.Contains = Contains;
  exports.assert.HasContent = HasContent;
  exports.assert.HasElement = HasElement;


  exports.it = it;
  exports.describe = describe;

})(this);
