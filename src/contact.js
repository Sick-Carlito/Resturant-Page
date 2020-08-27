


const contact = (()=>{
    

    let contactContent = document.createElement('div');
    let contactHeading = document.createElement('h2');
    
    const render = (content)=>{
        contactContent.classList.add("container-fluid")
        contactContent.id = "contact-content"

        contactHeading.classList.add("text-center")
        contactHeading.textContent = "Contacts";
        contactContent.appendChild(contactHeading);


        content.appendChild(contactContent);
    }

    const remove = (content)=>{
        content.removeChild(contactContent);
    }

    return{
        render,remove
    }


})();

export {contact}