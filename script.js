// Read URL parameters
const params = new URLSearchParams(window.location.search);

// Get values
const id = params.get("id") || "";
const title = params.get("title") || "Untitled";
const duration = params.get("duration") || "";
const recipient = params.get("to") || "Friend";
const message = params.get("msg") || "";
const date = params.get("date") || "";
const occasion = params.get("occasion") || "";

// YouTube thumbnail
const thumbnail =
`https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

// Fill page
document.getElementById("thumbnail").src = thumbnail;

document.getElementById("title").textContent = title;

document.getElementById("duration").textContent = duration;

document.getElementById("recipient").textContent = recipient;

document.getElementById("message").textContent = message;

document.getElementById("date").textContent = date;

document.getElementById("occasion").textContent = occasion;

// Watch button
document.getElementById("watchButton").href =
`https://youtu.be/${id}`;

document.getElementById("watchButton").target = "_blank";

// Hero background
const hero = document.querySelector(".hero");

hero.style.backgroundImage = `
linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)),
url(${thumbnail})
`;

// -----------------------------
// Dynamic Theme using Thumbnail
// -----------------------------

const img = document.getElementById("thumbnail");

img.crossOrigin = "Anonymous";

img.addEventListener("load", () => {

    const colorThief = new ColorThief();

    const color = colorThief.getColor(img);

    const rgb = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;

    // Change button color
    document.getElementById("watchButton").style.background = rgb;

function makePastel(rgb){

    const values = rgb.match(/\d+/g).map(Number);

    const r = Math.round(values[0] + (255-values[0]) * 0.92);

    const g = Math.round(values[1] + (255-values[1]) * 0.92);

    const b = Math.round(values[2] + (255-values[2]) * 0.92);

    return `rgb(${r}, ${g}, ${b})`;

const pageColor = makePastel(rgb);

document.documentElement.style.setProperty(
    "--page-color",
    pageColor
);

}

    // Signature color
    document.querySelector(".signature").style.color = rgb;

    // Header accent
    document.querySelector(".gift").style.color = rgb;

});

const description = params.get("desc") || "";
document.getElementById("description").textContent = description;

hero.style.backgroundSize = "140%";