# JavaScript API Fetch Demo

A small practice project that demonstrates how to **fetch** data from a public REST API, parse **JSON**, and **render it as a dynamic HTML table** with automatically generated headers and live client-side filtering.

---

## 🔗 Live Demo
👉 [View on GitHub Pages](https://walkitoff.github.io/javascript-api-fetch-demo/)

---

## 🔗 API Source
Data fetched from [JSONPlaceholder – `/users`](https://jsonplaceholder.typicode.com/users)

---

## ✨ Features
- **Fetch + JSON parse** via the native `fetch()` API  
- **Dynamic table headers** generated from the first record’s keys  
- **Automatic table rows** for each object in the API array  
- **Nested objects rendered** as nested `<ul>` key–value lists  
- **Live search filtering** (case-insensitive, real-time updates)  
- **Basic error handling** for non-OK HTTP responses  
- Fully client-side — **no frameworks or build tools required**

---

## 🧭 How It Works
1. The app calls `fetch()` to retrieve user data from JSONPlaceholder.  
2. The JSON response is parsed into an array of objects.  
3. The table header row is dynamically generated using `Object.keys()` from the first record.  
4. Each record becomes a new `<tr>` row:
   - Simple key–value pairs render as `<td>value</td>`.  
   - First-level nested objects (like `address` or `company`) render as a nested `<ul>` list.  
   - Deeper nested objects are intentionally skipped for clarity.  
5. A live input event listener filters visible rows as the user types.

> The design keeps things simple, focusing on readable data rendering and basic interactivity.

---

## 🧰 Tech Stack
- **Language:** Vanilla JavaScript (ES6+)  
- **Markup:** HTML5  
- **Styling:** CSS3  
- **Data:** JSONPlaceholder fake API  

---

## 📂 Project Structure
├── index.html # Base markup and layout
├── style.css # Light styling for layout and table
├── script.js # Fetch logic, table rendering, and search filtering
└── favicon.png # Logo / favicon

---
---

## 🧾 Credits & License

Created by **Walkitoff** © 2025  
Designed as a lightweight front-end learning project for practicing JavaScript data handling and DOM rendering.  

Logo & favicon © Walkitoff — all rights reserved.  
This project is open for educational and personal use under the [MIT License](https://opensource.org/licenses/MIT).

---

<p align="center">
  <img src="favicon.png" width="70" alt="Walkitoff logo"><br>
  <sub><b>Walkitoff</b> — because sometimes you can't rub dirt on it.</sub>
</p>
