# Dragon Ball Z Character Hub & Profile Dashboard

**Dragon Ball Z Character Hub & Profile Dashboard** is a responsive web application built with a modern React stack, including React 19, TypeScript, and Tailwind CSS. This project focuses on implementing routing, data fetching, state management, and table views using TanStack and Shadcn UI, enhanced with Skeleton for displaying placeholders while data is being fetched, as well as toast notifications to inform users of any errors.

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

- [x] **Character Table** -  Explore Dragon Ball characters in a table powered by TanStack Table.
- [x] **Loading Skeleton** - Smooth loading experience with Shadcn skeleton components during data fetching
- [x] **Dark/Light Theme Toggle** - Theme switching functionality
- [x] **Responsive Design** - Optimal display on desktop and mobile devices
- [x] **Toast Notification** - Display notifications to users when an error happens.
- [x] **Profile Page** - "Display the user profile page.

---

## :framed_picture: Screenshots

Here are some preview images of the app:

### :desktop_computer: Character Table

![Dragon Ball character table](/docs/images/table.png)


### :iphone: Mobile view  of Character Table

![Mobile view](/docs/images/mobile_pagination.png)

### :hourglass_flowing_sand: Loading Skeleton

![Loading skeleton demonstration during data fetching](/docs/images/Skeleton.png)

### :desktop_computer: Toast Notification

![Toast notification demonstration](/docs/images/toast.png)

### :desktop_computer: Profile Page

![Profile page view](/docs/images/profile.png)

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
│       ├── home.png               // Home page screenshot
│       ├── mobile_pagination.png  // Mobile pagination screenshot
│       ├── profile.png            // Profile page screenshot
│       ├── Skeleton.png           // Loading skeleton screenshot
│       ├── table.png              // Table component screenshot
│       └── toast.png              // Toast notification screenshot
├── 📁src   // Main source directory
│   ├── 📁components
│   │   ├── 📁shared
│   │   │   ├── 📁dragonball
│   │   │   │   ├── columns.tsx
│   │   │   │   ├── data-table.tsx
│   │   │   │   ├── FetchDragonBall.tsx
│   │   │   │   └── index.ts
│   │   │   ├── AvatarCustom.tsx
│   │   │   ├── ButtonCustom.tsx
│   │   │   ├── ButtonTheme.tsx
│   │   │   ├── CharacterCard.tsx
│   │   │   ├── Counter.tsx
│   │   │   ├── CounterDisplay.tsx
│   │   │   ├── CounterZustand.tsx
│   │   │   ├── index.ts
│   │   │   ├── navbar.tsx
│   │   │   ├── ProfileCard.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   └── SkeletonCustom.tsx
│   │   └── 📁ui
│   │       ├── avatar.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
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
│   │   └── ProfileData.ts
│   ├── 📁hooks
│   │   └── index.ts
│   ├── 📁interfaces
│   │   ├── base.interface.ts
│   │   ├── counterStore.interface.ts
│   │   ├── dragonball.interface.ts
│   │   ├── index.ts
│   │   ├── profile-card.interface.ts
│   │   ├── table.interface.ts
│   │   └── theme.interface.ts
│   ├── 📁lib
│   │   ├── api.ts
│   │   ├── index.ts
│   │   └── utils.ts
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
│   │   ├── index.tsx
│   │   ├── profile.tsx
│   │   └── __root.tsx
│   ├── 📁store
│   │   ├── counterStore.ts
│   │   └── index.ts
│   ├── 📁types
│   │   ├── index.ts
│   │   ├── limit.type.ts
│   │   └── theme.type.ts
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
