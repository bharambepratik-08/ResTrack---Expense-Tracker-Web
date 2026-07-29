//Saving data naming and adding to local storage+

// get attribute to solve the bug
const container_s = document.querySelector('.cato-s');

container_s.addEventListener('click', (event) => {
    const button = event.target.closest('.buttons_s');

    if (button) {
        container_s.querySelectorAll('.buttons_s').forEach(btn => {
            btn.classList.remove("btnfocus");
            btn.classList.remove("cato_s");
        });
        
        button.classList.add("btnfocus");
        button.classList.add("cato_s");
    }
});

const merchant_s = document.querySelector('.merchant-saving');
const date_s = document.querySelector('.date-values');
const method_s = document.querySelector('.select-method-s');
const textarea_s = document.querySelector('.textarea-sa');
const price_s = document.querySelector('.price-saving');

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
        act: "Saving"
    }

    switch (cato_s.value) {
        case "SIP":
            return;
        case "Investment":
            return;
        case "Other":
            return;
        case "Saving":
            return;
        default:
            return add_sppec_saving(data);
    }

    expense_data.push(data);
    localStorage.setItem("myExpenses", JSON.stringify(expense_data));
}

const final_s = document.querySelector('.add-s');

final_s.addEventListener("click", () => {
    add_data_s();
    printing(expense_data)
    calculateSavings();
    calculateDailyAvg();
    dash_saving()
    dash_total_balance()
    updateAnalyticsChart(); 
    print_recent_transaction();
    updateSpendingCategoryChart()
    special_data_printing(special_saving_data);



    // Clear Inputs
    merchant_s.value = ""; 
    date_s.value = "";
    textarea_s.value = "";
    price_s.value = "";

    form_add_saving.classList.remove("able");
    form_add_saving.classList.add("disable");
    header.classList.remove("disable");
    plus_add.classList.remove("disable");
    transaction.classList.remove("disable");
});

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