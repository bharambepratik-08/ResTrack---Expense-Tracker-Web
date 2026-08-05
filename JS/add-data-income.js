//I add-data-saving.js


// naming components
const merchant_i = document.querySelector('.merchant-income');
const date_i = document.querySelector('.date-valuei');
const method_i = document.querySelector('.select-method-i');
const textarea_i = document.querySelector('.textarea-in');
const price_i = document.querySelector('.price-income');
const buttons_i = document.querySelectorAll('.buttons_i');


// adding event listener to the btns in order to add a special class(for making later code simple to select the clicked btn) and css style for onClick
buttons_i.forEach(button => {
    button.addEventListener( "click", () => { 
        buttons_i.forEach(c => {
            c.classList.remove("btnfocus")
            c.classList.remove("cato_i")
            })
        button.classList.add("btnfocus")
        button.classList.add("cato_i")
    });
})


// function add_data_i --> adds data to expense_data (in Localstorage) when the btn is clicked (final_i)
function add_data_i () {

    if (!Array.isArray(expense_data)) {
        expense_data = [];
    }

    const cato_i = document.querySelector('.cato_i');

    if (!cato_i) {
        alert("Please select a category first!");
        return;
    }


    const data = {
        id: Date.now(),
        merchant: merchant_i.value,
        date: date_i.value,
        method: method_i.value,
        textarea: textarea_i.value,
        price: price_i.value,
        catogery: cato_i.value,
        act: "Income"
    }

    expense_data.push(data);

    localStorage.setItem("myExpenses", JSON.stringify(expense_data));

}


// naming the add income btn
const final_i = document.querySelector('.add-i');


// adding event listener to the final_i btn 
final_i.addEventListener("click", () => {
    // functions changing the information in the arrays and the website 
    add_data_i(); // adds data
    printing(expense_data); // prints the updated transactions
    run_msg("Income added successfully!") // runs the notification function
    calculateIncome(); // calculates the income for analytics
    dash_income(); // calculates the income for dashboard
    dash_total_balance(); // calculates the total for dashboard
    updateAnalyticsChart();  // updates the chart in analytics
    print_recent_transaction(); // prints recent transaction
    updateSpendingCategoryChart() // updates the chart on dashboard 

    // Clear Inputs
    merchant_i.value = ""; 
    date_i.value = "";
    textarea_i.value = "";
    price_i.value = "";

    // UI Logic
    form_add_income.classList.remove("able");
    form_add_income.classList.add("disable");
    header.classList.remove("disable");
    plus_add.classList.remove("disable");
    transaction.classList.remove("disable");
});
