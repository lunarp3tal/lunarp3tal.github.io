// Example: A simple "Click to Copy" function for your Discord or username
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied: " + text);
    });
}

// Example: Toggle Dark/Light Mode (very common in gaming portfolios)
function toggleTheme() {
    document.body.classList.toggle('light-mode');
}
