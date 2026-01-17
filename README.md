# Responsive Burger Menu 🍔

A lightweight, responsive navigation menu built with HTML, CSS, and Vanilla JavaScript. It features a smooth hamburger animation and handles body scroll locking to prevent layout shifts.

🔗 **[View Live Demo on GitHub Pages](https://igarok88.github.io/-burgerMenu/)**

## 📋 Description

This project demonstrates a classic mobile navigation pattern. On desktop screens, it displays a standard horizontal menu. On mobile screens (under 767px), it switches to a "Burger" icon that toggles a full-screen navigation overlay.

## ✨ Features

* **Responsive Design:** Automatically adapts layout based on screen width using CSS Media Queries.
* **Animated Icon:** The burger icon smoothly transforms into a cross ("X") using CSS transitions.
* **Scroll Locking:** When the menu is open, the background scrolling is disabled (`overflow: hidden`).
* **Layout Shift Prevention:** The JavaScript dynamically calculates the browser's scrollbar width and adds equivalent padding to the body when locking the scroll. This prevents the page content from "jumping" to the right when the scrollbar disappears.

## 🛠 Tech Stack

* **HTML5**
* **CSS3** (Flexbox, Positioning, Transitions)
* **JavaScript (ES6+)**
    * DOM Manipulation
    * Event Listeners
    * Dynamic style calculation

## 🚀 How to Run

1.  Clone the repository:
    ```bash
    git clone [https://github.com/YOUR_USERNAME/REPO_NAME.git](https://github.com/YOUR_USERNAME/REPO_NAME.git)
    ```
2.  Open `index.html` in your browser.

## 📂 Project Structure

* `index.html` — Main layout structure.
* `style.css` — Styles for the header, navigation, and animations.
* `main.js` — Logic for the burger menu toggle and scrollbar width calculation.

---
*Created for educational purposes.*
