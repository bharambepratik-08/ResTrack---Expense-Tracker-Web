const recent_list_budget_cont = document.querySelector(".budgets-table");

function inner_budget(data) {
    if (!data) return;

    const card = document.createElement("div");
    card.classList.add("recent-budget-boxdiv");
    card.classList.add("display");
    card.classList.add("align-items");

    const matchingExpenses = expense_data.filter(exp => 
        exp.act === "Expense" && 
        String(exp.catogery).toLowerCase() === String(data.catogery).toLowerCase()
    );

    const used = matchingExpenses.reduce((sum, exp) => sum + Number(exp.price || 0), 0);
    const goal = Number(data.goal);
    const percentage = goal > 0 ? Math.min((used / goal) * 100, 100).toFixed(1) : 0;

    const limit = data.goal;
    const cato_details = data.catogery;

    card.innerHTML = `
            <div class="budget-box">
                <div class="upper-budget-recent display align-items">
                    <h3>${cato_details}</h3>
                    <h3>${used} / ${goal}</h3>
                </div> 
                <div class="goal-rec">
                    <div class="bar-div">
                        <div style="width: ${percentage}%; background: ${percentage > 90 ? '#ff4d4d' : '#22c55e'}; height: 100%;"></div>
                    </div>
                </div>
            </div>
        `;
    
    recent_list_budget_cont.appendChild(card);
}

function print_recent_budget() {
    recent_list_budget_cont.innerHTML = '<div class="head-budget"><h3>Recent Budget</h3></div>';
    
    const start = budget_data.length - 1;
    const end = Math.max(0, budget_data.length - 5);

    for (let i = start; i >= end; i--) {
        inner_budget(budget_data[i]);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    print_recent_budget();
});