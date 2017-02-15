(function(exports) {
    var pass = 0;
    var fail = 0;
    var tests = 0;
    var myResult = [];
    var myTest = [];
    var myTitle = [];
    var itFunctions = [];
    var befores = {};
    var assert = {};
    var actuals;

    function expect(actual) {
        actuals = actual;
        return assert;
    }

    function toEqual(desiredResult) {
        var outputString = "expected " + actuals + " to be equal to " + desiredResult
        output(actuals, desiredResult, actuals === desiredResult, outputString);
    }

    function toNotEqual(desiredResult) {
        var outputString = "expected " + actuals + " not to be equal to " + desiredResult;
        output(actuals, desiredResult, actuals !== desiredResult, outputString);
    }

    function toBeGreaterThan(desiredResult) {
        var outputString = "expected " + actuals + " to be greater than " + desiredResult;
        output(actuals, desiredResult, actuals > desiredResult, outputString);
    }

    function toBeLessThan(desiredResult) {
        var outputString = "expected " + actuals + " to be less than " + desiredResult;
        output(actuals, desiredResult, actuals < desiredResult, outputString);
    }

    function toContain(desiredResult) {
        var outputString = "expected " + actuals + " to be contain " + desiredResult;
        output(actuals, desiredResult, actuals.includes(desiredResult), outputString);
    }

    function createFrame(website) {
        // document.write("<div id='test" + tests + "'>Waiting Results!" + (tests) + "</div>");
        // var iframe = "<iframe id='iframe" + tests + "' height='0' width='0' src=" + website + "></iframe>"
        // console.log(document.getElementById('frame'));
        // document.getElementById('frame').innerHTML = iframe
        console.log(tests);
        document.write("<iframe id=iframe" + tests + " height=0 width=0 src=" + website + "></iframe>");
    }
    //
    // function toHaveContent(website, result, answer = "expected website to contain: " + result) {
    function toHaveContent(desiredResult) {
        var webpage = actuals
        var outputString = "expected " + actuals + " to contain " + desiredResult;
        createFrame(webpage);
        // myTest.push(tests);
        document.getElementById('iframe' + tests).onload = function() {
            // var target = targeter.currentTarget;
            var elem = document.getElementById('iframe' + tests);
            var content = elem.contentWindow.document.body.innerHTML;
            // var content = target.contentWindow.document.body.innerHTML;
            if (content.includes(desiredResult)) {
                myResult.push(true);
            } else {
                myResult.push(answer);
            }
            document.getElementById('iframe' + tests).innerHTML = "";

            // setTimeout(output(actuals, desiredResult, content.includes(desiredResult), outputString), 1000);
            // return;
        };
        // setTimeout(delayedAnswer, 500, tests);
        setTimeout(output(actuals, desiredResult, myResult.pop(), outputString), 2000)
        // output(webpage, desiredResult, myResult.pop(), outputString);
        // output(webpage, desiredResult, content.includes(desiredResult), outputString);
    }

    function HasElement(website, element, answer = "expected click on button: " + element) {
        createFrame(website);
        myTest.push(tests);
        document.getElementById('iframe' + tests).onload = function(targeter) {
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

    function output(actualValue, desiredResult, result, outputString) {
        var divClass = "";
        result ? pass++ : divClass = "in";
        fail++;
        var output = "<div class=" + divClass + "correct>" + myTitle[tests-1] + ": " + outputString + "</div>";
        document.write(output);
        // document.getElementById("test-results").innerHTML = output;
        // return output;
    }


    // function output (title, result) {
    //   var css = "";
    //   if (result!==true){css="in"; fail++;}else{pass++;}
    //   var output = "<div id='"+css+"correct'>&nbsp&nbsp&nbsp&nbsp"+title+": "+result+"</div>";
    //   return output;
    // }

    function it(title, passFunction) {
        beforeEachCaller();
        tests++;
        myTitle.push(title);
        var result = passFunction();
        // if (typeof(result) === 'undefined') {
        //     myTitle.push(title);
        //     setTimeout(delayedAnswer, 500, tests);
        // }
        // else {
        //   document.write(output(title, result));
        // }
    }

    function initiate() {
        document.write("<div id='testResults'>Pass = 0 Fail = 0</div>");
    }

    function delayedAnswer(number) {
        var i = myTest.indexOf(number);
        document.getElementById("test" + myTest[i]).innerHTML = output(myTitle[i], myResult[i]);
        document.getElementById('testResults').innerHTML = "Pass = " + pass + " Fail = " + fail;
    }

    function describe(title, passFunction) {
        clearBefores();
        document.write("<b>" + title + "</b>");
        passFunction();
        displayResult();
    }

    function displayResult() {
        document.write("<script>document.getElementById('testResults').innerHTML = 'Pass = " + pass + " Fail = " + fail + "'</script>");
    }

    function beforeEach(beforeEachFunction) {
        befores = beforeEachFunction;
    }

    function beforeEachCaller() {
        if (typeof(befores) === "function") {
            return befores();
        }
    }

    function clearBefores() {
        befores = {};
    }

    initiate();

    exports.expect = expect;

    assert.toEqual = toEqual;
    assert.toNotEqual = toNotEqual;
    assert.toBeGreaterThan = toBeGreaterThan;
    assert.toBeLessThan = toBeLessThan;
    assert.toContain = toContain;
    assert.toHaveContent = toHaveContent;

    exports.beforeEach = beforeEach;
    exports.beforeEachCaller = beforeEachCaller;
    exports.clearBefores = clearBefores;

    exports.it = it;
    exports.describe = describe;

})(this);
