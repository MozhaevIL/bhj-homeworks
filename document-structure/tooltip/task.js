const tooltips = Array.from(document.querySelectorAll(".has-tooltip"));

for (let tooltip of tooltips) {
    tooltip.addEventListener("click", (evt) => {
        const activeTooltips = Array.from(document.querySelectorAll(".tooltip_active"));
        let tooltipLeft, tooltipTop;
        
        
        for (let activeTooltip of activeTooltips) {
            activeTooltip.remove();
        }            
        
        
        if(tooltip.dataset.position === "right") {
            tooltipLeft = `${tooltip.getBoundingClientRect().left + tooltip.offsetWidth}px`;
            tooltipTop = `${tooltip.getBoundingClientRect().top  - tooltip.offsetHeight * 0.5}px`;
            tooltipRight = "auto";

        } else if(tooltip.dataset.position === "top") {
            tooltipLeft = `${tooltip.getBoundingClientRect().left}px`;
            tooltipTop = `${tooltip.getBoundingClientRect().top -tooltip.offsetHeight * 1.5}px`;
            tooltipRight = "auto";

        } else if(tooltip.dataset.position === "left") {
            tooltipLeft = "auto";
            tooltipTop = `${tooltip.getBoundingClientRect().top  - tooltip.offsetHeight * 0.5}px`;
            tooltipRight = `${window.innerWidth - tooltip.getBoundingClientRect().right + tooltip.offsetWidth}px`;
            //Есть какие-то способы вычислить правый отступ точнее?

        } else {
            tooltipLeft = `${tooltip.getBoundingClientRect().left}px`;
            tooltipTop = `${tooltip.getBoundingClientRect().top + tooltip.offsetHeight}px`;
            tooltipRight = "auto";
        }
           
               
        if((tooltip.nextElementSibling) && (tooltip.nextElementSibling.classList.contains("tooltip"))) {
            tooltip.nextElementSibling.remove();
        } else {
            tooltip.insertAdjacentHTML("afterEnd", `<div class="tooltip tooltip_active" style="top: ${tooltipTop}; left: ${tooltipLeft}; right: ${tooltipRight}">${tooltip.title}</div>`);
            }

        evt.preventDefault();
    }
    )
}