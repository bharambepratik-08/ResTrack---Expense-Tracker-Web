// budget-data-add.js


// naming the component
const final_b = document.querySelector('.add-b');
const button_b = document.querySelectorAll('.buttons_b');
let budget_data = JSON.parse(localStorage.getItem("myBudget")) || [];


// adding event listener to buttons inorder to make them working
button_b.forEach(button => {
    button.addEventListener("click", () => { 
        button_b.forEach(c => c.classList.remove("btnfocus", "cato_b"));
        button.classList.add("btnfocus", "cato_b");
    });
});


// adds the data
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


// adding event listener to the final_b btn to make the add budget btn working 
final_b.addEventListener("click", () => {
    budget_box_data();
    data_budget_pri(budget_data);
    run_msg("Budget added successfully!") // runs the notification function

    form_add_budget.classList.remove("able");
    form_add_budget.classList.add("disable");
    header.classList.remove("disable");
    plus_add.classList.remove("disable");
});