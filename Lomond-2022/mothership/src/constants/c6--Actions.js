function foo() { console.log('foo') }
function bar() { console.log('bar') }
function baz() { foo(); bar() }

export default {foo, bar, baz}