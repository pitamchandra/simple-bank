// for get input data 
function getInputDataById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    inputField.value = '';
    return inputFieldValue;
}
// for get text element data
function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

// to set new data
function setNewElementData(textElementId, totalValue){
    const element = document.getElementById(textElementId);
    element.innerText = totalValue;
}