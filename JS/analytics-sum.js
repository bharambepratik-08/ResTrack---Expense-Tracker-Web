// analytics-sum.js


// naming the component
const net_saving = document.querySelector('.net-saving');
const total_inflow = document.querySelector('.total-inflow');
const monthly_spend = document.querySelector('.monthly-spend');
const daily_avg = document.querySelector('.daily-avg');


// calculates the daily avg and prints in analytics 
function calculateDailyAvg () {
    const expense_dataa = expense_data.filter(
        item => item.act === "Expense"
    );

    if (expense_dataa.length === 0) {
        daily_avg.innerHTML = "0";
        return;
    }

    const expense_no = expense_dataa.reduce(
        (sum, item) => sum + Number(item.price),
        0
    );

    const daily_avg_no = Math.round(expense_no/30);
    daily_avg.innerHTML = `${daily_avg_no}`;
}


// calculates total saving and prints in analytics
function calculateSavings() {

    const saving_data = expense_data.filter(
        item => item.act === "Saving"
    );

    const saving_no = saving_data.reduce(
        (sum, item) => sum + Number(item.price),
        0
    );

    net_saving.innerHTML = `${saving_no}`;
}


// calculates total expense and prints in analytics
function calculateExpense() {

    const expense_dataa = expense_data.filter(
        item => item.act === "Expense"
    );

    const expense_no = expense_dataa.reduce(
        (sum, item) => sum + Number(item.price),
        0
    );

    monthly_spend.innerHTML = `${expense_no}`;
}


// calculates total income and prints in analytics 
function calculateIncome() {

    const income_data = expense_data.filter(
        item => item.act === "Income"
    );

    const income_no = income_data.reduce(
        (sum, item) => sum + Number(item.price),
        0
    );
    
    total_inflow.innerHTML = `${income_no}`;
}