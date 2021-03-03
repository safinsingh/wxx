---
title: '(Initial) thoughts on the Rust Async Book'
date: '2021-03-02'
---

The Rust [Async Book](https://rust-lang.github.io/async-book/) was definitely a lot more to take in than the original book. There was definitely a lot less hand-holding and topics were introduced at a faster pace. Consequently, I had to read it twice before I even understood what was going on. Here are my inital thoughts on the topics it covered:

The core of async is the Future trait. An `async fn` gets desugared like so:

```rust
async fn test() {
	println!("hello from some async fn!")
}

// becomes

fn test() -> impl Future<Output = ()> {
	// ...
}
```

`Future` is a trait defined in the standard library and looks like this:

```rust
pub trait Future {
	type Output;

	// Poll the current completion status. Poll itself is an `enum` that has
	// two states: ready and pending. The Pin surrounding self is to ensure
	// that `self` will stay pinned on the stack so as not to invalidate any
	// references to it from outside the future (which could cause UB).
	fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Self::Output>;
}
```

The `Future` is first polled immediately by the executor. If it is still pending, the executor will not call poll again until the `Future` has been awoken. Whenever the future _is_ ready, it will call `wake` (from `Context`) which will notify the reactor to tell the executor to re-poll the `Future` since it is ready for execution.

As for actual usage of `async`/`await`, some convenience functions/patterns to know are:

```rust
// the usage of join!() to execute multiple futures concurrently
let (r1, r2) = futures::join!(fut1, fut2).await;

// explicit type annotations for returning a Result<T, E> in an async block
async {
	// ...
	Ok::<(), E>(())
}
```

Obviously this isn't comprehensive and will be appended upon over time; these were just some things I had wanted to jot down.
