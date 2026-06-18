# React Notes App

A simple Notes App built with React using Hooks. Users can add a note title and description, then display all notes dynamically on the page.

## Topics Covered

### 1. React Functional Components

* Creating components using JavaScript functions.
* Returning JSX elements.

### 2. useState Hook

* Managing component state.
* Storing form inputs and notes data.

```js
const [notesHeading, setnotesHeading] = useState('')
const [detail, setdetail] = useState('')
const [tasks, settasks] = useState([])
```

### 3. Form Handling

* Handling user input with `onChange`.
* Controlling form fields using state.

### 4. Event Handling

* Handling button clicks.
* Preventing default form submission behavior.

```js
e.preventDefault()
```

### 5. Arrays and State Updates

* Using the spread operator (`...`) to copy arrays.
* Adding new objects to state.

```js
const copyTasks = [...tasks]
copyTasks.push({ notesHeading, detail })
```

### 6. Rendering Lists

* Displaying multiple notes using the `map()` method.

```js
tasks.map((elem, idx) => { ... })
```

### 7. Controlled Components

* Keeping input values synchronized with React state.

### 8. Dynamic UI Updates

* Automatically updating the UI when state changes.

## Features

* Add note title
* Add note description
* Display all notes
* Clear inputs after submission
* Real-time UI updates using React state

## Technologies Used

* React.js
* JavaScript (ES6+)
* JSX
* CSS

## Learning Outcomes

Through this project, you will learn:

* React Hooks (`useState`)
* Form Handling
* Event Handling
* State Management
* Array Manipulation
* List Rendering with `map()`
* Controlled Inputs
* Dynamic UI Rendering
