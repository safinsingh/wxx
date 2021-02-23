---
title: 'Using racing promises as a timeout'
date: '2021-02-04'
---

Here's a cool little snippet I came across on [LogRocket's Blog](https://blog.logrocket.com/when-to-use-never-and-unknown-in-typescript-5e4d6c5799ad/) the other day:

```typescript
// create a promise that resolves in `ms`
// milliseconds to use as a 'timeout'
function timeout(ms: number): Promise<never> {
	return new Promise((_, reject) => {
		setTimeout(() => reject(new Error('Timeout!')), ms)
	})
}

async function fetchPriceWithTimeout(
	tickerSymbol: string
): Promise<number> {
	// race the fetcher with some timeout promise.
	// this will ensure that fetchStock resolves in
	// less than 3000 milliseconds; otherwise, the
	// function will throw an Error
	const stock = await Promise.race([
		fetchStock(tickerSymbol),
		timeout(3000)
	])
	return stock.price
}
```

However, this snippet was specific to the scenario that the blog was describing; here's a more general form (using TypeScript's generics):

```typescript
// We use R extends unknown here as a workaround
// in order to inform the TypeScript compiler that
// this is a generic. This is required when the `jsx`
// option is set in your TSConfig in order to differentiate
// it from a tag.
const withTimeout = async <R extends unknown>(
	fn: () => R | PromiseLike<R>,
	timeout: number,
	message = 'Timeout!'
): Promise<R> => {
	return await Promise.race([
		Promise.resolve(fn()),
		new Promise((_, reject) => {
			setTimeout(() => reject(new Error(message)), timeout)
		}) as Promise<R>
	])
}
```

Using this abstraction, you can conveniently encapsulate timeout-sensitive functions like so:

```typescript
const timeSensitiveFn = async () => {
	// "Wait" for 4 seconds by pausing execution until
	// the Promise resolves.
	await new Promise((resolve) => setTimeout(resolve, 4000))
	return 'this will not be displayed!'
}

const mustTimeOut = async () => {
	// Although the Promise returned from timeSensitiveFn
	// will be resolved _at some point_, Promise.race()
	// will return only the first Promise to resolve.
	return withTimeout(timeSensitiveFn, 1000)
}

const wontTimeOut = async () => {
	return withTimeout(
		async () => 'this will not time out!',
		2000
	)
}

mustTimeOut().catch(console.error)
wontTimeOut().then(console.log)
```

Notice how we did not add the `await` keyword when we were returning from our asynchronous functions. This is because, as noted in the [ESLint documentation](https://eslint.org/docs/rules/no-return-await), doing so keeps the function returning the Promise on the call stack while it is waiting for the Promise to resolve. This results in an extra microtask (since the caller must await the promise returned by the asynchronous function itself as well).

Note: updated on 2/22/2021.
