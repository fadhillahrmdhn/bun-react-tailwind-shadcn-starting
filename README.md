# Profile Card Application

**Profile Card Application** is a responsive web application built with React, TypeScript, and Tailwind CSS that displays personal profile information with social media integration.

---

## 🛠️ Build With

- React 19
- TypeScript
- Tailwind CSS
- Bun

---

## :sparkles: Features

- [x] **Profile Card Display** - Display personal profile information with responsive design
- [x] **Social Media Links** - Button links to GitHub and LinkedIn
- [x] **Responsive Design** - Optimal display on desktop and mobile

---

## :framed_picture: Screenshots

Here are preview images of the app:

### :iphone: Mobile View

![Mobile view of the profile card application](/docs/images/mobile.png)

### :computer: Desktop View

![Desktop view of the profile card application](/docs/images/desktop.png)

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
│       ├── ss_web.png   // Screenshot of the web application
├── 📁src   // Main source directory
│   └── 📁components    // Reusable UI components
│       └── 📁shared    // Shared components
│           ├── AvatarCustom.tsx
│           ├── ButtonCustom.tsx
│           ├── Counter.tsx
│           ├── CounterDisplay.tsx
│           ├── index.ts
│           └── ProfileCard.tsx
│       └── 📁ui    // Shadcn UI components
│           ├── avatar.tsx
│           ├── button.tsx
│           ├── card.tsx
│           ├── form.tsx
│           ├── input.tsx
│           ├── label.tsx
│           └── select.tsx
│   └── 📁data   // Data configuration
│       ├── index.ts
│       └── ProfileData.ts
│   └── 📁hooks   // Custom hooks
│   └── 📁interfaces  // TypeScript interfaces
│       ├── index.ts
│       ├── profile-card.interface.ts
│   └── 📁lib   // Library functions
│       ├── utils.ts    // Utility functions
│   └── 📁pages   // Page components
│   └── 📁public    // Public assets
│       └── 📁assets    // Static assets
│           ├── 📁images
│           │   └── profile.jpg
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
│   ├── declarations.d.ts // Type declarations
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
