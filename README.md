# Tarot Mini Website

A simple interactive Tarot reading web app with card information pages, built using **Flask, HTML/CSS/JS, and JSON**. Users can select cards for a reading, view card meanings, and explore different Arcana categories.

---

## **Table of Contents**
- [Features](#features)
- [Demo](#demo)
- [Skills Learned](#skills-learned)
- [Weekly Revision Checklist](#weekly-revision-checklist)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)

---

## **Features**
- Interactive Tarot card reading with selectable number of cards.
- Card flip animations using CSS 3D transforms.
- Overlay to show selected cards and reset selections.
- Dynamic display of card meanings for all Arcana categories.
- Responsive layout using CSS Flexbox and Grid.
- JSON-based card data for easy maintenance.
- Navigation between Home, Cards, and Reading pages.
- Modular JS handling multiple pages in a single script.
- Fetch API to load JSON dynamically and render content.

---

## **Demo**
![alt text](/Screenshot%201.png)

- **Home Page:** Overview and navigation.  
- **Cards Page:** Display all card images with upright, reversed, and general interpretations.  
- **Reading Page:** Select cards for a reading, flip animations, overlay for selected cards.

---

## **Skills Learned**
**Frontend (HTML/CSS/JS):**
- HTML templating using Flask (`url_for` for static files, dynamic content rendering).  
- CSS Flexbox & Grid for responsive layouts.  
- CSS 3D transforms and `backface-visibility` for card flip animations.  
- Overlay modal creation and dynamic content update.  
- DOM manipulation: `createElement`, `innerHTML`, `appendChild`.  
- Event handling with `addEventListener` (click, submit).  
- Fetch API to load JSON asynchronously.  
- Conditional JS execution based on page context (`data-page`).  

**Backend (Flask/Python):**
- Flask routes and template rendering (`@app.route`, `render_template`).  
- Dynamic file system access (`os.listdir`, path construction).  
- Passing dynamic data to templates (image paths, JSON data).  

**Data Handling:**
- JSON structure for card information (`image`, `name`, `upright`, `reversed`, `general`).  
- Loading JSON dynamically and filtering arrays in JS (`forEach`, `map`).  

**Project Logic / UX:**
- Card selection logic with max flip constraints.  
- Resetting state (flipped cards, overlay visibility, form reset).  
- Populating overlays dynamically with selected card names.  
- Buttons to filter and display card details per Arcana category.  

**Version Control & Environment:**
- Git for versioning.  
- Python virtual environments (`venv`) for dependency management.  

---

## **Weekly Revision Checklist**
**Frontend:**
- Practice CSS Flexbox/Grid layouts.  
- Review CSS 3D transforms and transitions.  
- Revisit DOM manipulation and dynamic content updates.  
- Event handling for dynamic elements.  

**Backend / Flask:**
- Flask routes and template rendering.  
- Passing data from Python to templates.  
- Static file handling with `url_for`.  

**Data Handling:**
- JSON structure & Fetch API.  
- Array and object iteration (`map`, `forEach`).  

**Project Logic:**
- Card selection, flip limits, and reset flow.  
- Conditional JS execution based on page context.  

**Version Control & Environment:**
- Git: commits, branches, viewing history.  
- Virtual environment: installing packages, managing dependencies.  

**Mini-Challenges:**
- Add search/filter for cards.  
- Modularize JS code per feature.  
- Add local storage for saving selections.

---

## **Installation**
1. Clone the repo:
   ```bash
   git clone <repo-url>
2. Navigate to the project folder:
    ```bash
    cd tarot-mini-website
3. Create a virtual environment and activate it:
    ```bash
    python -m venv venv
    source venv/bin/activate   # Linux/macOS
    venv\Scripts\activate      # Windows
4. Install dependencies:
    ```bash
    pip install flask

## **Usage**
1. Run the Flask server:
    ```bash
    python main.py
2. Open the web app in your browser
    ```bash
    http://127.0.0.1:5000/
3. Navigate to the Cards or Reading page and interact with the cards.

## **Folder Structure**
tarot-mini-website/
├─ main.py
├─ templates/
│  ├─ index.html
│  ├─ cards.html
│  └─ reading.html
├─ static/
│  ├─ css/index.css
│  ├─ js/script.js
│  ├─ data/cards.json
│  └─ images/
└─ venv/


