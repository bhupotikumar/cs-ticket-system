## CS - Ticket System

1. What is JSX, and why is it used?
```bash
JSX (JavaScript XML) is a syntax used in React that allows developers to write HTML-like code inside JavaScript.
We use it. Because It makes UI code easier, more readable and Powerful Dynamic Rendering.
JSX helps create reusable components also.
```

2. What is the difference between State and Props?
```bash
 Props are read-only data passed from a parent component to a child component, while State is mutable data managed within a component that controls its behavior and rendering.
```

3. What is the useState hook, and how does it work?
```bash
useState is a React Hook that allows functional components to create and manage state. It returns a state variable and a function to update that state. When the state changes, React automatically re-renders the component.
```

4. How can you share state between components in React?
```bash
The most common way is lifting state up to a parent component, then passing it down as props
Siblings cannot directly share state.
```

5. How is event handling done in React?
```bash
In React, event handling is done by passing function references to camelCase props like onClick, onChange, etc. Event handlers can access the synthetic event object, and React automatically re-renders the component when state changes inside the handler.
Such as onClick={handleClick} binds the button click to the handleClick function.
```

