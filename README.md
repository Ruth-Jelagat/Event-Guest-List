# Event Guest List Manager

This is a small project I created to practice working with **vanilla JavaScript** — no libraries, no frameworks — just pure HTML, CSS, and JS. The idea was to build a simple yet functional **Event Guest List Manager** where I could explore DOM manipulation, event handling, and conditional rendering in the browser.
* The guest list is limited to **10 guests by default**, but you can easily change this limit in the JavaScript file.
* I built this project using only **plain HTML, CSS, and JavaScript** — no extra libraries or tools.
* I tested everything manually by interacting with the page in the browser.

## Project Structure

Here’s how I organized the files:

├── index.html       // The main structure and form setup
├── style.css        // Styling to make the page look nice
└── src/
    └── index.js    // All the JavaScript logic for adding, removing, and toggling guests

## Features I Built

As the user, here’s what you can do in this app:

1. **Add Guests**

   * Type a guest’s name into the input field.
   * Click the **"Submit" button** to add the name to the list.
   * The name immediately appears on the page.

2. **Remove Guests**

   * Every guest gets a **"Remove" button** beside their name.
   * Clicking this will delete that guest from the list.

3. **Limit the List to 10 Guests**

   * You can only add up to **10 people** to the list.
   * If you try adding more, an alert message will let you know you’ve reached the limit.

4. **Toggle RSVP Status**

   * Each guest has a **"Toggle RSVP" button**.
   * Clicking this switches their status between **"Attending"** and **"Not Attending"**.

## How to Run It

1. Clone or download the project:

```bash
git clone <repository-url>
cd event-guest-list-manager
```

2. Open the `index.html` file in your favorite browser.

3. Try adding guests, removing them, and toggling their RSVP status to see everything working!

## Styling Notes

All the styling for this project is inside the `style.css` file. You can change colors, fonts, and layouts if you want to personalize the look.
