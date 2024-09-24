document.getElementById("btn_3")
.addEventListener("click",function(event){
    event.preventDefault();

    const quotaAddMoney = getInputValueById("quotaInputValue");
    
    if(quotaAddMoney>0 && typeof quotaAddMoney === "number"){
        const quotaDonate = getTextValueById("quotaDonate");
        const newQuotaBalance = quotaDonate + quotaAddMoney;
        document.getElementById("quotaDonate").innerText= newQuotaBalance;

        const mybalance = getTextValueById("myBalance");
        const myNewBalance = mybalance - quotaAddMoney; 
        document.getElementById("myBalance").innerText = myNewBalance;
    }


    
})