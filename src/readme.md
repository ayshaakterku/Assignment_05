## Details of project

(1) Name of your project: Dev Stack Builder Website

(2) A little description: A modern web application that helps users explore and build their preferred web development technology stack. It showcases popular frontend, backend, database, and development tools in an organized and interactive way.

(3) Technology that you use: Google, W3 School, Chat GPT, Previous Programming Hero’s Modules

(4) 3 features about your project: Responsive Design, Interactive Project Showcase, Contact & Social Integration



## Question and Answer:

## What is JSX, and why is it used in React? 
Ans: JSX stands for JavaScript XML. It is a special syntax used in React that allows us to write HTML-like code inside JavaScript. 
JSX is used in React because it makes writing UI code easier, cleaner, and more readable by allowing HTML-like syntax inside JavaScript.


## What is the difference between props and state?
Ans: Props are used to pass data from a parent component to a child component, while state is used to store and manage data inside a component.
 Props are read-only, but state can be changed when needed.

## What does the useState hook do, and where did you use it in this project?
Ans: The useState hook is used to store and update data that can change in a React component.
I used useState in Header, Technology Card, and App.tsx to manage changing data in my project.

## What does the useEffect hook do, and why did you need it to load the JSON data?
Ans: useEffect is used to perform an action after a component renders.
We use useEffect to load/fetch JSON data when the component loads. It helps us get the data from a JSON file or API and then display it in the React application.

## Why does every item in a .map() list need a unique key prop?
Ans Each item created by .map() needs a unique key because React uses it to identify and track each item when the list changes. This helps React know which items are added, removed, or updated, so it can update the UI efficiently. Therefore, use a stable unique value such as key={item.id} whenever possible.

## What is conditional rendering? Show one place you used it (example: the empty stack message).
Ans: Conditional rendering means displaying different UI elements depending on whether a condition is true or false. In React, we often use the ternary operator (? :) or && to conditionally render components or messages. For example, in a player list, if the array is empty, we can display an “Empty Stack” message; otherwise, we display the players.

## How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Ans: Data is passed from a parent component to a child component through props. If the child needs to send data back, the parent passes a callback function as a prop, and the child calls that function with the data. 
This allows Parent → Child communication through props and
 Child → Parent communication through a callback function.
