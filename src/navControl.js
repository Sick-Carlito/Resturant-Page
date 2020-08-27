

const nav = (()=>{

    let navContent = document.createElement('nav');
    let navHeading = document.createElement('h1');

    //let navList = document.createElement('ul');
    let buttonDiv = document.createElement('div')
    let homeBut = document.createElement('button');
    let menuBut = document.createElement('button');
    let contactBut = document.createElement('button')
    
    

    const render = (content)=>{
        navContent.classList.add("navbar","navbar-inverse");

        navHeading.classList.toggle("navbar-text")
        navHeading.textContent = "Carlitos";
        navContent.appendChild(navHeading);

        

        homeBut.classList.add("btn","btn-warning","navbar-btn","rounded-0")
        homeBut.textContent = "Home";
        homeBut.id = "home-but";
        buttonDiv.appendChild(homeBut);

        menuBut.classList.add("btn","btn-default","navbar-btn","rounded-0")
        menuBut.textContent = "Menu";
        menuBut.id = "menu-but";
        buttonDiv.appendChild(menuBut);

        contactBut.classList.add("btn","btn-default","navbar-btn","rounded-0");
        contactBut.textContent = "Contact";
        contactBut.id = "contact-but"
        buttonDiv.appendChild(contactBut);

        buttonDiv.classList.add("navbar-right");
        buttonDiv.id = "nav-button-container";
        navContent.appendChild(buttonDiv);

        content.appendChild(navContent);



     //   action listeners:

        homeBut.addEventListener('click',()=>{
            homeBut.classList.add("btn-warning");
            menuBut.classList.remove("btn-warning");
        });

        menuBut.addEventListener('click',()=>{
            menuBut.classList.add("btn-warning");
            homeBut.classList.remove("btn-warning");
        });


    } 

    

    return {render}

})();

export {nav}