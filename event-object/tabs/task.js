const tabButtons = Array.from(document.querySelectorAll(".tab"));
const tabContents = Array.from(document.querySelectorAll(".tab__content"));

for(let tabButton of tabButtons) {
    tabButton.addEventListener("click", () => {
        const activeTabButton = document.querySelector(".tab_active");
        activeTabButton.className = "tab";
        const activeTabContent = document.querySelector(".tab__content_active");
        activeTabContent.className = "tab__content";
        
        tabButton.className = "tab tab_active";
        tabContents[tabButtons.indexOf(tabButton)].className = "tab__content tab__content_active";
    }
    )
}