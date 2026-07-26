//Expense data naming and adding to local storage

const merchant_e = document.querySelector('.merchant-expense');
const date_e = document.querySelector('.date-valuee');
const method_e = document.querySelector('.select-method-e');
const textarea_e = document.querySelector('.textarea-exp');
const price_e = document.querySelector('.price_expense');


const buttons_e = document.querySelectorAll('.buttons_e');

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


let expense_data = JSON.parse(localStorage.getItem("myExpenses")) || [];
console.log(expense_data)


function add_data_e () {


    if (!Array.isArray(expense_data)) {
        expense_data = [];
    }

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
        catogery: cato_e.value,
        act: "Expense"
    }

    expense_data.push(data);

    localStorage.setItem("myExpenses", JSON.stringify(expense_data));

}

const final_e = document.querySelector('.add-e');

final_e.addEventListener("click", () => {
    add_data_e();
    printing(expense_data);
    calculateExpense();
    calculateDailyAvg();
    dash_expense()
    dash_total_balance()
    updateAnalyticsChart();
    breakdown_co_si ();
    print_recent_transaction()

    // Clear Inputs
    merchant_e.value = ""; 
    date_e.value = "";
    textarea_e.value = "";
    price_e.value = "";

    // UI Logic (Moved from script.js)
    form_add_expense.classList.remove("able");
    form_add_expense.classList.add("disable");
    header.classList.remove("disable");
    plus_add.classList.remove("disable");
    transaction.classList.remove("disable");
});


const clear = document.querySelector('.clear_data');

clear.addEventListener("click", () => {
    localStorage.clear();
    expense_data.length = 0,
    printing(expense_data)
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
})