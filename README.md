# nextjs-starter

## Getting Started

1. Duplicate `.env.template`, rename it as `.env` and complete the information.
1. Install deps:
    ```bash
    npm i
    ```
1. Run the development server:
    ```bash
    npm run dev
    ```
1. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## What does this project have?

- Basic structure of a next.js project with a minimal layout.
- Pre-configured (and opinionated) eslint, TypeScript and Prettier.
- Integration with TailwindCSS and autoprefixer.
- Pre-commit hook using Husky and lint-staged.
- Google Analytics integration if `NEXT_PUBLIC_GA_TRACKING_ID` env var is present.