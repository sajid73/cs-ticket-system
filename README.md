# General QA
### 1. What is JSX, and why is it used?
**Answer:**  
JSX is a syntax extension for JavaScript that looks like HTML and is used to describe UI in React components.

---

### 2. What is the difference between State and Props?
**Answer:**  
Props are read-only data passed from parent to child, while state is internal and can change over time within a component.

---

### 3. What is the `useState` hook, and how does it work?
**Answer:**  
`useState` is a React hook that adds state to functional components and provides a function to update it.

---

### 4. How can you share state between components in React?
**Answer:**  
State can be shared by lifting it to a common parent, using Context API, or state management libraries like Redux.

---

### 5. How is event handling done in React?
**Answer:**  
Events are handled using camelCase props, and functions are passed as event handlers with React’s SyntheticEvent system.

---

# CS Ticket System

A customer service ticket management system built with React and Vite. This application allows users to manage, track, and resolve customer support tickets with an intuitive dashboard interface.

## Project Overview

The CS Ticket System provides a comprehensive solution for handling customer support tickets. Features include:
- Dashboard for ticket overview
- Customer ticket management
- Ticket status tracking
- Resolved ticket history
- Responsive UI with TailwindCSS


# Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sajid73/cs-ticket-system.git
cd cs-ticket-system
```

2. Install dependencies:
```bash
npm install
```

### Running Locally

To run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Building for Production

```bash
npm run build
```

## Technology Stack

- **React** - Frontend framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **ESLint** - Code quality and linting

## Links

- **GitHub Repository**: [https://github.com/sajid73/cs-ticket-system](https://github.com/sajid73/cs-ticket-system)
- **Live Site**: [https://cs-ticket-system-sajid.netlify.app](https://cs-ticket-system-sajid.netlify.app)