

const homePage = (()=> {
    
    let homeContent = document.createElement('div');
    let homeHeading = document.createElement('h4');
   

    const render = (content)=>{


        homeContent.classList.add("container-fluid","text-center");
        homeHeading.textContent = "Taste the feeling"
        homeContent.appendChild(homeHeading);

  


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