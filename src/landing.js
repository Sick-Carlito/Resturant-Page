

const homePage = (()=> {
    
    let homeContent = document.createElement('div');
    let homeHeading = document.createElement('h4');
    let homeHeading1 = document.createElement('h5');
    let homeHeading2 = document.createElement('h4');
   

    const render = (content)=>{


        homeContent.classList.add("container-fluid","text-center");
        homeHeading.textContent = "Welcome to"
        homeHeading.classList.add("homeheading");
        homeHeading1.textContent = "CARLITOS' RESTURANT"
        homeHeading1.classList.add("homeheading1");
        homeHeading2.textContent = "Chakula za kinyumbani, kare!!!"
        homeHeading2.classList.add("homeheading2");
        homeContent.appendChild(homeHeading);
        homeContent.appendChild(homeHeading1);
        homeContent.appendChild(homeHeading2);

  


        content.appendChild(homeContent);
    }

    const remove = (content)=>{
        content.removeChild(homeContent);
    }

    return {
        render,remove
    }

})();

export {homePage}