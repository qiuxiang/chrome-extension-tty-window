chrome.action.onClicked.addListener(() => {
  chrome.windows.create({
    url: "http://127.0.0.1:7681/",
    width: 798,
    height: 570,
    type: "popup",
  });
});
