


const contact = (()=>{
    

    let contactContent = document.createElement('div');
    let contactHeading = document.createElement('h2');

    let contactDiv = document.createElement('div');
    let contactsText = document.createElement('h4');
    let contactsText1 = document.createElement('h3');
    let contactsText2 = document.createElement('h3');
    
    const render = (content)=>{
        contactContent.classList.add("container-fluid");
        contactContent.id = "contact-content"

        contactHeading.classList.add("text-center");
        contactHeading.textContent = "Contacts";
        contactContent.appendChild(contactHeading);

        contactDiv.classList.add("container-fluid","text-center");
        contactsText.textContent = "Contact us on:"
        contactsText1.classList.add("homeheading1");
        contactsText1.textContent = "carlitos@gmail.com"
        contactsText1.classList.add("homeheading");
        contactsText2.textContent = "+254 704 965 601"
        contactsText2.classList.add("homeheading");
        contactDiv.appendChild(contactsText);
        contactDiv.appendChild(contactsText1);
        contactDiv.appendChild(contactsText2);
        contactContent.appendChild(contactDiv);
        



        content.appendChild(contactDiv);
    }

    const remove = (content)=>{
        content.removeChild(contactDiv);
    }

    return{
        render,remove
    }


})();

export {contact}