# Next.js 15 Type Error: Missing Return Type Annotation

This repository demonstrates a common type error encountered in Next.js 15 applications when using functional components without explicit return type annotations.  Next.js 15 leverages TypeScript by default, leading to stricter type checking that can catch these subtle issues.

## Problem
The provided code in `bug.js` produces a type error because it doesn't explicitly state that the `Home` function will return a JSX element.  This is a change from some earlier versions where implicit return types were accepted.

## Solution
The corrected code in `bugSolution.js` includes the return type annotation `ReactElement` (or a more specific type if known).  This explicitly informs TypeScript of the expected return value, resolving the type error.

## Steps to Reproduce
1. Clone this repository
2. Navigate to the `bug` directory and run `npm install`
3. Attempt to run the Next.js app (`npm run dev`). You will observe the type error.
4. Now go to the `bugSolution` directory, run `npm install`, and then `npm run dev`.  The application should start without error.

## Contributing
Contributions are welcome! If you encounter similar issues or have ideas to enhance the understanding of this problem, feel free to create a pull request or open an issue.