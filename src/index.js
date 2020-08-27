import _ from 'lodash';
import './style.css';
import {homePage} from "./landing";
import {nav} from "./navControl";
import {menu} from "./menu"




const displayController = (()=>{
   
    let content = document.querySelector("#content");
    
    const render = ()=>{
    
        nav.render(content);
        let menuButton = document.querySelector("#menu-but");
        let homeButton = document.querySelector("#home-but");
       

        homePage.render(content);

        homeButton.addEventListener('click', () => {
          homePage.render(content);
          menu.render(content);
          menu.remove(content);
          
        });

        menuButton.addEventListener('click', () => {
          
          homePage.render(content);
          menu.render(content);
          homePage.remove(content);
        });
        
       

        

    }
   
   return {
       render
   }
    
})();

displayController.render();