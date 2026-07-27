// budget-data-add.js
const final_b = document.querySelector('.add-b');
const button_b = document.querySelectorAll('.buttons_b');
let budget_data = JSON.parse(localStorage.getItem("myBudget")) || [];

button_b.forEach(button => {
    button.addEventListener("click", () => { 
        button_b.forEach(c => c.classList.remove("btnfocus", "cato_b"));
        button.classList.add("btnfocus", "cato_b");
    });
});

function budget_box_data() {

    const selectedBtn = document.querySelector('.cato_b');
    
    const max_budget_input = document.querySelector('.budget-input');

    if (!selectedBtn || !max_budget_input.value) {
        alert("Please select a category and enter a goal!");
        return;
    }

    const select_cato = selectedBtn.getAttribute('value'); 

    const data = {
        id: Date.now(),
        catogery: select_cato, 
        goal: Number(max_budget_input.value)
    };

    budget_data.push(data);
    localStorage.setItem("myBudget", JSON.stringify(budget_data));
    max_budget_input.value = ""; 
}