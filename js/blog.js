const blog_btn = document.getElementById("blog_btn")
blog_btn.addEventListener("click",function(){
    window.location.href = "/Assignment_10_5/blog.html";
})

blog_btn.addEventListener("mouseenter",function(){
    blog_btn.classList.add("bg-[#B4F461]")
    
})
blog_btn.addEventListener("mouseleave",function(){
    blog_btn.classList.remove("bg-[#B4F461]")
})

// /Assignment_10_5