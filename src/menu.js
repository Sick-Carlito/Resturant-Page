const menu = (()=>{

    let menuContent = document.createElement('div');
    let menuHeading = document.createElement('h2');
    
    let startersDiv = document.createElement('div');
    let starterHeading = document.createElement('h4');

    let breakfastDiv = document.createElement('div');
    let breakFastHeading = document.createElement('h4');
    let breakFastHeading1 = document.createElement('h4');
    let breakFastHeading2 = document.createElement('h4');
    let breakFastHeading3 = document.createElement('h4');

    
    let startersDiv1 = document.createElement('div');
    let starterHeading1 = document.createElement('h4');

    
    let breakFastHeading4 = document.createElement('h4');
    let breakFastHeading5 = document.createElement('h4');
    let breakFastHeading6 = document.createElement('h4');
    let breakFastHeading7 = document.createElement('h4');

     let startersDiv3 = document.createElement('div');
    let starterHeading3 = document.createElement('h4');

    
    let breakFastHeading8 = document.createElement('h4');
    let breakFastHeading9 = document.createElement('h4');
    let breakFastHeading10 = document.createElement('h4');
    let breakFastHeading11 = document.createElement('h4');
    
    
    const render = (content)=>{
        menuContent.classList.add("container-fluid");
        menuContent.classList.add("menuBackground")

        menuHeading.textContent = "Menu";
        menuHeading.classList.add("text-center")
        menuHeading.classList.add("bgFonts")
        menuContent.appendChild(menuHeading);

        starterHeading.textContent = "Breakfast";
        starterHeading.classList.add("starterFonts")
        startersDiv.appendChild(starterHeading);
        menuContent.appendChild(startersDiv);

        breakFastHeading.textContent = "1. breakfast....$10000";
        breakFastHeading1.textContent = "1. breakfast....$10000";
        breakFastHeading2.textContent = "1. breakfast....$10000";
        breakFastHeading3.textContent = "1. breakfast....$10000";
        breakFastHeading.classList.add("starterFonts1");
        breakFastHeading1.classList.add("starterFonts1");
        breakFastHeading2.classList.add("starterFonts1");
        breakFastHeading3.classList.add("starterFonts1");
        breakfastDiv.appendChild(breakFastHeading);
        breakfastDiv.appendChild(breakFastHeading1);
        breakfastDiv.appendChild(breakFastHeading2);
        breakfastDiv.appendChild(breakFastHeading3);
        menuContent.appendChild(breakfastDiv);

        starterHeading1.textContent = "Lunch";
        starterHeading1.classList.add("positions");
        starterHeading1.classList.add("starterFonts");

        startersDiv1.appendChild(starterHeading1);
        menuContent.appendChild(startersDiv1);


        breakFastHeading4.textContent = "2. lunch....$10000";
        breakFastHeading5.textContent = "2. lunch....$10000";
        breakFastHeading6.textContent = "2. lunch....$10000";
        breakFastHeading7.textContent = "2. lunch....$10000";
        breakFastHeading4.classList.add("starterFonts1");
        breakFastHeading5.classList.add("starterFonts1");
        breakFastHeading6.classList.add("starterFonts1");
        breakFastHeading7.classList.add("starterFonts1");
        breakFastHeading4.classList.add("positions1");
        breakFastHeading5.classList.add("positions1");
        breakFastHeading6.classList.add("positions1");
        breakFastHeading7.classList.add("positions1");
        breakfastDiv.appendChild(breakFastHeading4);
        breakfastDiv.appendChild(breakFastHeading5);
        breakfastDiv.appendChild(breakFastHeading6);
        breakfastDiv.appendChild(breakFastHeading7);
        menuContent.appendChild(breakfastDiv);

        starterHeading3.textContent = "Dinner";
        starterHeading3.classList.add("positions2");
        starterHeading3.classList.add("starterFonts");

        startersDiv3.appendChild(starterHeading3);
        menuContent.appendChild(startersDiv3);


        breakFastHeading8.textContent = "3. dinner....$10000";
        breakFastHeading9.textContent = "3. dinner....$10000";
        breakFastHeading10.textContent = "3. dinner....$10000";
        breakFastHeading11.textContent = "3. dinner....$10000";
        breakFastHeading8.classList.add("starterFonts1");
        breakFastHeading9.classList.add("starterFonts1");
        breakFastHeading10.classList.add("starterFonts1");
        breakFastHeading11.classList.add("starterFonts1");
        breakFastHeading8.classList.add("positions3");
        breakFastHeading9.classList.add("positions3");
        breakFastHeading10.classList.add("positions3");
        breakFastHeading11.classList.add("positions3");
        breakfastDiv.appendChild(breakFastHeading8);
        breakfastDiv.appendChild(breakFastHeading9);
        breakfastDiv.appendChild(breakFastHeading10);
        breakfastDiv.appendChild(breakFastHeading11);
        menuContent.appendChild(breakfastDiv);

        content.appendChild(menuContent);
    }

    const remove = (content)=>{
        content.removeChild(menuContent);
    }

    return{
        render, remove
    }

})();

export {menu}