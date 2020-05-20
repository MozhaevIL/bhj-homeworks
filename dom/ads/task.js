const ads = Array.from(document.querySelectorAll(".rotator__case"));

function adsRotation() {
    const activeAd = document.querySelector(".rotator__case_active");
    let counter = ads.indexOf(activeAd);
    console.log(counter);
    if (counter === ads.length - 1) {
        counter = 0;
    } else {
    counter += 1;
    }
    activeAd.classList.remove("rotator__case_active");
    ads[counter].classList.add("rotator__case_active");
    ads[counter].setAttribute("style", `color:${ads[counter].dataset.color}`);
    
    setTimeout(adsRotation, ads[counter].dataset.speed)
 

}

adsRotation();

