# How it works

Creates a pattern where a single source of truth, the 'Application State' cascades state across your app in a predictable fashion. To modify state, a set flow of `actions` and `mutations` help create a traceable data-flow that makes things a little easier to debug.

Using a [Pub/Sub pattern](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern) which notifies anything that is subscribed to changes, a fully reactive front-end can be achieved with a few kilobytes of vanilla JavaScript.

![diagram](https://camo.githubusercontent.com/36a25df3a4bace8b606a2112048eb65ea302116b/68747470733a2f2f73332d75732d776573742d322e616d617a6f6e6177732e636f6d2f732e6364706e2e696f2f3137343138332f626565646c652d666c6f772d6469616772616d2e706e67)

A flow diagram that shows an action that calls a mutation, which mutates the state and triggers an update to anything that is listening

As the diagram above shows, a simple, predictable flow is created by pushing data into an action which subsequently calls one or more mutations. Only the mutation can modify state, which helps with keeping track of changes.