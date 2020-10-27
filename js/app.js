const sections = document.querySelector("ul");
const fragment = document.createDocumentFragment();
const allSection = document.querySelectorAll("section"); //select all section to use it in event listener 
/*add for loop to create the list of sections to scroll down to the section that we want*/
for (let i = 1 ; i <= allSection.length; i++) {
    const list = document.createElement("li"); //create list
    const link = document.createElement("a"); //create link
    link.textContent = "section" +i; //add text to section in the list of navbar 
    link.addEventListener("click", function () {
        allSection[i-1].scrollIntoView({behavior: "smooth"});
     }); //  add event to scroll to the place we want 
    list.appendChild(link);
    fragment.appendChild(list);
    
};
    
sections.appendChild(fragment);

