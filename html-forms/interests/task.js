const interests = Array.from(document.querySelectorAll("li.interest"));

for (let interest of interests)  {
    const interestCheckbox = interest.querySelector(".interest__check");
    const subInterests = Array.from(interest.querySelectorAll("li.interest"));
    const subInterestsCheckboxes = Array.from(interest.querySelectorAll("ul.interests .interest__check"));
    
    
    if(subInterests.length > 0) {
        
        interestCheckbox.addEventListener("change", () => {
            console.log(subInterestsCheckboxes);
            if(interestCheckbox.checked) {
                for (let subInterestsCheckbox of subInterestsCheckboxes) {
                 subInterestsCheckbox.checked = true;
                }
            }  else {
                for (subInterestsCheckbox of subInterestsCheckboxes) {
                  subInterestsCheckbox.checked = false;
                }
            }
        }
        
        )
    }
}
