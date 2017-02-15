# furtherJS
### [Makers Academy] (http://www.makersacademy.com) - Week 7 Group Project

## Team Members
* [Matt Perry](https://github.com/thesedatedprince)
* [Rob Brentnall](https://github.com/treborb)
* [Adrian Eyre](https://github.com/adrianeyre)
* [James Turner](https://github.com/JamesTurnerGit)
* [Ben Carson](https://github.com/BenJohnCarson)
* [Joe Marriott](https://github.com/j-marriott)

## Index
* [Task] (#Task)
* [Technologies] (#Technologies)
* [Installation] (#Install)
* [User Stories] (#Stories)
* [Test Framework] (#Framework)
* [Screen Shots] (#Shots)
* [Live on Heroku] (#Heroku)

## <a name="Task">Task</a>
Single Page Notes App

This is a single-page notes app allowing users to create a note, and have it
appear in a list of notes created that session. Notes will not persist beyond the
user session.

## <a name="Technologies">Technologies</a>
* Javascript
* [Waffle] (https://waffle.io/treborb/notes-app)

## <a name="Stories">User Stories</a>
```

```

## <a name="Install">Installation</a>
To use the notes app, follow these instructions:

```
$ git clone this repo
$ open -a safari localhost:4567
```

### Note app screenshot
[![ScreenShot1](https://raw.githubusercontent.com/treborb/notes-app/master/images/screenshot1.png)](https://raw.githubusercontent.com/treborb/notes-app/master/images/screenshot1.png "Screen Shot 1")

## <a name="Framework">Testing Framework</a>
the repo includes a bespoke testing framework written from scratch.

### Installation
To install to any project
1. git clone this repo
2. copy `testFramework.js` into an app folder in your project
3. copy `test.html`

### usage

In order add additional tests to the app, please do the following:

1. Create a new test file in /spec, using JavaScript naming conventions.
2. Add this file to the head of ```test.html``` along with the file being tested.
3. Add your tests to your new spec file.
4. Open/refresh ```test.html``` in browser to see the outcome of these tests.

The testing framework follows these syntax conventions:

1. A describe block containing a description of the testing suite.
2. An it block describing the test to be run.

Example syntax of a simple describe/it block:
```js
describe("Test suite 1", function() {
  it('returns HELLO', function(){
    return assert.Equals(returnTrue(),true);
  });
});

```
### running tests
To see active tests, do the following:
* Open ```test.html```. This provides an output of all currently active and failing tests.

### matchers
The following matchers are present in this testing framework:

```
Equals: Returns true if argument A is equal to argument B.
NotEquals: Returns true argument A is not equal to argument B.
GreaterThan: Returns true if argument A is greater than argument B.
LessThan: Returns true if argument A is less than argument B.
Contains: Returns true if argument A contains argument B.
HasContent: Returns true if argument A has content from argument B.
```

### custom fail messages
You can add a custom fail message by replacing argument C in the test:

```js
describe("Test suite 1", function() {
  it('returns HELLO', function(){
    return assert.Equals(returnTrue(),"HELLO", ":(");
  });
});
```

This will now return ":(" on fail.

### Test framework output

[![ScreenShot2](https://raw.githubusercontent.com/treborb/notes-app/master/images/screenshot2.png)](https://raw.githubusercontent.com/treborb/notes-app/master/images/screenshot2.png "Screen Shot 2")
