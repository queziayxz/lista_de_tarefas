const divImportant = document.querySelector(".important");
const divLittle = document.querySelector(".little");
const divIF = document.querySelector(".if-t");

const addImportant = document.querySelector(".add-important");
const addLittle = document.querySelector(".add-little");
const addIF = document.querySelector(".add-if");

var idList = 0;

addImportant.addEventListener("click", function() {
    creteInput(divImportant);
}) 

addLittle.addEventListener("click", function() {
    creteInput(divLittle);
})

addIF.addEventListener("click", function() {
    creteInput(divIF);
})


function creteInput(divClick)
{
    
    const divContentText = document.createElement("div");
    const textContent = document.createElement("input");
    const buttonContent = document.createElement("input");

    textContent.type = 'text';

    buttonContent.type = 'button';
    buttonContent.classList.add("btn-concluded");

    divContentText.classList.add("div-add-conteudo");

    divContentText.style.display = "flex";

    divContentText.appendChild(textContent)
    divContentText.appendChild(buttonContent)

    divClick.appendChild(divContentText);

    buttonContent.addEventListener("click", function() {
        const divContent = document.createElement("div");
        const checkboxContent = document.createElement("input");
        const label = document.createElement("label");

        checkboxContent.type = "checkbox";
        checkboxContent.id = idList;
        checkboxContent.name = idList;

        label.htmlFor = idList;
        label.textContent = textContent.value;

        divContent.classList.add("div-contents");
        
        divClick.removeChild(divContentText);
        
        divContent.appendChild(checkboxContent);
        divContent.appendChild(label);

        divClick.appendChild(divContent);

    })

    idList++;

}