const interests = Array.from(document.querySelectorAll("li.interest"));

for (let interest of interests)  {
    const interestCheckbox = interest.querySelector(".interest__check");
    const subInterests = Array.from(interest.querySelectorAll("li.interest"));
    const subInterestsCheckboxes = Array.from(interest.querySelectorAll("ul.interests .interest__check"));
    
    
    if(subInterests.length > 0) {
        
        interestCheckbox.addEventListener("change", () => {
            if(interestCheckbox.checked) {
                for (let subInterestsCheckbox of subInterestsCheckboxes) {
                 subInterestsCheckbox.checked = true;
                }
            }  else {
                for (let subInterestsCheckbox of subInterestsCheckboxes) {
                  subInterestsCheckbox.checked = false;
                }
            }
        }
        
        )

        for(let subInterestsCheckbox of subInterestsCheckboxes) {
            subInterestsCheckbox.addEventListener("change", () => {
                if(!subInterestsCheckbox.checked) {
                    interestCheckbox.checked = false;
                } else {
                    let checkedCounter = 0;
                    for(let subInterestsCheckbox of subInterestsCheckboxes) {
                        if(subInterestsCheckbox.checked) {
                            checkedCounter++;
                        } else {
                            break;
                        }
                    }
                    if(checkedCounter === subInterestsCheckboxes.length) {
                        interestCheckbox.checked = true;
                    }

                }
            })
        }
    } 
}
