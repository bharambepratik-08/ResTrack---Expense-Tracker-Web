// budget-print.js


// naming components
const adder = document.querySelector('.adder-budget-div');
const budgetBtn = document.querySelector('.budget-btn'); 


// prints in budget page under budget 
function data_budget_pri(data) {

    // clears the older savings to update them to new one's
    adder.innerHTML = ''; 
    adder.appendChild(budgetBtn);

    data.forEach(item => {
        const matchingExpenses = expense_data.filter(exp => 
            exp.act === "Expense" && 
            String(exp.catogery).toLowerCase() === String(item.catogery).toLowerCase()
        );

        const used = matchingExpenses.reduce((sum, exp) => sum + Number(exp.price || 0), 0);
        const goal = Number(item.goal);
        const remaining = goal - used;
        const percentage = goal > 0 ? Math.min((used / goal) * 100, 100).toFixed(1) : 0; // calculate the percentage of money used out of the limit

        const card = document.createElement("div");
        card.classList.add("budget-div-adder");
        card.classList.add(`${item.id}`)

        card.innerHTML = `
            <div class="budget-maker display align-items ">
                <div class="upper-budget-adder display">
                    <div class="icon-adder display align-items justify-items">
                        <i class="${icon_decide(item.catogery)}"></i>
                    </div>
                    <div class="chart-adder display align-items justify-items">
                        <p>${percentage}%</p> 
                    </div>
                </div>
                <div class="lower-budget">
                    <div class="cato-adder display align-items pad-com">
                        <h2>${item.catogery}</h2>
                    </div>
                    <div class="used-goal display align-items pad-com">
                        <p>Used: ₹${used.toLocaleString()}</p>
                        <p>Goal: ₹${goal.toLocaleString()}</p>
                    </div>
                    <div class="goal-bar pad-com">
                        <div class="bar-div">
                            <div style="width: ${percentage}%; background: ${percentage > 90 ? 'var(--expense)' : 'var(--income)'}; height: 100%;"></div>
                        </div>
                    </div>
                    <div class="rem pad-com display align-items">
                        <p>${remaining >= 0 ? `₹${remaining.toLocaleString()} remaining` : `Overspent by ₹${Math.abs(remaining).toLocaleString()}`}</p>
                        <button class="delete-button-budget">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;

        const deleteButton = card.querySelector(".delete-button-budget");


        // adding event listener to delete btn to delete a specific budget
        deleteButton.addEventListener("click", () => {
            const customID = item.id;
            clear_budget(customID);
            data_budget_pri(budget_data)
            
        });

        adder.appendChild(card);
    });
}


// deletes the specific budget 
function clear_budget(idToDelete) {

    const delete_div = document.querySelector(`.${CSS.escape(idToDelete)}`);
    
    if (delete_div) {
        delete_div.remove();
    } 
    
    budget_data = budget_data.filter(item => item.id !== idToDelete);

    localStorage.setItem(
        "myExpenses",
        JSON.stringify(budget_data)
    );

}


// decide the icon to be printed in budget according to the selection 
function icon_decide(data) {
    switch (data) {
        case 'Dining': return 'fa-solid fa-utensils';
        case 'Transport': return 'fa-solid fa-bus';
        case 'Shopping': return 'fa-solid fa-bag-shopping';
        case 'Bills': return 'fa-solid fa-receipt';
        case 'Health': return 'fa-solid fa-stethoscope';
        case 'Leisure': return 'fa-solid fa-masks-theater';
        case 'Housing': return 'fa-solid fa-home';
        default: return 'fa-solid fa-tag';
    }
}