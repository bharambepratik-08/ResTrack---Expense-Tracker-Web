// dashboard-ana.js


// naming the component 
const total_balance = document.querySelector('.total-balance');
const monthly_income = document.querySelector('.monthly-income');
const monthly_expense = document.querySelector('.monthly-expense');
const total_savings = document.querySelector('.total-savings');


// to calculate the total balance and print on dashboard
function dash_total_balance () {

    // filters all expense
    const expense_dataa = expense_data.filter( 
        item => item.act === "Expense"
    );

    if (expense_dataa.length === 0) {
        total_balance.innerHTML = "0";
        return;
    }


    // filters all saving
    const saving_data = expense_data.filter(
        item => item.act === "Saving"
    );


    // counts the total of all saving
    const saving_no = saving_data.reduce(
        (sum, item) => sum + Number(item.price),
        0
    );


    // filters all the expense
    const expense_detaa = expense_data.filter(
        item => item.act === "Expense"
    );


    // counts the total of all expesne
    const expense_no = expense_detaa.reduce(
        (sum, item) => sum + Number(item.price),
        0
    );


    // filters all the income 
    const income_data = expense_data.filter(
        item => item.act === "Income"
    );


    // counts the total of all income
    const income_no = income_data.reduce(
        (sum, item) => sum + Number(item.price),
        0
    );

    const total = income_no - expense_no - saving_no;

    total_balance.innerHTML = `${total}`;
}


// to calculate the total saving and print on dashboard
function dash_saving() {


    // filters all the  saving
    const saving_data = expense_data.filter(
        item => item.act === "Saving"
    );


    // counts the total of all saving
    const saving_no = saving_data.reduce(
        (sum, item) => sum + Number(item.price),
        0
    );

    total_savings.innerHTML = `${saving_no}`;
}


// to calculate the total expense and print on dashboard
function dash_expense() {


    // filters all the expense 
    const expense_dataa = expense_data.filter(
        item => item.act === "Expense"
    );


    // counts the total of all expense
    const expense_no = expense_dataa.reduce(
        (sum, item) => sum + Number(item.price),
        0
    );

    monthly_expense.innerHTML = `${expense_no}`;
}


// to calculate the total income and print on dashboard
function dash_income() {


    // filters all the income 
    const income_data = expense_data.filter(
        item => item.act === "Income"
    );


    // counts the total of all income
    const income_no = income_data.reduce(
        (sum, item) => sum + Number(item.price),
        0
    );
    
    monthly_income.innerHTML = `${income_no}`;
}