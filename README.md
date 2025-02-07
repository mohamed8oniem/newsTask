<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
``` -->

# 📰 News Aggregator App

This is a **React.js + TypeScript** project that aggregates news from multiple sources, such as **NewsAPI.org, The New York Times, and The Guardian**. It provides features like **search, filtering, and infinite scrolling**. The application is built using **Vite** and containerized with **Docker**.

## 🚀 Features

✅ Fetches news from multiple APIs (NewsAPI, NYTimes, Guardian)  
✅ Search for articles by keyword  
✅ Filter articles by date range  
✅ Responsive UI with **Material UI**  
✅ **Infinite scrolling** for article loading  
✅ **Docker support** for easy deployment

---

## 📦 Technologies Used

- **React.js** + **TypeScript** (Frontend)
- **Vite** (Fast development build tool)
- **React Query** (API data fetching & caching)
- **Material UI** (UI components & design)
- **Axios** (API requests)
- **Docker** (Containerization)
- **ESLint + Prettier** (Code quality & formatting)

---

## ⚡ Getting Started

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/mohamed8oniem/newsTask.git
cd newsTask
npm install
npm run dev







```
