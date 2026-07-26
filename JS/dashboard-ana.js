const total_balance = document.querySelector('.total-balance');
const monthly_income = document.querySelector('.monthly-income');
const monthly_expense = document.querySelector('.monthly-expense');
const total_savings = document.querySelector('.total-savings');

function dash_total_balance () {
    const expense_dataa = expense_data.filter(
        item => item.act === "Expense"
    );

    if (expense_dataa.length === 0) {
        total_balance.innerHTML = "0";
        return;
    }

    const saving_data = expense_data.filter(
        item => item.act === "Saving"
    );

    const saving_no = saving_data.reduce(
        (sum, item) => sum + Number(item.price),
        0
    );

    const expense_detaa = expense_data.filter(
        item => item.act === "Expense"
    );

    const expense_no = expense_detaa.reduce(
        (sum, item) => sum + Number(item.price),
        0
    );

    const income_data = expense_data.filter(
        item => item.act === "Income"
    );

    const income_no = income_data.reduce(
        (sum, item) => sum + Number(item.price),
        0
    );

    const total = income_no - expense_no - saving_no;

    total_balance.innerHTML = `${total}`;
}

function dash_saving() {

    const saving_data = expense_data.filter(
        item => item.act === "Saving"
    );

    const saving_no = saving_data.reduce(
        (sum, item) => sum + Number(item.price),
        0
    );

    total_savings.innerHTML = `${saving_no}`;
}

function dash_expense() {

    const expense_dataa = expense_data.filter(
        item => item.act === "Expense"
    );

    const expense_no = expense_dataa.reduce(
        (sum, item) => sum + Number(item.price),
        0
    );

    monthly_expense.innerHTML = `${expense_no}`;
}

function dash_income() {

    const income_data = expense_data.filter(
        item => item.act === "Income"
    );

    const income_no = income_data.reduce(
        (sum, item) => sum + Number(item.price),
        0
    );
    
    monthly_income.innerHTML = `${income_no}`;
}