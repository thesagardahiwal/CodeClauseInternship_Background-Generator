# Background Generator

A web application to generate visually appealing backgrounds with gradients. Users can select colors, gradient types, and preview the background in real-time.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Features

- Select two colors for the gradient
- Choose between linear and radial gradient types
- Real-time preview of the gradient background

## Demo


https://github.com/thesagardahiwal/CodeClauseInternship_Background-Generator/assets/133154948/1b4ba65c-1204-4441-a729-7bf341f2d062


![Background Generator Demo](demo.gif)

You can also check out a live demo [here](https://example.com).

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/thesagedahiwal/CodeClauseInternship_Background-Generator.git
    ```

2. Navigate to the project directory:

    ```bash
    cd CodeClauseInternship_Background-Generator
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

5. Open `http://localhost:3000` in your browser to see the application.

## Usage

1. Use the color pickers to select two or more colors.
2. Select the gradient type (linear or radial or conic) from the dropdown menu.
3. The background preview will update in real-time based on your selections.

## Project Structure

```plaintext
background-generator/
│
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ColorPicker.tsx
│   │   ├── GradientTypeSelector.tsx
│   │   ├── GradientPreview.tsx
│   ├── styles/
│   │   ├── App.module.css
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── vite.config.ts



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
