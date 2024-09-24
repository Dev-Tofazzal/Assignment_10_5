document.getElementById("btn_2").addEventListener("click",function(event){
    event.preventDefault();
    const feniAddMoney = getInputValueById("feniInputValue") ;
    
    
    
    if(feniAddMoney > 0 && typeof feniAddMoney === ("number")){
        const feniDonate = getTextValueById("feniDonate");
        const newFeniBalance = feniDonate + feniAddMoney;
        document.getElementById("feniDonate").innerText= newFeniBalance;

        const mybalance = getTextValueById("myBalance");
        const myNewBalance = mybalance - feniAddMoney; 
        document.getElementById("myBalance").innerText = myNewBalance;
        
    }
    else{
        alert("tik nai")
    }
   
    
})