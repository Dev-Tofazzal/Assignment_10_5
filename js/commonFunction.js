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

function showSectionById(id){
    document.getElementById("donation_card").classList.add("hidden");
    document.getElementById("history_container").classList.add("hidden");
    

    document.getElementById(id).classList.remove("hidden")
}

