This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app`: Contains the main application components and pages.
- `src/components`: Contains reusable components used throughout the application.
- `src/models`: Contains TypeScript models and schemas.
- `src/store`: Contains Zustand stores for state management.
- `src/data`: Contains game questions in `.json` format.

## Styles

This project uses CSS modules for styling components. Global styles are located in the `src/app/globals.css`, and component-specific styles are located in the same directory as the component with a `.module.css` extension.
BEM-ish approach is used for classNames.

## Linting

To run ESLint and check for code quality issues, use the following command:

```bash
npm run lint
```

## Deploy on Vercel

Deployed on [Vercel Platform](https://nibble-six.vercel.app/)
