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
async function withTimeout<R>(
	fn: () => R,
	timeout: number,
	message = 'Timeout!'
): Promise<R> {
	// return `await`s the promise returned
	// by Promise.race(); no need to use it
	// explicitly here
	return Promise.race([
		fn(),
		new Promise((_, reject) => {
			setTimeout(() => reject(new Error(message)), timeout)
		})
	]) as Promise<R>
}
```

Using this abstraction, you can conveniently encapsulate timeout-sensitive functions like so:

```typescript
async function mustTimeOut() {
	await withTimeout(() => {
		return new Promise((resolve, _) => {
			setTimeout(
				() => resolve('will time out!'),
				4000
			)
		})
	}, 1000)
}

async function wontTimeOut() {
	await withTimeout(() => {
		console.log("this won't time out!")
	}, 2000)
}

mustTimeOut().catch(console.error)
wontTimeOut()
```
