# IT313 Enrollment Eligibility Checker

## Problem Description
A registrar utility program that processes student prelim, midterm, and final grades, computes their averages, and classifies them as PASSING or PROBATION based on a standard threshold[cite: 4, 5].

## Approach & ES6+ Features Used
- **Modules (`import`/`export`)**: Separated logic into `gradeUtils.js`[cite: 4, 5].
- **Promises & Async/Await**: Simulated a registrar API fetch with error handling (`try/catch`)[cite: 4, 5].
- **Destructuring**: Extracted properties cleanly from enrollee objects[cite: 4, 5].
- **Array Methods (`map`, `filter`, `reduce`)**: Transformed data, filtered passing students, and calculated the class average[cite: 4, 5].
- **Template Literals**: Cleanly formatted the console output report[cite: 4, 5].

## How to Run
1. Ensure Node.js is installed.
2. Initialize a project with `"type": "module"` in your `package.json`.
3. Run the main script via terminal:
   ```bash
   node index.js