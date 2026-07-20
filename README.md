# ALAB 320H.3.1 - Rendering Arrays from State

## Rendering Arrays in React

This beginner React project demonstrates how to store an array of learner data in state and render that information using reusable components.

Each learner has a name, biography, and an array of scores. The application uses React's `.map()` method to create a `Learner` component for every learner and a `Score` component for every score.

## Learning Objectives

This project demonstrates how to:

- Create a React application with Vite
- Import and use the React `useState` hook
- Store an array inside a state object
- Render an array using the `.map()` method
- Pass data between components using props
- Render arrays nested inside other arrays
- Add unique React keys when rendering lists
- Organize an application into reusable components
- Add simple and responsive CSS styling

## Application Features

- Displays the total number of learners
- Displays each learner's name
- Displays each learner's biography
- Displays all scores associated with each learner
- Organizes learners and scores into reusable cards
- Adjusts the score layout based on the available screen space

## Component Structure

The application uses three main components:

### App

The `App` component:

- Stores the learner data using `useState`
- Maps through the learners array
- Renders one `Learner` component for each learner
- Passes each learner object as a prop

### Learner

The `Learner` component:

- Receives one learner object
- Displays the learner's name and biography
- Maps through the learner's scores array
- Renders one `Score` component for each score

### Score

The `Score` component:

- Receives one score object
- Displays the score date
- Displays the score value

## Technologies Used

- React
- JavaScript
- Vite
- HTML
- CSS
- Git
- GitHub
- Visual Studio Code

## Project Structure

```text
src/
├─ App.css
├─ App.jsx
├─ Learner.jsx
├─ Score.jsx
├─ index.css
└─ main.jsx
```

## How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/SoftwareEngineeringInnovator/ALAB-320H_3_1-Rendering_Arrays_from_State.git
```

### 2. Open the project folder

```bash
cd ALAB-320H_3_1-Rendering_Arrays_from_State
```

### 3. Install the dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local address shown in the terminal, usually:

```text
http://localhost:5173/
```

## Available Commands

Run the development server:

```bash
npm run dev
```

Check the project for code-quality errors:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## What I Learned

During this project, I practiced storing an array inside React state and displaying the array's information on the page.

I also learned how data can move from a parent component to a child component through props. The `App` component sends learner data to the `Learner` component, and the `Learner` component sends score data to the `Score` component.

This helped me understand how React components can work together to organize and display data.

## Author

Fredy Chilito  
Software Engineering Student  
Created as part of the Per Scholas Software Engineering Program.  
Project: ALAB 320H.3.1 - Rendering Arrays from State