import _ from 'lodash';
import './style.css';
import {homePage} from "./landing";
import {nav} from "./navControl";
import {menu} from "./menu"
import {contact} from "./contact"




const displayController = (()=>{
   
    let content = document.querySelector("#content");
    
    const render = ()=>{
    
        nav.render(content);
        let menuButton = document.querySelector("#menu-but");
        let homeButton = document.querySelector("#home-but");
        let contactButton = document.querySelector("#contact-but");

        homePage.render(content);

        homeButton.addEventListener('click', () => {
          homePage.render(content);
          menu.render(content);
          menu.remove(content);
          contact.render(content);
          contact.remove(content);
          
        });

        menuButton.addEventListener('click', () => {
          
          menu.render(content);
          homePage.render(content);
          homePage.remove(content);
          contact.render(content);
          contact.remove(content);

        });

          contactButton.addEventListener('click',()=>{
            homePage.render(content);
            menu.render(content);
            contact.render(content);
            homePage.remove(content);
            menu.remove(content);

        });
        
       

        

    }
   
   return {
       render
   }
    
})();

displayController.render();