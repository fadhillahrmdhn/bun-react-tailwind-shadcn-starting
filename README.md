# CounterApp
  **CounterApp** is an interactive counter application built with modern technologies such as React, TypeScript, and Tailwind CSS

---
## 🛠️ Build With

 - React 19 
 - TypeScript 
 - Tailwind CSS 
 -  Bun


---

## :sparkles: Features

- [x] **Interactive Counter** - Increment, decrement, dan reset counter

---

## :framed_picture: Screenshots

Here are preview images of the app:

![An old rock in the desert](/docs/images/ss_web.png)
---

## :gear: Starting Project

To install dependencies:

```bash
bun install
```

To start a development server:

```bash
bun dev
```

To build the project:

```bash
bun run build
```

To run for production:

```bash
bun start
```

---

## :file_folder: Project Structure

```ts
├── 📁docs         // Documentation assets
│   └── 📁images 
├── 📁src   // Main source directory
│   └── 📁components    // Reusable UI components
│       └── 📁shared    // Shared components
│           ├── Counter.tsx
│           ├── CounterDisplay.tsx
│           └── index.ts
│       └── 📁ui    // Shadcn UI components
│           ├── button.tsx
│           ├── card.tsx
│           ├── form.tsx
│           ├── input.tsx
│           ├── label.tsx
│           ├── select.tsx
│   └── 📁hooks   // Custom hooks
│   └── 📁lib   // Library functions
│       ├── utils.ts    // Utility functions
│   └── 📁pages   // Page components
│   └── 📁public    // Public assets
│       └── 📁images    // Image assets
│           ├── logo.svg
│           ├── react.svg
│       └── 📁styles    // CSS Styles directory
│           ├── globals.css
│       ├── index.html    // Main HTML file
│   └── 📁routes    // Application routes
│   └── 📁stores    // Global state management (Zustand)
│   └── 📁types   // TypeScript type definitions
│   ├── APITester.tsx   // API testing component
│   ├── App.tsx   // Main application component
│   ├── index.ts    // Entry point for the application
│   ├── main.tsx    // Main entry file for the React application
├── .env    // Environment variables
├── .gitignore    // Git ignore file
├── build.ts    // Build script
├── bun-env.d.ts    // Type definitions for Bun environment
├── bun.lock    // Bun lock file
├── bunfig.toml   // Bun configuration file
├── components.json   // Shadcn Components configuration
├── package.json    // Project configuration
├── README.md   // Project documentation
└── tsconfig.json   // TypeScript configuration


```
