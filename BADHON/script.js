const websites = [
    "https://www.bbc.com",
    "https://www.facebook.com",
    "https://www.tiktok.com",
    "https://www.instagram.com",
    "https://www.x.com",
];

document.getElementById("random-link").addEventListener("click", function(event) {
    event.preventDefault();
    const randomWebsite = websites[Math.floor(Math.random() * websites.length)];
    window.open(randomWebsite, "_blank");
});