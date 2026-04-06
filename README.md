# Food Hub 🍔

A full-featured food ordering web application built with React.js and Redux Toolkit.

**Live Demo:** [https://foodhub-react.netlify.app/]

---

## Screenshots

| Food Hub                               | Menu Item                                   | Cart                                   | Home Black                                         | Contact                                      |
| -------------------------------------- | ------------------------------------------- | -------------------------------------- | -------------------------------------------------- | -------------------------------------------- |
| ![Home](./assets/screenshots/home.png) | ![Items](./assets/screenshots/itemList.png) | ![Cart](./assets/screenshots/cart.png) | ![Home Black](./assets/screenshots/home-black.png) | ![Contact](./assets/screenshots/contact.png) |

---

## Features

- Browse restaurants and menus with live data from REST APIs
- Add/remove items from cart with real-time price calculation
- Global state management using Redux Toolkit
- Client-side routing with React Router
- Responsive design with Tailwind CSS
- Unit tested with Jest

---

## Tech stack

- **Frontend:** React.js, JavaScript (ES6+), Tailwind CSS
- **State:** Redux Toolkit
- **Routing:** React Router v6
- **Testing:** Jest
- **APIs:** Swiggy public API (or your API source)
- **Build tool:** Vite

---

## Run locally

```bash
git clone https://github.com/harsh2aug/food-hub
cd food-hub
npm install
npm run dev
```

---

## What I learned

- Redux Toolkit for cart state management across multiple components
- Lazy loading with React.lazy and Suspense to improve initial load time
- Jest unit testing for component reliability
- API integration with proper error handling and loading states
