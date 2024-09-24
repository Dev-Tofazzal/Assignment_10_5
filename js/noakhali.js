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
        
    }
    else{
        alert("tik nai")
    }
   
    
})