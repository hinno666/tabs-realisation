document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".steps__tab");
  const tabsContent = document.querySelectorAll(".steps__tab-content");

  function switchTab(e) {
    tabsContent.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });

    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    const tabId = e.target.id;
    const tabContentToShow = document.getElementById(tabId + "-content");

    tabContentToShow.classList.add("active");
    e.target.classList.add("active");
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", switchTab);
  });

  tabs[0].click();
});
