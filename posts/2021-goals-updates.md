---
title: "Goals & updates for 2021"
date: "2021-02-21"
---

## Stuff I learnt building [hermes](https://github.com/safinsingh/hermes)

- GraphQL is pretty cool; subscriptions and authentication were fairly easy to implement.
  - `urql` made subscriptions really annoying on the frontend since it thought that the subscription was still loading once the connection had been established but no event had been recieved. Probably have to use a union to address this and send an acknowledgement message once the connection has been established.
  - To be honest, I felt that there was a bit too much boilerplate. I could've done with a REST API if not for subscriptions.
- `prisma` is an awesome ORM! It takes care of a lot of abstractions for me and is extremely ergonomic. Highly reccomend it; will definitely be my go-to from now on.
- `@chakra-ui` has improved so much as of v1.0! It took care of a lot of the heavy lifting style-wise, something I couldn't really care less about with this project, and it still turned out pretty well.

## Goals for the rest of the year

Things I want to learn:

- Rust
- Docker
- Kubernetes
- Ansible
- Terraform
- Node internals
- Kafka
- GraphQL\*

> \* = I've got a good grasp on it as of the date on which this was written

Things I don't want to learn:

- OS Dev (tried it, wasn't ready, felt burnt out)
- Programming Language development (tried it, lost interest quickly)
- Haskell

Fun things to try out:

- Nim
- eBPF
