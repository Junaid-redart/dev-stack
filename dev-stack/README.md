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

### 1. What is JSX?

JSX is a syntax extension for JavaScript that allows developers to write HTML-like markup inside JavaScript or TypeScript code. React uses JSX to describe the user interface.

### 2. What is the difference between props and state?

Props are values passed from a parent component to a child component. State is data managed by a component that can change over time and trigger re-rendering.

### 3. What is the useState Hook?

The `useState` Hook allows functional React components to manage local state. It returns the current state value and a function to update it.

### 4. What is the useEffect Hook?

The `useEffect` Hook is used to synchronize a component with external systems, such as fetching data or setting up subscriptions.

### 5. Why are keys important in React lists?

Keys help React identify list items between renders so it can correctly update, insert, or remove elements.

## Author

Developed by Junaid Rashid as a React assignment project.