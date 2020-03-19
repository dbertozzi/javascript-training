# SVELTE Tutorial Notes

## binding

- can bind variables with bind:clientWidth={varName1} bind:clientHeight={varName2}
- can bind any DOM element's or component's "this" keyword with bind:this={varName}
  - references to component's "this" must be made in onMount or it will be undefined
  - can bind values of props

## Lifecycle methods

- pass these functions a callback
- should be called during initialization to be bound to component
- can be called in helper function and in component called from (dynamic scope?)
- onMount runs after component has been mounted
  - should run fetch methods here (lazy loading) to run after component has been initially rendered
  - if returns a function it will run when component is destroyed
- onDestroy runs when component is destroyed
  - could clear a setInterval() by passing it's reference to clearInterval()
- beforeUpdate and afterUpdate runs before and after component renders respectively
- tick can be called anytime and returns a promise that resolves as soon as any renders are complete
  - example rehighlighted text after it rerendered that would normally have run before rerender

## Stores

- creates shared state variables
- has method subscribe
- \$ character is reserved for stores
  - prefixing store name with \$ autosubscribes and does not need to be unsubscribed
- need to unsubscribe when component is destroyed to prevent memory leak

### writeable

- writeable has additional methods set, update

### readable

- readable(initialValue, function start(setCallback) => {return stopCallback})

### motion

#### tweened

- gives smooth transition

#### spring

- gives smooth transition

### transition

- `transition:fade`
  - fades smoothly in or out
- `transition:fly={{y: 200, duration: 2000}}`
  - slides in or out of position in direction specified
- can specify `in:` or `out:` instead of `transition:`
- `on:` events available for transitions
  - `on:introstart`, `on:introend`, `on:outrostart`, `on:outroend`

### animation

- flip is a cool animation that switch objects smoothly between two positions

### actions
