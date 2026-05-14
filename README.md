# NBA Arena Distance Map

A static NBA map website built with plain HTML, CSS, JavaScript, Leaflet.js, and OpenStreetMap.

## Features

- Shows all 30 NBA home arenas across the United States and Canada
- Click a marker to view team and arena details
- Click one arena to set point A, then another arena to set point B
- Calculates distance with the Haversine formula
- Displays both kilometers and miles
- Draws a line between selected arenas
- Reset button clears the selection
- Mobile friendly layout

## Project Structure

```text
.
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Run

Open `index.html` in a browser, or serve the folder with any static file server.

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.
