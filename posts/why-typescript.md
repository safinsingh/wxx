---
title: 'Why TypeScript? (A gentle introduction)'
date: '2021-02-05'
---

Some **awesome** things about TypeScript:

1. The biggest advantage (yet pain point) of JavaScript is that is dynamically typed. In JavaScript apps, you have absolutely no idea what properties, say, an object passed as a parameter may have, so you end up running in to runtime errors that take forever to debug because you have to trace your code all the way back to where you called it and just stare at it until you come up with an answer. TypeScript uses something called static typing to guarantee that everything you pass around has the correct types and properties and whatnot at compile time (Note: TypeScript gets compiled to JavaScript), so failing code won't even build!
2. Obviously, knowing what properties a variable or parameter may have increases the convenience of your IDE exponentially and therefore your productivity exponentially. You can autocomplete properties and use linters or other plugins to make writing TypeScript even easier and faster.
3. Refactoring or making seemingly large or breaking changes within a TypeScript codebase is much easier than one written primarily in JavaScript due to the fact that, again, you know exactly what's being passed around _before_ your code even runs. Honestly, refactoring a large JavaScript project would probably be a nightmare and I would never (in the right mind) attempt it.
4. A lot of other programming languages embrace static typing due to the fact that they must know certain types at compile-time to function safely and properly. Even basic knowledge of TypeScript (and types in general) can be really helpful when working with stuff outside the scope of JavaScript.

Some things that people **don't really like** about TypeScript:

1. It may increase the time needed to develop applications due to the fact that you (in some cases) must create your own interfaces or types in order to satisfy checks that occur at compile time.
2. It might be hard to get new contributors to your project; especially those new to JavaScript. TypeScript is an extension on top of JavaScript and obviously takes time to learn and understand.
3. It requires that extra compilation step from TypeScript to JavaScript. This can sometimes be confusing for beginners to set up and could feel discouraging.

**Addressing** those points:

1. I generally disagree with this. While you do sometimes have to create your own types in some cases, you 1: gain the additional benefit of having a smarter IDE (w/ autocompletion, warnings, etc) and 2: you're learning a lot in the process!
2. I generally disagree with this as well. TypeScript is not only becoming increasingly popular, but also an industry standard in the realm of NodeJS apps and libraries. Most newcomers will have heard of it already and are at least thinking about learning it. Plus, the best way to learn is to try it out!
3. While the fact that it does require an extra compilation step is true, it's really not that difficult to set up for new projects once you've done it at least once; not to mention the general availability of tutorials, docs, and pre-made setups for TypeScript that already exist.

A **visual** comparison:

Take the following JavaScript, for example:

```javascript
const someNumber = 1
const someObject = {
	a: {
		nested: {
			property: 1
		}
	}
}

function onObject(obj) {
	console.log(obj.a.nested.property)
}

console.log("we're in the middle of some action!")

// ...

onObject(someNumber)
```

Now, obviously, we see that we're passing the number to the function rather than the object itself. Now, if we attempt to run this:

```text
$ node test.js
we're in the middle of some action!
/home/safin/test.js:11
  console.log(obj.a.nested.property)
                    ^

TypeError: Cannot read property 'nested' of undefined
    // ... omitted (stack trace)
```

Oh no! Our code exited prematurely in the middle of "some action"! This is because the error occurred at _runtime_, and because JavaScript is an _interpreted_ language, it exited in the middle of our script. Now, let's write the same thing in TypeScript and attempt to compile it:

```typescript
const someNumber = 1
const someObject = {
	a: {
		nested: {
			property: 1
		}
	}
}

// Added the: typeof someObject!
function onObject(obj: typeof someObject) {
	console.log(obj.a.nested.property)
}

console.log("we're in the middle of some action!")

// ...

onObject(someNumber)
```

Looks the same, right? Almost! All we had to do was add a type annotation for the parameter of the function. The rest of the types were "inferred," or intelligently guessed from the TypeScript compiler. Now, let's attempt to compile this code:

```text
$ tsc index.ts
// ... omitted
Argument of type 'number' is not assignable to parameter of type '{ a: { nested: { property: number; }; }; }'.
```

We can see that our program didn't even execute! This is because the inferred type of our variable did not match the signature of the parameter. Obviously, this is a huge improvement over having the program run and crash mid-way.

Let's correct the code so we can conclude on a satisfying note:

```typescript
const someNumber = 1
const someObject = {
	a: {
		nested: {
			property: 1
		}
	}
}

// Added the: typeof someObject!
function onObject(obj: typeof someObject) {
	console.log(obj.a.nested.property)
}

console.log("we're in the middle of some action!")

// ...

onObject(someObject)
```

And then:

```text
# or ts-node, etc
$ tsc index.ts
$ node index.js
we're in the middle of some action!
```

Okay you're sold; what are you waiting for? Check out the official TypeScript website right [here](https://www.typescriptlang.org/) and get started!
