// NBA arena names checked as of 2026-05-14.
// Naming-rights arenas may change over time.
const arenas = [
  {
    team: "Atlanta Hawks",
    arena: "State Farm Arena",
    city: "Atlanta, GA",
    teamId: "1610612737",
    lat: 33.7573,
    lng: -84.3963,
  },
  {
    team: "Boston Celtics",
    arena: "TD Garden",
    city: "Boston, MA",
    teamId: "1610612738",
    lat: 42.3662,
    lng: -71.0621,
  },
  {
    team: "Brooklyn Nets",
    arena: "Barclays Center",
    city: "Brooklyn, NY",
    teamId: "1610612751",
    lat: 40.6826,
    lng: -73.9754,
  },
  {
    team: "Charlotte Hornets",
    arena: "Spectrum Center",
    city: "Charlotte, NC",
    teamId: "1610612766",
    lat: 35.2251,
    lng: -80.8392,
  },
  {
    team: "Chicago Bulls",
    arena: "United Center",
    city: "Chicago, IL",
    teamId: "1610612741",
    lat: 41.8807,
    lng: -87.6742,
  },
  {
    team: "Cleveland Cavaliers",
    arena: "Rocket Arena",
    city: "Cleveland, OH",
    teamId: "1610612739",
    lat: 41.4965,
    lng: -81.6882,
  },
  {
    team: "Dallas Mavericks",
    arena: "American Airlines Center",
    city: "Dallas, TX",
    teamId: "1610612742",
    lat: 32.7905,
    lng: -96.8103,
  },
  {
    team: "Denver Nuggets",
    arena: "Ball Arena",
    city: "Denver, CO",
    teamId: "1610612743",
    lat: 39.7487,
    lng: -105.0077,
  },
  {
    team: "Detroit Pistons",
    arena: "Little Caesars Arena",
    city: "Detroit, MI",
    teamId: "1610612765",
    lat: 42.3411,
    lng: -83.0552,
  },
  {
    team: "Golden State Warriors",
    arena: "Chase Center",
    city: "San Francisco, CA",
    teamId: "1610612744",
    lat: 37.768,
    lng: -122.3877,
  },
  {
    team: "Houston Rockets",
    arena: "Toyota Center",
    city: "Houston, TX",
    teamId: "1610612745",
    lat: 29.7508,
    lng: -95.3621,
  },
  {
    team: "Indiana Pacers",
    arena: "Gainbridge Fieldhouse",
    city: "Indianapolis, IN",
    teamId: "1610612754",
    lat: 39.764,
    lng: -86.1555,
  },
  {
    team: "LA Clippers",
    arena: "Intuit Dome",
    city: "Inglewood, CA",
    teamId: "1610612746",
    lat: 33.9449,
    lng: -118.3438,
  },
  {
    team: "Los Angeles Lakers",
    arena: "Crypto.com Arena",
    city: "Los Angeles, CA",
    teamId: "1610612747",
    lat: 34.043,
    lng: -118.2673,
  },
  {
    team: "Memphis Grizzlies",
    arena: "FedExForum",
    city: "Memphis, TN",
    teamId: "1610612763",
    lat: 35.1382,
    lng: -90.0505,
  },
  {
    team: "Miami Heat",
    arena: "Kaseya Center",
    city: "Miami, FL",
    teamId: "1610612748",
    lat: 25.7814,
    lng: -80.187,
  },
  {
    team: "Milwaukee Bucks",
    arena: "Fiserv Forum",
    city: "Milwaukee, WI",
    teamId: "1610612749",
    lat: 43.0451,
    lng: -87.9172,
  },
  {
    team: "Minnesota Timberwolves",
    arena: "Target Center",
    city: "Minneapolis, MN",
    teamId: "1610612750",
    lat: 44.9795,
    lng: -93.2761,
  },
  {
    team: "New Orleans Pelicans",
    arena: "Smoothie King Center",
    city: "New Orleans, LA",
    teamId: "1610612740",
    lat: 29.949,
    lng: -90.0821,
  },
  {
    team: "New York Knicks",
    arena: "Madison Square Garden",
    city: "New York, NY",
    teamId: "1610612752",
    lat: 40.7505,
    lng: -73.9934,
  },
  {
    team: "Oklahoma City Thunder",
    arena: "Paycom Center",
    city: "Oklahoma City, OK",
    teamId: "1610612760",
    lat: 35.4634,
    lng: -97.5151,
  },
  {
    team: "Orlando Magic",
    arena: "Kia Center",
    city: "Orlando, FL",
    teamId: "1610612753",
    lat: 28.5392,
    lng: -81.3839,
  },
  {
    team: "Philadelphia 76ers",
    arena: "Xfinity Mobile Arena",
    city: "Philadelphia, PA",
    teamId: "1610612755",
    lat: 39.9012,
    lng: -75.172,
  },
  {
    team: "Phoenix Suns",
    arena: "Mortgage Matchup Center",
    city: "Phoenix, AZ",
    teamId: "1610612756",
    lat: 33.4457,
    lng: -112.0712,
  },
  {
    team: "Portland Trail Blazers",
    arena: "Moda Center",
    city: "Portland, OR",
    teamId: "1610612757",
    lat: 45.5316,
    lng: -122.6668,
  },
  {
    team: "Sacramento Kings",
    arena: "Golden 1 Center",
    city: "Sacramento, CA",
    teamId: "1610612758",
    lat: 38.5802,
    lng: -121.4997,
  },
  {
    team: "San Antonio Spurs",
    arena: "Frost Bank Center",
    city: "San Antonio, TX",
    teamId: "1610612759",
    lat: 29.427,
    lng: -98.4375,
  },
  {
    team: "Toronto Raptors",
    arena: "Scotiabank Arena",
    city: "Toronto, ON",
    teamId: "1610612761",
    lat: 43.6435,
    lng: -79.3791,
  },
  {
    team: "Utah Jazz",
    arena: "Delta Center",
    city: "Salt Lake City, UT",
    teamId: "1610612762",
    lat: 40.7683,
    lng: -111.9011,
  },
  {
    team: "Washington Wizards",
    arena: "Capital One Arena",
    city: "Washington, DC",
    teamId: "1610612764",
    lat: 38.8981,
    lng: -77.0209,
  },
];

