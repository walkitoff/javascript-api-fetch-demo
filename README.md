# JavaScript API Fetch Demo

Practice project demonstrating how to **fetch** data from a public REST API, parse **JSON**, and **render it as a dynamic HTML table** (with auto-generated headers). Next, this will add a client-side **search filter**.

## 🔗 Live Demo
👉 [View on GitHub Pages](https://YOUR-USERNAME.github.io/javascript-api-fetch-demo/)  
*(Replace `YOUR-USERNAME` with your GitHub handle.)*

## 🔗 API Source
Data from [JSONPlaceholder – `/users`](https://jsonplaceholder.typicode.com/users)

## ✨ Current Features
- **Fetch + JSON parse** using `fetch()` and `.json()`
- **Dynamic table headers** created from `Object.keys()` of the first record
- **Row rendering** for each object in the array
- **Nested objects displayed** as a nested `<ul>` list
- **Basic error handling** for non-OK responses
- Runs directly in the browser (no build tools)

## 🧭 How It Works
1. Fetch data from the API.  
2. Parse the JSON response.  
3. Dynamically create table headers from the first record’s keys.  
4. Loop through each record:
   - Add a new row `<tr>`.
   - For each key:
     - Render simple values (`string`, `number`, etc.) as `<td>`.
     - Render objects as a nested list of key–value pairs.
   - Skip deeper nested objects for clarity.

> The code intentionally skips objects beyond one nesting level to keep the output readable.


