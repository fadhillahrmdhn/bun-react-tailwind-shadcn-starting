# Admin Dashboard with Authentication & Authorization

**Admin Dashboard** is a modern React + Shadcn UI web app with built-in authentication and role-based authorization.
It’s designed to help you manage user data easily, with a clean responsive layout, smooth user experience, and solid security.

---

## 🛠️ Build With

- React 19
- TypeScript
- Tailwind CSS
- Bun
- Zustand
- Shadcn/ui
- TanStack Router
- TanStack Table
- TanStack Query
- Axios
- Sonner

---

## :sparkles: Features

- [x] **Authentication** – Login  with validation
- [x] **Authorization** – Role-based access control
- [x] **User Table** – Table of users with pagination
- [x] **Loading Skeleton** – Smooth loading experience with Shadcn skeleton components
- [x] **Dark/Light Theme Toggle** – Switch between dark and light themes
- [x] **Responsive Design** – Optimized for desktop & mobile devices
- [x] **Toast Notification** – Error and action notifications using Sonner

---

## :framed_picture: Screenshots

Here are some preview images of the app:

### :desktop_computer: Login

![Login page view](/docs/images/login.png)

### :desktop_computer: Dashboard (Light Mode)

![Dashboard view](/docs/images/dashboard_lightmode.png)

### :desktop_computer: Dashboard (Dark Mode)

![Dashboard view](/docs/images/dashboard_darkmode.png)

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

```plaintext
├── 📁docs         // Documentation assets
│   └── 📁images
│       ├── dashboard_darkmode.png
│       ├── dashboard_lightmode.png
│       ├── home.png
│       ├── login.png
│       ├── mobile_pagination.png
│       ├── profile.png
│       ├── Skeleton.png
│       ├── table.png
│       └── toast.png
├── 📁src   // Main source directory
│   ├── 📁components
│   │   ├── 📁shared
│   │   │   ├── 📁dragonball
│   │   │   │   ├── columns.tsx
│   │   │   │   ├── data-table.tsx
│   │   │   │   ├── FetchDragonBall.tsx
│   │   │   │   └── index.ts
│   │   │   ├── 📁users
│   │   │   │   ├── columns.tsx
│   │   │   │   ├── data-table.tsx
│   │   │   │   ├── FetchUsers.tsx
│   │   │   │   └── index.ts
│   │   │   ├── authinitializer.tsx
│   │   │   ├── AvatarCustom.tsx
│   │   │   ├── ButtonCustom.tsx
│   │   │   ├── ButtonTheme.tsx
│   │   │   ├── CharacterCard.tsx
│   │   │   ├── Counter.tsx
│   │   │   ├── CounterDisplay.tsx
│   │   │   ├── CounterZustand.tsx
│   │   │   ├── index.ts
│   │   │   ├── LoginForm.tsx
│   │   │   ├── navbar.tsx
│   │   │   ├── ProfileCard.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   └── SkeletonCustom.tsx
│   │   └── 📁ui
│   │       ├── avatar.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── checkbox.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── select.tsx
│   │       ├── skeleton.tsx
│   │       ├── sonner.tsx
│   │       └── table.tsx
│   ├── 📁context
│   │   └── ThemeContext.tsx
│   ├── 📁data
│   │   ├── index.ts
│   │   ├── mockUserData.ts
│   │   └── ProfileData.ts
│   ├── 📁enums
│   │   ├── index.ts
│   │   └── role.enum.ts
│   ├── 📁hooks
│   │   ├── index.ts
│   │   └── useInitAuth.tsx
│   ├── 📁interfaces
│   │   ├── auth.interface.ts
│   │   ├── base.interface.ts
│   │   ├── counterStore.interface.ts
│   │   ├── dragonball.interface.ts
│   │   ├── form-login.interface.ts
│   │   ├── getalluser.interface.ts
│   │   ├── index.ts
│   │   ├── profile-card.interface.ts
│   │   ├── table.interface.ts
│   │   └── theme.interface.ts
│   ├── 📁lib
│   │   ├── api.ts
│   │   ├── index.ts
│   │   └── utils.ts
│   ├── 📁page
│   │   ├── 📁auth
│   │   │   ├── 📁login
│   │   │   │   └── LoginPage.tsx
│   │   │   ├── 📁register
│   │   │   │   └── RegisterPage.tsx
│   │   │   └── AuthLayout.tsx
│   │   └── 📁dashboard
│   │       └── DashboardPage.tsx
│   ├── 📁public
│   │   ├── 📁assets
│   │   │   └── 📁images
│   │   │       └── profile.jpg
│   │   ├── 📁images
│   │   │   ├── logo.svg
│   │   │   └── react.svg
│   │   ├── 📁styles
│   │   │   └── globals.css
│   │   └── index.html
│   ├── 📁Routes
│   │   ├── characters.tsx
│   │   ├── dashboard.tsx
│   │   ├── index.tsx
│   │   ├── login.tsx
│   │   ├── profile.tsx
│   │   ├── register.tsx
│   │   └── __root.tsx
│   ├── 📁store
│   │   ├── counterStore.ts
│   │   ├── index.ts
│   │   ├── useAuthStore.ts
│   │   └── useUserStore.ts
│   ├── 📁types
│   │   ├── cookietype.ts
│   │   ├── index.ts
│   │   ├── limit.type.ts
│   │   ├── theme.type.ts
│   │   └── themeStorageKey.type.ts
│   ├── APITester.tsx
│   ├── App.tsx
│   ├── declarations.d.ts
│   ├── index.ts
│   ├── main.tsx
│   └── routeTree.gen.ts
├── .gitignore
├── build.ts
├── bun-env.d.ts
├── bun.lock
├── bunfig.toml
├── components.json
├── package.json
├── README.md
└── tsconfig.json
```
