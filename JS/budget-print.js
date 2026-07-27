// budget-print.js
const adder = document.querySelector('.adder-budget');

function data_budget_pri(data) {
    adder.innerHTML = '';

    data.forEach(item => {
        const matchingExpenses = expense_data.filter(exp => 
            exp.act === "Expense" && 
            String(exp.catogery).toLowerCase() === String(item.catogery).toLowerCase()
        );

        const used = matchingExpenses.reduce((sum, exp) => sum + Number(exp.price || 0), 0);
        const goal = Number(item.goal);
        const remaining = goal - used;
        const percentage = goal > 0 ? Math.min((used / goal) * 100, 100).toFixed(1) : 0;

        const card = document.createElement("div");
        card.classList.add("budget-div-adder");

        card.innerHTML = `
            <div class="budget-maker display align-items">
                <div class="upper-budget-adder display">
                    <div class="icon-adder display align-items justify-items">
                        <i class="${icon_decide(item.catogery)}"></i>
                    </div>
                    <div class="chart-adder">
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
                        <div style="width: 100%; background: #2d2d2d; height: 8px; border-radius: 10px; overflow: hidden; margin-top: 5px;">
                            <div style="width: ${percentage}%; background: ${percentage > 90 ? '#ff4d4d' : '#22c55e'}; height: 100%;"></div>
                        </div>
                    </div>
                    <div class="rem pad-com">
                        <p>${remaining >= 0 ? `₹${remaining.toLocaleString()} remaining` : `Overspent by ₹${Math.abs(remaining).toLocaleString()}`}</p>
                    </div>
                </div>
            </div>
        `;
        adder.prepend(card);
    });
}

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

final_b.addEventListener("click", () => {
    budget_box_data();
    data_budget_pri(budget_data);

    form_add_budget.classList.remove("able");
    form_add_budget.classList.add("disable");
    header.classList.remove("disable");
    plus_add.classList.remove("disable");
});