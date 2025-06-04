### Code to run

`npm create vite@latest`
`npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom`

>REACT & JavaScript

### Steps
> Setup Vitest/ configured `vite.config.js`


> Write an Async Function
Create a Utility or Service File
For instance, define a function that fetches data (Any API is fine).
Handle the Response
Return or process the data so you can verify it in tests.
Part 3: Test with Mocks
Create a Test File
For example, apiService.test.js.
Mock the Async Call
Use Jest’s mock functions or a mocking library to simulate the fetch/HTTP call.
Ensure your test doesn’t rely on an actual network request.
Write a Test
Invoke your function and check that it returns or processes the expected data.
Run Tests
Use npm test (or the script defined in your package.json) to confirm results.

