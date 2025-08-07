# Character Card & Counter App

**Character Card & Counter App** is a responsive web application built with React, TypeScript, and Tailwind CSS that features Dragon Ball character search with interactive cards and a counter system with modern state management.

---

## 🛠️ Build With

- React 19
- TypeScript
- Tailwind CSS
- Bun
- Zustand
- Shadcn/ui

---

## :sparkles: Features

- [x] **Character Search & Display** - Dragon Ball character search with API integration and real-time filtering
- [x] **Loading Skeleton** - Smooth loading experience with Shadcn skeleton components during data fetching
- [x] **useMemo Optimization** - Performance optimized character filtering using React useMemo hook
- [x] **Dark/Light Theme Toggle** - Theme switching functionality
- [x] **Counter with Zustand** - A counter functionality powered by Zustand for efficient state management.
- [x] **Responsive Design** - Optimal display on desktop and mobile devices

---

## :framed_picture: Screenshots

Here are preview images of the app:

### :iphone: Character Card Mobile

![Mobile view of character card with search functionality](/docs/images/card_mobile.png)

### :desktop_computer: Character Card Desktop

![Desktop view of character card with search functionality](/docs/images/card_desktop.png)

### :mag: Search Functionality

![Character search functionality demonstration](/docs/images/card_search.png)

### :iphone: Counter Mobile

![Mobile view of counter component](/docs/images/counter_mobile.png)

### :desktop_computer: Counter Desktop

![Desktop view of counter component](/docs/images/counter_desktop.png)

### :hourglass_flowing_sand: Loading Skeleton

![Loading skeleton demonstration during data fetching](/docs/images/loading_skeleton.png)

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
│       ├── card_desktop.png     // Desktop character card screenshot
│       ├── card_mobile.png      // Mobile character card screenshot
│       ├── card_search.png      // Search functionality screenshot
│       ├── counter_desktop.png  // Desktop counter screenshot
│       ├── counter_mobile.png   // Mobile counter screenshot
│       ├── loading_skeleton.png // Loading skeleton screenshot
│       ├── desktop.png          // Desktop screenshot
│       ├── mobile.png           // Mobile screenshot
│       └── ss_web.png           // Web screenshot
├── 📁src   // Main source directory
│   ├── 📁components    // Reusable UI components
│   │   ├── 📁shared    // Shared components
│   │   │   ├── AvatarCustom.tsx
│   │   │   ├── ButtonCustom.tsx
│   │   │   ├── ButtonTheme.tsx
│   │   │   ├── CharacterCard.tsx
│   │   │   ├── Counter.tsx
│   │   │   ├── CounterDisplay.tsx
│   │   │   ├── CounterZustand.tsx
│   │   │   ├── ProfileCard.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   └── index.ts
│   │   └── 📁ui    // Shadcn UI components
│   │       ├── avatar.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── checkbox.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── popover.tsx
│   │       ├── select.tsx
│   │       ├── skeleton.tsx
│   │       ├── sonner.tsx
│   │       └── textarea.tsx
│   ├── 📁context   // React context providers
│   │   └── ThemeContext.tsx
│   ├── 📁data   // Data configuration
│   │   ├── index.ts
│   │   └── ProfileData.ts
│   ├── 📁hooks   // Custom hooks
│   │   ├── index.ts
│   │   └── useMemoCard.tsx
│   ├── 📁interfaces  // TypeScript interfaces
│   │   ├── index.ts
│   │   ├── profile-card.interface.ts
│   │   └── theme.interface.ts
│   ├── 📁lib   // Library functions
│   │   └── utils.ts    // Utility functions
│   ├── 📁public    // Public assets
│   │   ├── 📁assets    // Static assets
│   │   │   └── 📁images
│   │   │       └── profile.jpg
│   │   ├── 📁images    // Image assets
│   │   │   ├── logo.svg
│   │   │   └── react.svg
│   │   ├── 📁styles    // CSS Styles directory
│   │   │   └── globals.css
│   │   └── index.html    // Main HTML file
│   ├── 📁store    // Global state management (Zustand)
│   ├── 📁types   // TypeScript type definitions
│   │   ├── index.ts
│   │   └── theme.type.ts
│   ├── APITester.tsx   // API testing component
│   ├── App.tsx   // Main application component
│   ├── declarations.d.ts // Type declarations
│   ├── index.ts    // Entry point for the application
│   └── main.tsx    // Main entry file for the React application
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
