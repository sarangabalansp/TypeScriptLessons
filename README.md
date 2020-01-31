# TypeScriptLessons
ReactNative + TypeScript project




Typescript Notes

* Type assertions are a way to tell the compiler “trust me, I know what I’m doing.” A type assertion is like a type cast in other languages, but performs no special checking or restructuring of data.
* Void, Null, Undefiend, Never


* Variable Declare (Var, let, const):
* var - Var-scoping / Funcitonal scoping.  (It will cause issue when the same variable declared inside the inner loop.)

* let - lexical scoping / block scoping

* const - Same as let, but its values cannot be changed.


* Destructuring:
* Below example is how to restructure remaining variables as a  single object
* let [first, ...rest] = [1, 2, 3, 4];
* 
* Below example is how to take only 2nd and 4th elements only (by just giving comma - (,) )
* let [, second, , fourth] = [1, 2, 3, 4];
* 
* Destructing with default values:
* let { a, b = 1001 } = wholeObject; 
* If ‘wholeObject’ contains b value, it will replace ‘1001’, otherwise b takes default value ‘1001’


* Spread operator (…object):
* let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];
//Output of ‘bothPlus’ will be [0, 1, 2 , 3, 4, 5 ]


* Array :
* declare a array as:
* Array<Type>
* Type[]
* [Type]

* Declare array with different data types:
*  Array<string | number> 

* Tuple VS MultiType-Array:
* Both can store different type of items.  
* Tuples is fixed in count, whereas we can store any number of items with Multi-type array.

* any[ ] : 
* We can use this if we need mixed data types for an array.





