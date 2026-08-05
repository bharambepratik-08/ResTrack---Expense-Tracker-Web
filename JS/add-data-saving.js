// add-data-saving.js


// naming the components
const container_a = document.querySelector('.cato-b');
const saving_grid = document.querySelector('.grid-cato.cato-s');
const merchant_s = document.querySelector('.merchant-saving');
const date_s = document.querySelector('.date-values');
const method_s = document.querySelector('.select-method-s');
const textarea_s = document.querySelector('.textarea-sa');
const price_s = document.querySelector('.price-saving');


// adding event listener to the btns(of saving and special saving) in order to add a special class(for making later code simple to select the clicked btn) and css style for onClick
saving_grid.addEventListener('click', (event) => {
    const button = event.target.closest('.buttons_s');

    if (button) {
        saving_grid.querySelectorAll('.buttons_s').forEach(btn => {
            btn.classList.remove("btnfocus");
            btn.classList.remove("cato_s");
        });
        
        button.classList.add("btnfocus");
        button.classList.add("cato_s");
    }
});


// function add_data_s --> adds data to expense_data (in Localstorage) when the btn is clicked (final_s)
function add_data_s () {
    if (!Array.isArray(expense_data)) {
        expense_data = [];
    }

    const cato_s = document.querySelector('.cato_s'); 

    if (!cato_s) {
        alert("Please select a category first!");
        return;
    }

    const data = {
        id: Date.now(),
        merchant: merchant_s.value,
        date: date_s.value,
        method: method_s.value,
        textarea: textarea_s.value,
        price: price_s.value,
        catogery: cato_s.value,
        act: "Saving",
        key: cato_s.id ? Number(cato_s.id) : 0
    }


    // for passing the data for special saving (helps in giving the data/information (for which special saving was saving done and how much))
    if (cato_s.classList.contains('sppec-button-save')) {
        add_sppec_saving(data);
    }

    expense_data.push(data);
    localStorage.setItem("myExpenses", JSON.stringify(expense_data));
}


// naming the add saving btn
const final_s = document.querySelector('.add-s');


// adding event listener to the final_s btn 
final_s.addEventListener("click", () => {
    // functions changing the information in the arrays and the website
    add_data_s(); // adds data
    printing(expense_data); // prints the updated transactions
    run_msg("Saving added successfully!") // runs the notification function
    calculateSavings(); // calculates the saving for analytics
    calculateDailyAvg(); // calculates the daily avg for analytics
    dash_saving() // calculates the saving for dashboard
    dash_total_balance() // calculates the total for dashboard
    updateAnalyticsChart(); // updates the chart in analytics
    print_recent_transaction(); // prints recent transaction
    updateSpendingCategoryChart() // updates the chart on dashboard
    special_data_printing(special_saving_data); // adds data


    // Clear Inputs
    merchant_s.value = ""; 
    date_s.value = "";
    textarea_s.value = "";
    price_s.value = "";


    // UI Logic
    form_add_saving.classList.remove("able");
    form_add_saving.classList.add("disable");
    header.classList.remove("disable");
    plus_add.classList.remove("disable");
    transaction.classList.remove("disable");
});


// take information from add_data_s and passes in a array(Sspec_adding) for special saving
 function add_sppec_saving (data) {

    const cato = data.catogery;

    const items = data.price;

    const item_up = {
        price: items,
        type: cato
    }

    Sspec_adding.push(item_up);
    localStorage.setItem("mySspec", JSON.stringify(Sspec_adding));
}