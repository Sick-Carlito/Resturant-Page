import _ from 'lodash';
import './style.css';
import myName from './landing';



function component() {
    const element = document.createElement('div');
    

 
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = myName('Carl');
    element.classList.add('content');
    
    return element;
  }


document.body.appendChild(component());