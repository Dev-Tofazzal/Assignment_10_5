const donation = document.getElementById("donation")
donation.addEventListener("click",function(){
    
    showSectionById('donation_card')
    donation.classList.add("bg-[#B4F461]")
    history.classList.remove("bg-[#B4F461]")
    
    
})

const history = document.getElementById("history")

history.addEventListener("click",function(){
    // showSectionById("history_section")
    
    showSectionById("history_container")
    history.classList.add("bg-[#B4F461]")
    donation.classList.remove("bg-[#B4F461]")
})



