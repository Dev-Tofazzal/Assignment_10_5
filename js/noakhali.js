document.getElementById("btn_1").addEventListener("click",function(event){
    event.preventDefault();
    const addMoney = getInputValueById("inputValue") ;
    
    if(addMoney > 0 && typeof addMoney === ("number")){
        const naokahliDonate = getTextValueById("noakhaliDonate");
        const newNaokahliBalance = naokahliDonate + addMoney;
        document.getElementById("noakhaliDonate").innerText= newNaokahliBalance;

        const mybalance = getTextValueById("myBalance");
        const myNewBalance = mybalance - addMoney; 
        document.getElementById("myBalance").innerText = myNewBalance;
        
        const div = document.createElement("div");
        div.classList.add("text-center");
        div.innerHTML = `
        <h1>${addMoney} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h1>
        <p>${new Date().toLocaleString()}</p>
        `
        document.getElementById("history_container").appendChild(div)

        
    }
    else{
        alert("tik nai")
    }
   
    
})