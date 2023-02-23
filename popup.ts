document.getElementById("open-terminal")?.addEventListener("click", () => {
  chrome.windows.create({
    url: "http://127.0.0.1:7681/",
    width: 800,
    height: 600,
    type: "popup",
  });
});
