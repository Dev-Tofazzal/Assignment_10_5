function getInputValueById(id){
    const addMoney = document.getElementById(id).value ;
    const addMoneyNumber = parseFloat(addMoney);
    return addMoneyNumber;
}

function getTextValueById(id){
    const addText = document.getElementById(id).innerText;
    const addTextNumber = parseFloat(addText);
    return addTextNumber;
}