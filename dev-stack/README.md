# Dev Stack

Dev Stack is a responsive React web application where developers can explore popular technologies and build their own personalized development stack.

## Live Website

https://dev-stack12.netlify.app

## GitHub Repository

https://github.com/Junaid-redart/dev-stack

## Features

- Explore 12 popular development technologies.
- View technology details, categories, difficulty levels, and ratings.
- Add technologies to a personalized stack.
- Prevent duplicate technology selections.
- Remove individual technologies from the stack.
- Clear the entire stack with one click.
- Display toast notifications for user actions.
- Responsive design for mobile, tablet, and desktop.
- Fetch technology data dynamically from a local JSON file.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React Toastify

## Installation

**1. Clone the repository**

```bash
git clone https://github.com/Junaid-redart/dev-stack.git
```

**2. Navigate to the React project directory**

```bash
cd dev-stack/dev-stack
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

## Production Build

To create an optimized production build:

```bash
npm run build
```

## React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It allow us to write HTML like code inside JavaScript. We use JSX in React because it makes UI easier to create and code more readable.

### 2. What is the difference between props and state in React?

Props are used to pass data from parent to child component. State is used to store and manage data inside a component. Props are read-only, but state can be changed using setState or useState.

### 3. What does the useState Hook do? Where have you used it in this project?

The `useState` is used to store and update data in React components. In my project, I used it to manage selected technologies, loading state and technology data.
### 4. Why do we need a unique key prop when rendering a list using .map() in React?

The `useEffect` is used to handle side effects in React. In my project, I used it to fetch JSON data when the component loads and show the technologies on website.

### 5. Why do we need a unique key prop when rendering a list using .map() in React?

The key prop helps React to identify each item in a list. It makes updating, adding or removing items easier and more efficient.

### 6. What is conditional rendering in React? Give an example of conditional rendering for an empty stack in this project.

Conditional rendering means showing different UI based on a condition. In my project, if the stack is empty, it show "Your Stack is Empty" message. Otherwise, it shows the selected technologies.

### 7. How do you pass data from a parent component to a child component in React? How can a child component communicate with its parent?

We use props to pass data from parent to child component. A child component can communicate with parent by calling a function that passed through props.

## Author

Developed by Junaid Rashid as a React assignment project.