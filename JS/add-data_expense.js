// add-data-saving.js

// naming components
const merchant_e = document.querySelector('.merchant-expense');
const date_e = document.querySelector('.date-valuee');
const method_e = document.querySelector('.select-method-e');
const textarea_e = document.querySelector('.textarea-exp');
const price_e = document.querySelector('.price_expense');
const buttons_e = document.querySelectorAll('.buttons_e');

// adding event listener to the btns in order to add a special class(for making later code simple to select the clicked btn) and css style for onClick
buttons_e.forEach(button => {
    button.addEventListener( "click", () => { 
        buttons_e.forEach(c => {
            c.classList.remove("btnfocus")
            c.classList.remove("cato_e")
            })
        button.classList.add("btnfocus")
        button.classList.add("cato_e")
    });
})


// adding a array in local storage 
let expense_data = JSON.parse(localStorage.getItem("myExpenses")) || [];


// function add_data_e --> adds data to expense_data (in Localstorage) when the btn is clicked (final_e)
function add_data_e () {

    const cato_e = document.querySelector('.cato_e');

    if (!cato_e) {
        alert("Please select a category first!");
        return;
    }

    const data = {
        id: Date.now(),
        merchant: merchant_e.value,
        date: date_e.value,
        method: method_e.value,
        textarea: textarea_e.value,
        price: price_e.value,
        catogery: cato_e.getAttribute('value'),
        act: "Expense"
    }

    expense_data.push(data);

    localStorage.setItem("myExpenses", JSON.stringify(expense_data));

}


// naming the add expense btn
const final_e = document.querySelector('.add-e');


// adding event listener to the final_e btn 
final_e.addEventListener("click", () => {
    // functions changing the information in the arrays and the website 
    add_data_e(); // adds data
    printing(expense_data); // prints the data
    calculateExpense(); // calculates the expense for analytics
    calculateDailyAvg(); // calculates the daily avg for analytics
    dash_expense() // calculates the expense for dashboard
    dash_total_balance() // calculate total for dashboard
    updateAnalyticsChart(); // updates the chart in analytics
    breakdown_co_si (); // updates the catogery breakdown in analytics 
    print_recent_transaction() // prints recent transaction
    updateSpendingCategoryChart() // updates the chart on dashboard
    data_budget_pri(budget_data); // updates the budget according to the added expense 
    print_recent_budget(); // prints the updated budget info on dashboard

    // Clear Inputs
    merchant_e.value = ""; 
    date_e.value = "";
    textarea_e.value = "";
    price_e.value = "";

    // UI Logic
    form_add_expense.classList.remove("able");
    form_add_expense.classList.add("disable");
    header.classList.remove("disable");
    plus_add.classList.remove("disable");
    transaction.classList.remove("disable");
});


// just for demo not the final btn
const clear = document.querySelector('.clear_data');

clear.addEventListener("click", () => {
    localStorage.clear();
    expense_data.length = 0,
    budget_data.length = 0,
    printing(expense_data)
    data_budget_pri();
    updateAnalyticsChart();
    calculateExpense()
    calculateIncome()
    calculateSavings()
    calculateDailyAvg ()
    dash_expense();
    dash_income();
    dash_saving();
    dash_total_balance();
    breakdown_co_si();
    print_recent_transaction();
    updateSpendingCategoryChart();
    print_recent_budget();
})