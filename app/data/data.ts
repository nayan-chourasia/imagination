export interface Blog {
    id: number;
    title: string;
    subtitle: string;
    author: string;
    image: string;
    date: string;
    paragraphs: string[];
  }
  
  export const blogData: Blog[] = [
    {
      id: 1,
      title: "Understanding React Components",
      subtitle: "A beginner’s guide to creating components in React.",
      author: "John Doe",
      image: "/card.jpg", // Replace with actual image path
      date: "2024-12-15",
      paragraphs: [
        "React components are the building blocks of a React application. They allow developers to split the UI into reusable pieces, making the code easier to maintain and scale.",
        "Components can be either class-based or functional. Functional components are recommended in modern React development due to their simplicity and performance benefits.",
        "In this guide, we’ll go through the essential concepts of React components, including props, state, lifecycle methods, and hooks."
      ]
    },
    {
      id: 2,
      title: "Mastering CSS Grid and Flexbox",
      subtitle: "How to use CSS Grid and Flexbox for modern web layouts.",
      author: "Jane Smith",
      image: "/hero1.png", // Replace with actual image path
      date: "2024-12-18",
      paragraphs: [
        "CSS Grid and Flexbox are powerful layout systems that allow you to create responsive web designs easily.",
        "Flexbox is great for one-dimensional layouts, while CSS Grid is ideal for two-dimensional layouts, offering more control over both rows and columns.",
        "In this article, we’ll compare both techniques and explore when and how to use them for creating dynamic layouts."
      ]
    },
    {
      id: 3,
      title: "Exploring JavaScript ES6 Features",
      subtitle: "A deep dive into the new features introduced in JavaScript ES6.",
      author: "Emily Johnson",
      image: "/card.jpg", // Replace with actual image path
      date: "2024-12-20",
      paragraphs: [
        "ES6 (ECMAScript 2015) introduced several new features to JavaScript that make the language more powerful and easier to work with.",
        "Some of the key features include arrow functions, promises, template literals, destructuring, and modules.",
        "In this blog post, we will explore these new features and how they can simplify your JavaScript code."
      ]
    },
    {
      id: 4,
      title: "Understanding React Components",
      subtitle: "A beginner’s guide to creating components in React.",
      author: "John Doe",
      image: "/card.jpg", // Replace with actual image path
      date: "2024-12-15",
      paragraphs: [
        "React components are the building blocks of a React application. They allow developers to split the UI into reusable pieces, making the code easier to maintain and scale.",
        "Components can be either class-based or functional. Functional components are recommended in modern React development due to their simplicity and performance benefits.",
        "In this guide, we’ll go through the essential concepts of React components, including props, state, lifecycle methods, and hooks."
      ]
    },
    {
      id: 5,
      title: "Understanding React Components",
      subtitle: "A beginner’s guide to creating components in React.",
      author: "John Doe",
      image: "/card.jpg", // Replace with actual image path
      date: "2024-12-15",
      paragraphs: [
        "React components are the building blocks of a React application. They allow developers to split the UI into reusable pieces, making the code easier to maintain and scale.",
        "Components can be either class-based or functional. Functional components are recommended in modern React development due to their simplicity and performance benefits.",
        "In this guide, we’ll go through the essential concepts of React components, including props, state, lifecycle methods, and hooks."
      ]
    },
    {
      id: 6,
      title: "Understanding React Components",
      subtitle: "A beginner’s guide to creating components in React.",
      author: "John Doe",
      image: "/card.jpg", // Replace with actual image path
      date: "2024-12-15",
      paragraphs: [
        "React components are the building blocks of a React application. They allow developers to split the UI into reusable pieces, making the code easier to maintain and scale.",
        "Components can be either class-based or functional. Functional components are recommended in modern React development due to their simplicity and performance benefits.",
        "In this guide, we’ll go through the essential concepts of React components, including props, state, lifecycle methods, and hooks."
      ]
    },

  ];
  