const northAmericaBounds = L.latLngBounds([24, -125], [50, -66]);
const map = L.map("map", {
  scrollWheelZoom: true,
  zoomControl: true,
  worldCopyJump: false,
  maxBounds: northAmericaBounds.pad(0.18),
  maxBoundsViscosity: 0.6,
}).fitBounds(northAmericaBounds, { padding: [18, 18] });

const primaryTiles = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 18,
    noWrap: true,
    updateWhenIdle: true,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const backupTiles = L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
  {
    maxZoom: 18,
    noWrap: true,
    updateWhenIdle: true,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  },
);

let tileErrors = 0;
primaryTiles.on("tileerror", () => {
  tileErrors += 1;
  if (tileErrors === 3 && !map.hasLayer(backupTiles)) {
    map.removeLayer(primaryTiles);
    backupTiles.addTo(map);
  }
});

const ui = {
  pointAName: document.querySelector("#pointAName"),
  pointAArena: document.querySelector("#pointAArena"),
  pointALogo: document.querySelector("#pointALogo"),
  pointAFallback: document.querySelector("#pointAFallback"),
  pointBName: document.querySelector("#pointBName"),
  pointBArena: document.querySelector("#pointBArena"),
  pointBLogo: document.querySelector("#pointBLogo"),
  pointBFallback: document.querySelector("#pointBFallback"),
  distanceValue: document.querySelector("#distanceValue"),
  resetButton: document.querySelector("#resetButton"),
  searchForm: document.querySelector("#searchForm"),
  searchInput: document.querySelector("#searchInput"),
};

let pointA = null;
let pointB = null;
let routeLine = null;
const markers = new Map();

arenas.forEach((arena) => {
  const marker = L.marker([arena.lat, arena.lng], {
    icon: createArenaIcon(arena),
    riseOnHover: true,
    title: `${arena.team} - ${arena.arena}`,
  }).addTo(map);

  marker
    .bindPopup(
      `<p class="popup-team">${arena.team}</p><p class="popup-arena">${arena.arena}<br>${arena.city}</p>`,
    )
    .on("click", () => selectArena(arena));

  markers.set(arena.team, marker);
});

ui.resetButton.addEventListener("click", resetSelection);
ui.searchForm.addEventListener("submit", handleSearch);

function selectArena(arena) {
  if (pointA && pointA.team === arena.team) {
    markers.get(arena.team).openPopup();
    return;
  }

  if (pointA && pointB) {
    resetSelection();
  }

  if (!pointA) {
    pointA = arena;
    updateMarker(arena, true);
  } else if (!pointB) {
    pointB = arena;
    updateMarker(arena, true);
    drawRoute();
  }

  updateResetButton();
  updatePanel();
}

function updatePanel() {
  ui.pointAName.textContent = pointA ? pointA.team : "";
  ui.pointAArena.textContent = pointA
    ? `${pointA.arena} - ${pointA.city}`
    : "";
  updateSelectionLogo("A", pointA);

  ui.pointBName.textContent = pointB ? pointB.team : "";
  ui.pointBArena.textContent = pointB
    ? `${pointB.arena} - ${pointB.city}`
    : "";
  updateSelectionLogo("B", pointB);

  if (!pointA || !pointB) {
    ui.distanceValue.textContent = "--";
    return;
  }

  const km = haversineDistance(pointA, pointB);
  const miles = km * 0.621371;
  ui.distanceValue.textContent = `${km.toLocaleString(undefined, {
    maximumFractionDigits: 0,
  })} km / ${miles.toLocaleString(undefined, { maximumFractionDigits: 0 })} mi`;
}

