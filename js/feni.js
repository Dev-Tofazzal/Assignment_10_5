document.getElementById("btn_2").addEventListener("click", function (event) {
    event.preventDefault();
    const feniAddMoney = getInputValueById("feniInputValue");



    if (feniAddMoney > 0 && typeof feniAddMoney === ("number")) {
        const feniDonate = getTextValueById("feniDonate");
        const newFeniBalance = feniDonate + feniAddMoney;
        document.getElementById("feniDonate").innerText = newFeniBalance;

        const mybalance = getTextValueById("myBalance");
        const myNewBalance = mybalance - feniAddMoney;
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
        <h1>${feniAddMoney} Taka is Donated for famine-2024 at Feni, Bangladesh</h1>
        <p>${new Date().toLocaleString()}</p>
        `
        document.getElementById("history_container").appendChild(div)
    } else {
        alert("please enter number not text or other things")
    }


})

