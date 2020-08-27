const menu = (()=>{

    let menuContent = document.createElement('div');
    let menuHeading = document.createElement('h2');
    
    let startersDiv = document.createElement('div');
    let starterHeading = document.createElement('h4')
    
    const render = (content)=>{
        menuContent.classList.add("container-fluid");

        menuHeading.textContent = "Menu";
        menuHeading.classList.add("text-center")
        menuContent.appendChild(menuHeading);

        starterHeading.textContent = "Starters";
        startersDiv.appendChild(starterHeading);
        menuContent.appendChild(startersDiv);

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