function drawRoute() {
  if (routeLine) {
    map.removeLayer(routeLine);
  }

  routeLine = L.polyline(
    [
      [pointA.lat, pointA.lng],
      [pointB.lat, pointB.lng],
    ],
    {
      color: "#d7263d",
      weight: 4,
      opacity: 0.9,
      dashArray: "10 8",
    },
  ).addTo(map);

  map.panTo(routeLine.getBounds().getCenter(), { animate: true });
}

function resetSelection() {
  pointA = null;
  pointB = null;

  if (routeLine) {
    map.removeLayer(routeLine);
    routeLine = null;
  }

  arenas.forEach((arena) => markers.get(arena.team).setIcon(createArenaIcon(arena)));
  updatePanel();
  updateResetButton();
  map.fitBounds(northAmericaBounds, { padding: [18, 18] });
}

function updateMarker(arena, isSelected) {
  const marker = markers.get(arena.team);
  marker.setIcon(createArenaIcon(arena, isSelected));
  marker.openPopup();
}

function handleSearch(event) {
  event.preventDefault();

  const keyword = ui.searchInput.value.trim().toLowerCase();
  if (!keyword) {
    return;
  }

  const result = arenas.find((arena) =>
    [arena.team, arena.arena, arena.city].some((value) =>
      value.toLowerCase().includes(keyword),
    ),
  );

  if (!result) {
    ui.searchInput.select();
    return;
  }

  const marker = markers.get(result.team);
  map.setView([result.lat, result.lng], Math.max(map.getZoom(), 8), {
    animate: true,
  });
  marker.openPopup();
}

function updateResetButton() {
  ui.resetButton.classList.toggle("is-visible", Boolean(pointA || pointB));
}

function updateSelectionLogo(slot, arena) {
  const logo = slot === "A" ? ui.pointALogo : ui.pointBLogo;
  const fallback = slot === "A" ? ui.pointAFallback : ui.pointBFallback;
  const wrapper = logo.closest(".selection-logo");

  if (!arena) {
    logo.hidden = true;
    logo.removeAttribute("src");
    logo.alt = "";
    wrapper.classList.remove("has-logo");
    fallback.hidden = false;
    fallback.textContent =
      slot === "A" ? "Select the 1st Team" : "Select the 2nd Team";
    return;
  }

  fallback.hidden = true;
  logo.hidden = false;
  logo.alt = `${arena.team} logo`;
  wrapper.classList.add("has-logo");
  logo.onerror = () => {
    logo.hidden = true;
    logo.removeAttribute("src");
    wrapper.classList.remove("has-logo");
    fallback.hidden = false;
    fallback.textContent = teamAbbr(arena.team);
  };
  logo.src = logoUrl(arena.teamId);
}

function createArenaIcon(arena, isSelected = false) {
  const selectedClass = isSelected ? " arena-pin-selected" : "";
  return L.divIcon({
    className: `arena-pin${selectedClass}`,
    html: `
      <button class="logo-marker" type="button" aria-label="Select ${arena.team}">
        <img src="${logoUrl(arena.teamId)}" alt="${arena.team} logo" onerror="this.hidden = true" />
        <span class="marker-fallback">${teamAbbr(arena.team)}</span>
      </button>
    `,
    iconSize: isSelected ? [58, 58] : [46, 46],
    iconAnchor: isSelected ? [29, 29] : [23, 23],
    popupAnchor: [0, isSelected ? -31 : -25],
    tooltipAnchor: [0, isSelected ? -30 : -25],
  });
}

function logoUrl(teamId) {
  return `https://cdn.nba.com/logos/nba/${teamId}/primary/L/logo.svg`;
}

function teamAbbr(team) {
  const overrides = {
    "Golden State Warriors": "GSW",
    "LA Clippers": "LAC",
    "Los Angeles Lakers": "LAL",
    "New Orleans Pelicans": "NOP",
    "New York Knicks": "NYK",
    "Oklahoma City Thunder": "OKC",
    "Portland Trail Blazers": "POR",
    "San Antonio Spurs": "SAS",
  };

  return (
    overrides[team] ||
    team
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 3)
      .toUpperCase()
  );
}

function haversineDistance(from, to) {
  const earthRadiusKm = 6371;
  const dLat = toRadians(to.lat - from.lat);
  const dLng = toRadians(to.lng - from.lng);
  const lat1 = toRadians(from.lat);
  const lat2 = toRadians(to.lat);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) *
      Math.cos(lat2) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadiusKm * c;
}

function toRadians(degrees) {
  return (degrees * Math.PI) / 180;
}
