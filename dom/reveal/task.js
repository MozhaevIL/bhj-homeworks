const blockInViewport = function(block) {
    const viewportHeight = window.innerHeight;
    const blockTop = block.getBoundingClientRect().top;
    
    return blockTop > viewportHeight / 2 ? false : true;
}

const revealBlocks = Array.from(document.querySelectorAll(".reveal"));

function blockCheck() {
    for (let revealBlock of revealBlocks) {
        if (blockInViewport(revealBlock)) {
        revealBlock.classList.add("reveal_active");
        }
    }
}


window.addEventListener("scroll", blockCheck);





