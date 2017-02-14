# furtherJS
notes-app

Single Page Notes App

This is a single-page notes app allowing users to create a note, and have it
appear in a list of notes created that session. Notes will not persist beyond the
user session.

To use the notes app, follow these instructions:

1. git clone this repo, and open ```index.html```.

//include image of notes app here.

The software uses a bespoke testing framework. To see active tests, do the following:

1. Open ```test.html```. This provides an output of all currently active and failing tests.

In order add additional tests to the app, please do the following:

1. Create a new test file in /spec, using JavaScript naming conventions.
2. Add this file to the head of ```test.html```.
3. Add your tests to the newly created file.
4. Open/refresh ```test.html``` in browser to see the outcome of these tests.

The testing framework follows these syntax conventions:

1. A describe block containing a description of the testing suite.
2. An it block describing the test to be run.

Example syntax of a simple describe/it block:

```js
describe("Test suite 1", function() {
  it('returns HELLO', function(){
    return assert.Equals(returnTrue(),"HELLO");
  });
});
```

The following matchers are present in this testing framework:

```
Equals: Returns true if argument A is equal to argument B.
NotEquals: Returns true argument A is not equal to argument B.
GreaterThan: Returns true if argument A is greater than argument B.
LessThan: Returns true if argument A is less than argument B.
Contains: Returns true if argument A contains argument B.
HasContent: Returns true if argument A has content from argument B.
```

You can add a custom fail message by replacing argument C in the test:

```js
describe("Test suite 1", function() {
  it('returns HELLO', function(){
    return assert.Equals(returnTrue(),"HELLO", ":(");
  });
});
```

This will now return ":(" on fail.
