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

        const div = document.createElement("div");
        div.classList.add("border-2");
        div.classList.add("container");
        div.classList.add("mx-auto");
        div.classList.add("rounded-xl");
        div.classList.add("p-4");
        div.classList.add("m-4");
        div.classList.add("text-xl");
        div.innerHTML = `
        <h1>${quotaAddMoney}Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
        <p>${new Date().toLocaleString()}</p>
        `
        document.getElementById("history_container").appendChild(div)
    }

    else{
        alert("please enter number not text or other things")
    }
    
})