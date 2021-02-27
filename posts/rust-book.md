---
title: 'Thoughts on the Rust Book'
date: '2021-02-27'
---

I've just finished reading the [Rust Book](https://doc.rust-lang.org/book/title-page.html). Here are some of the things I felt I should probably write down for future use:

- `Rc<T>` is a reference counted smart pointer that increments its count once it is cloned (use `Rc::clone(&T)`). It's useful for allowing the sharing of ownership. It's usually used with `RefCell<T>`, which allows for inner mutability of the owned value like so: `Rc<RefCell<T>>`.
- `Arc<T>` is a thread-safe version of `Rc<T>` that increments and decrements the reference count atomically, ensuring that it is not subject to data races. It's used with `Mutex<T>` (which implements inner mutability) to allow for safe shared multiple-ownership state across threads like so: `Arc<Mutex<T>>`
- The `Send` marker trait means that `T` can be safely transferred across threads.
- The `Sync` marker trait means that `T` can be safely referenced across threads.
- `Rc<T>` implements neither `Send` nor `Sync`, which is why `Arc<T>` exists.
- `mpsc::channel` is useful for implementing message sending from multiple producers to a single master thread.

Note: I only included these certain notes since they took me a bit longer to understand than the others. From here, I'll be reading the [Async Book](https://rust-lang.github.io/async-book/) and posting my thoughts shortly.
