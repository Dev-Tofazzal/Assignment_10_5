const home_btn = document.getElementById("home_btn")
home_btn.addEventListener("click",function(){
    window.location.href= "/Assignment_10_5/index.html"
   
    
})


home_btn.addEventListener("mouseenter",function(){
    home_btn.classList.add("bg-[#B4F461]")
    
})
home_btn.addEventListener("mouseleave",function(){
    home_btn.classList.remove("bg-[#B4F461]")
    
})
