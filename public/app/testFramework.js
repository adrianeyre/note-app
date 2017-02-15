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
    var response;

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
        var outputString = "expected " + actuals + " to contain " + desiredResult;
        output(actuals, desiredResult, actuals.includes(desiredResult), outputString);
    }

    function toHaveContent(desiredResult) {
        var webpage = actuals;
        loadPage(webpage);
        var outputString = "expected " + actuals + " to contain " + desiredResult;
        var result = setTimeout(checkContent, 100, desiredResult)
        setTimeout(function(){
            var result = checkContent(response, desiredResult);
            output(actuals, desiredResult, result, outputString)
        }, 200);
    }

    function loadPage(webpage) {
        var xhr= new XMLHttpRequest();
        xhr.open('GET', webpage, true);
        xhr.onreadystatechange= function() {
            if (this.readyState!==4) return;
            if (this.status!==200) return;
            response = this.responseText;
        };
        xhr.send();
    }

    function checkContent(pageContent, desiredResult) {
        return pageContent.includes(desiredResult);
    }

    function toHaveElement(desiredResult) {
        toHaveContent(desiredResult)
    }

    function output(actualValue, desiredResult, result, outputString) {
        var divClass = "";
        if(result === true) {
            pass++
        } else {
            divClass = "in";
            fail++;
        }
        var el = document.getElementById("tests");
        var elChild = document.createElement('div');
        elChild.innerHTML = myTitle[tests-1] + ": " + outputString;;
        el.appendChild(elChild);
        elChild.classList.add(divClass + "correct")
        document.getElementById('test-results').innerHTML = "Pass = " + pass + " Fail = " + fail;
    }

    function it(title, passFunction) {
        beforeEachCaller();
        tests++;
        myTitle.push(title);
        var result = passFunction();
    }

    function initiate() {
        document.write("<div id='test-results'>Pass = 0 Fail = 0</div>");
        document.write("<div id=tests></div>");
    }

    function describe(title, passFunction) {
        clearBefores();
        document.write("<b>" + title + "</b>");
        passFunction();
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
    assert.toHaveElement = toHaveElement;

    exports.beforeEach = beforeEach;
    exports.beforeEachCaller = beforeEachCaller;
    exports.clearBefores = clearBefores;

    exports.it = it;
    exports.describe = describe;

})(this);
