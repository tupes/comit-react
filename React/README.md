# ComIT React Course

## What is React?
- a JavaScript framework
- used for doing front-end web development
- created by Facebook engineers
- [hugely popular](https://insights.stackoverflow.com/survey/2020#technology-web-frameworks)
- [very well-liked by developers](https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-web-frameworks)


My goal is to spend roughly 3 weeks React, which would leave 3 weeks for any other material I think is important for a software developer to know. But this is only an estimated outline, we'll be going at whatever pace the class as a whole thinks is best, so that everyone understands the material as we go.

## Tools

### Browser Extensions
[React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

# Learning Materials
- Learning React
- Pure React
- Fullstack React

# Lessons
The lessons aren't broken down by class or any particular length of time. When I finish one lesson, I'll just move on to the next one, unless there isn't much time left in that class.

## Lesson: Introduction
### Readings
- Learning React Chapter 4: How React Works
- Pure React Chapter 1: Introduction
- Pure React Chapter 2: Hello World

### Page Setup
- In order to work with React in the browser, we need to include two libraries: React and ReactDOM.
- React is the library for creating views.
- ReactDOM is the library used to actually render the UI in the browser.

### React Elements
**What we've already learned in this course:**
- HTML is simply a set of instructions that a browser follows when constructing the DOM.
- The elements that make up an HTML document become DOM elements when the browser loads HTML and renders the user interface.
- In HTML, elements relate to one another in a hierarchy that resembles a family tree.
- The DOM API is a collection of objects that JavaScript can use to interact with the browser to modify the DOM. When we used
`document.createElement` and `document.appendChild` in our todo-list application, we were working with the DOM API.

**React**
- React is a library that’s designed to update the browser DOM for us.
- With React, we do not interact with the DOM API directly. Instead, we provide instructions for what we want React to build, and React will take care of rendering and reconciling the elements we’ve instructed it to create.
- The browser DOM is made up of DOM elements. Similarly, the React DOM is made up of React elements. DOM elements and React elements may look the same, but they’re actually quite different.
- A React element is a description of what the actual DOM element should look like. In other words, React elements are the instructions for how the browser DOM should be created.
- We can create a React element to represent an `h1` using `React.createElement`:  
`React.createElement("h1", { id: "recipe-0" }, "Baked Salmon");`
- The first argument defines the type of element we want to create. In this case, we want to create an `h1` element. The second argument represents the element’s properties. This `h1` currently has an `id` of "recipe-0". The third argument represents the element’s children: any nodes that are inserted between the opening and closing tag (in this case, just some text).
- During rendering, React will convert this element to an actual DOM element:  
`<h1 id="recipe-0">Baked Salmon</h1>`
- The properties are similarly applied to the new DOM element: the properties are added to the tag as attributes, and the child text is added as text within the element.
- A React element is just a JavaScript literal that tells React how to construct the DOM element.

### ReactDOM
- Once we’ve created a React element, we’ll want to see it in the browser. 
- We can render a React element, including its children, to the DOM with ReactDOM.render. The element we want to render is passed as the first argument, and the second argument is the target node, where we should render the element:  
```
const dish = React.createElement("h1", null, "Baked Salmon");
ReactDOM.render(dish, document.getElementById("root"));
```

### Constructing Elements with Data
- The major advantage of using React is its ability to separate data from UI elements.
- Since React is just JavaScript, we can add JavaScript logic to help us build the React component tree.
- For example, we can map over an array of ingredients and create a list item for each one:  
```
React.createElement(
  "ul",
  { className: "ingredients" },
  items.map(ingredient => React.createElement("li", null, ingredient))
);
```
- In this example, each string is displayed in the list item’s children as text, and the value for each ingredient is displayed as the list item.
- When we build a list of child elements by iterating through an array, React likes each of those elements to have a key property, which helps it update the DOM efficiently. To fix our example, make this change:  
`React.createElement("li", { key: i }, ingredient)`

### Components
**What we've already learned**
- No matter its size, its contents, or what technologies are used to create it, a user interface is made up of parts, like buttons, lists, and headings.
- All of these parts, when put together, make up a user interface.

**React**
- In React, we describe each of these parts as a "component".
- Components allow us to reuse the same structure, and then we can populate those structures with different sets of data.
- When considering a user interface you want to build with React, look for opportunities to break down your elements into reusable pieces.
- We’ll create a component by writing a function, which will return a reusable part of a user interface. For example, here's a component with a name of "IngredientsList":  
```
function IngredientsList() {
  return React.createElement(
    "ul",
    { className: "ingredients" },
    React.createElement("li", null, "1 cup unsalted butter"),
    React.createElement("li", null, "1 cup crunchy peanut butter"),
    React.createElement("li", null, "1 cup brown sugar"),
    React.createElement("li", null, "1 cup white sugar"),
    React.createElement("li", null, "2 eggs"),
    React.createElement("li", null, "2.5 cups all purpose flour"),
    React.createElement("li", null, "1 teaspoon baking powder")
  );
}
```
- This function outputs elements that look like this:  
```
<IngredientsList>
  <ul className="ingredients">
    <li>1 cup unsalted butter</li>
    <li>1 cup crunchy peanut butter</li>
    <li>1 cup brown sugar</li>
    <li>1 cup white sugar</li>
    <li>2 eggs</li>
    <li>2.5 cups all purpose flour</li>
    <li>1 teaspoon baking powder</li>
  </ul>
</IngredientsList>
```

---

## Lesson: JSX
### Readings
- Learning React Chapter 5: React with JSX
  - React Elements as JSX
  - Recipes as JSX
  - React Fragments
- Pure React Chapter 3: JSX
- Pure React Chapter 4: Working with JSX

### React Elements as JSX
- Using the `createElement` function is a good way to see how React works, but as React developers, that’s not what we do. 
- As we saw in the example above, using `createElement` results in complex, barely readable trees of JavaScript code. 
- In order to work efficiently with React, we need one more thing: JSX.
- JSX is a JavaScript extension that allows us to define React elements using a tag-based syntax directly within our JavaScript code.
- JSX is just another way of creating React elements, so you don’t have to pull your hair out looking for the missing comma in a complex `createElement` call.
- JSX was created to provide a concise syntax for creating complex DOM trees with attributes, and to make React more readable like HTML and XML.
- An element’s type is specified with a tag, and the tag’s attributes represent the properties.
- The element’s children can be added between the opening and closing tags.
- JSX allows you to add components as children of other components. For example:  
```
<IngredientsList>
  <Ingredient />
  <Ingredient />
  <Ingredient />
</IngredientsList>
```
- JavaScript expressions are wrapped in curly braces and indicate where variables will be evaluated and their resulting values returned. In this example, the `title` variable will be evaluated and its value returned:  
`<h1>{title}</h1>`
- The JavaScript that’s added in between the curly braces will get evaluated, which means that operations such as concatenation or addition will occur, and functions will be invoked:  
```
<h1>{"Hello" + title}</h1>
<h1>{title.toLowerCase().replace}</h1>
```
- JSX is JavaScript, so you can incorporate JSX directly inside of JavaScript functions. For example, you can map an array to JSX
elements:  
```
<ul>
  {props.ingredients.map((ingredient, i) => (
    <li key="{i}">{ingredient}</li>
  ))}
</ul>
```
- JSX can’t be interpreted by a browser, so all JSX must be converted into `createElement` calls by a tool named "Babel", which is handled for us by React.

--- 

## Lesson: Props
### Readings
- Pure React Chapter 6: Props
- Pure React Chapter 7: Example: Tweet With Props

### Example Applications
- [Tweet Component](tweets)
- [Git File List](git-file-list)

### Props
- Where HTML elements have “attributes,” React components have “props” (short for “properties”). It’s a different name for essentially the same thing.
- For example, let's say you have this function:  
```
function greet() {
  return "Hi Dave";
}
```
- If you wanted this function to be able to say 'Hi' to more people than just 'Dave', we'd pass the name as an argument:  
```
function greet(name) {
  return "Hi " + name;
}
```
- Where functions have arguments, components have props: Props let you pass data to your components.

### Passing Props
- As an example, for this component we’re passing a string for `className`, a number for the `age` prop, and an
actual JavaScript expression as the `name`:  
```
function Dave() {
  const firstName = "Dave";
  const lastName = "Ceddia";
  return (
    <Person
      className='person'
      age={33}
      name={firstName + ' ' + lastName} />
  );
}
```
- It’s important to understand that the JS inside the braces must be an expression, not a statement.
- Here are a few things you can do inside JSX expressions:
  - Math, concatenation: {7 + 5} or {'Your' + 'Name'}
  - Function calls: {this.getFullName(person)}
  - Ternary (?) operator: {name === 'Dave' ? 'me' : 'not me'}
  - Boolean expressions: {isEnabled && 'enabled'}
- Here are some things you cannot do:
  - Define new variables with let, const, and var
  - Use if, for, while, etc.
  - Define functions with function
- All of the rules that apply to function arguments apply to JSX expressions, so when you’re trying to decide what to put in a JSX expression, ask yourself, “Could I pass this as a function argument?”

### Receiving Props
- Props are passed as an object, and are the first argument to a component function. For example:  
```
function Hello(props) {
  return (
    <span>Hello, {props.name}</span>
  );
}
// Used like:
<Hello name="Dave"/>
```
- One important thing to know is that props are *read-only*: components that receive props must not change them.
- In React, data flows one way: props are read-only, and can only be passed down to children.

### Communicating with Parent Components
- If you can’t change props, but you need to communicate something up to a parent component, how does that work?
- If a child needs to send data to its parent, the parent can send down a function as a prop.
- The child component can call the function whenever it needs to send up data or notify the parent that something happened.
- One place where it’s common to pass functions as props is for handling events, which we'll learn about more later.

---

## Lesson: State in Function Components
### Readings
- Learning React Chapter 6: React State Management
  - Building a Star Rating Component
  - The useState Hook
  - State in Component Trees
- Pure React Chapter 14: State in Functions
- Pure React Chapter 15: Thinking About State

### Example Applications
- [To-Do List](todo-app)
- [E-Commerce Application](https://github.com/tupes/comit-react-shopper-app)

### useState Hook
- We incorporate state into a function component using a React feature called "Hooks". 
- Hooks contain reusable code logic that is separate from the component tree, and allow us to hook up functionality to our
components.
- React ships with several built-in hooks, with the `useState` hook used to add state to our React components.
- The useState hook is a function that we can invoke to return an array, with the first value of that
array being the state variable we want to use, and the second value being a function that can be used to change the state value.
- The most important thing to remember about Hooks is that they can cause the component they’re hooked into to rerender. 
- Every time we invoke the function to change the value of a state variable, the function component will be reinvoked by the hook, and it will render again, this time with a new value for the state variable. 
- This is why Hooks are such a killer feature: when data within the hook changes, they have the power to rerender the component they’re hooked into with new data.

### State in Component Trees
- It’s not a great idea to use state in every single component. 
- Having state data distributed throughout too many of your components will make it harder to track down bugs and make changes within your application, because it’s hard to keep track of where the state values live within your component tree. 
- It’s easier to understand your application’s state, or state for a specific feature, if you manage it from one location. 
- There are several approaches to this methodology, but the one we've seen so far is storing state at the root of the component tree and passing it down to child components via props.
- A pure component is a function component that does not contain state, and so will always render the same user interface given the same props.
- If a child component needs to update state, we'll need to collect interactions from it and send them back up the tree to the component where the state is defined.
- Just as we passed data down a component tree via props, interactions can be passed back up the tree along with data via function
props.

### Tools
- The React developer tools will show you which Hooks are incorporated with specific components.
- As we interact with the app, we can watch the state value change and the component tree rerender with the corresponding value.

---

## Lesson: Input Controls
### Readings
- Learning React Chapter 6: React State Management
  - Building Forms
    - Controlled Components
- Pure React Chapter 16: Input Controls
  - Controlled Inputs

---

## Lesson: useEffect Hook
### Readings
- Learning React Chapter 7: Enhancing Components with Hooks
  - Introducing useEffect
    - The Dependency Array
    - Deep Checking Dependencies
    - Rules to Follow with Hooks
- Pure React Chapter 18: The useEffect Hook

---

## Lesson: Incorporating Data
### Readings
- Pure React Chapter 13: API Requests in React
- Learning React Chapter 8: Incorporating Data
  - Requesting Data
    - Sending Data with a Request
    - Handling Promise States

---

# If Time Permits

## Lesson: React Router
### Readings
- Learning React Chapter 11: React Router

## Lesson: Context
### Readings
- Learning React Chapter 6: React State Management
  - React Context
- Pure React Chapter 19: The Context API

## Lesson: useReducer Hook
### Readings
- Learning React Chapter 7: Enhancing Components with Hooks
  - Improving Code with useReducer
  - useReducer to Handle Complex State
- Pure React Chapter 17: The useReducer Hook
  
## Lesson: Redux
