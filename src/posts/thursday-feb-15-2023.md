# React.js is Broken

It is unclear to most how React.js became the de-facto standard for web development. How did a poorly written Javascript library with a starting bundle size of `130KB` became an acceptable method for web development?

At this point you may be subconsciously thinking I'm a hypocrite since you may have deduced I'm using React.js through psychic abilities. Or you took a glance through my `package.json` and saw the mark of death in the dependencies list, `react`. However, I'm using Preact which is a 3KB alternative to React, since why not?

However, my biggest gripe with React isn't even it's inherent inefficiencies but it's proclivity to drive the programmer to make poor choices. It's **too** easy to make mistakes in React that carry dramatic consequences.

## Exhibit A: `useEffect()`

To demonstrate the issue with this hook, consider the following:

```js
const App = () => {
  const [state, setState] = useState('')

  useEffect(() => {
    setState('hello world')
  })

  return <div>{state}</div>
}
```

Take a second to digest the code snippet. Whats wrong with it?

A beginner may conclude there is nothing wrong. However, this code actually suffers to **infinite recursion**!

By omitting the dependency array you have told React to run the side-effect (useEffect callback) after each render. Ok...? So whats the problem? Well, `setState` also causes a render.

So you have told React to re-render after each re-render??? Ok...? So when do we stop re-rendering? Well, once we stop calling `setState`, but it is always called. Hence, we end up with our program crashing due to infinite recursion.

Essentially, the sequence goes like this:

DOM Renders -> UsEffect Runs -> Set State Triggers Re-Render -> DOM Renders -> UseEffect Runs -> Set State Triggers Re-Render -> ...
