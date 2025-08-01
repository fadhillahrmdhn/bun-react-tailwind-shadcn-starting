# Registration Form

Implements a user registration form with the TanStack Form library.

---

## 🛠️ Build With

- React 19
- TypeScript
- Tailwind CSS
- Bun
- Shadcn UI
- Sonner
- TanStack Form

---

## :sparkles: Features

- [x] **Registration Form** - A registration form designed to collect multiple pieces of user information Form
- [x] **Data Display** - Displays user data in the console log after submission.
- [x] **Toast Notifications** - Success notifications using Sonner
- [x] **Responsive Design** - Optimal display on desktop and mobile devices

---

## :framed_picture: Screenshots

Here are preview images of the app:

### :iphone: Mobile View

![Mobile view of the registration form](/docs/images/mobile_form.png)

### :computer: Desktop View

![Desktop view of the registration form](/docs/images/desktop_form.png)

### :white_check_mark: Form Submission Success

![Console data display and toast notification after form submission](/docs/images/ss_toast_displaydata.png)

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
│       ├── desktop.png      // Desktop screenshot
│       ├── mobile.png       // Mobile screenshot
│       └── ss_web.png       // Web screenshot
├── 📁src   // Main source directory
│   ├── 📁components    // Reusable UI components
│   │   ├── 📁shared    // Shared components
│   │   │   ├── AvatarCustom.tsx
│   │   │   ├── BirthDate.tsx
│   │   │   ├── ButtonCustom.tsx
│   │   │   ├── Counter.tsx
│   │   │   ├── CounterDisplay.tsx
│   │   │   ├── ProfileCard.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── TextareaCustom.tsx
│   │   │   ├── index.ts
│   │   │   └── 📁form    // Form-specific components
│   │   │       ├── LoginForm.tsx
│   │   │       └── RegisterForm.tsx
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
│   │       ├── sonner.tsx
│   │       └── textarea.tsx
│   ├── 📁data   // Data configuration
│   │   ├── index.ts
│   │   └── ProfileData.ts
│   ├── 📁interfaces  // TypeScript interfaces
│   │   ├── form-register.interface.ts
│   │   ├── index.ts
│   │   └── profile-card.interface.ts
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
