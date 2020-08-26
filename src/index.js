import _ from 'lodash';
import './style.css';
import {homePage} from "./landing";
import {nav} from "./navControl";




const displayController = (()=>{
   
    let content = document.querySelector("#content");
    
    const render = ()=>{
    
        nav.render(content);
       

        homePage.render(content);
        
       

        

    }
   
   return {
       render
   }
    
})();

displayController.render();