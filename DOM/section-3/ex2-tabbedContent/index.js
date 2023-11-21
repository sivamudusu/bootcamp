function showTab(tabId) {
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach((tab) => {
    tab.style.display = "none";
  });
  const selected = document.getElementById(tabId);
  if (selected) {
    selected.style.display = "block";
  }
}
