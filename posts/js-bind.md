---
title: "JavaScript's .bind()"
date: '2021-02-25'
---

Earlier this week, a friend of mine, [Rishi](https://rishi.cx/), asked me what `Function.prototype.bind` was. I wasn't really aware of what it did, but just that you had to use it in React classful components. Here's some of the main thoughts I gathered from MDN about `.bind()`:

According to MDN, it creates a brand new `Function` object 'wrapping' another function and setting `this` to the specified parameter. Any subsequent usage of `this` within the wrapped function is redirected to the new `this` specified in your wrapper. It's useful when you, say, destructure an object containing a function which references a property of the object. Adapted from MDN docs:

```javascript
const a = {
	b: 1,
	c: function () {
		return this.b
	}
}
// ...
const { c } = a
// ...
c()
// ^ attempts to reference `c` from globalThis
// instead do:
const d = c.bind(a)
d()
// ^ references `a` when calling `d`
```

You see it in React classful components because when you call a function, `this` is set to the `this` of the caller, so when you want to, for example, call `this.setState` in `render` for example, it will attempt to call `render.setState`. That's why, before you do anything, in your constructor, you must bind the method to the this of the class itself.
