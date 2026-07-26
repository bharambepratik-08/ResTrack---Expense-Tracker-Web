//Income data naming and adding to local storage

const merchant_i = document.querySelector('.merchant-income');
const date_i = document.querySelector('.date-valuei');
const method_i = document.querySelector('.select-method-i');
const textarea_i = document.querySelector('.textarea-in');
const price_i = document.querySelector('.price-income');


const buttons_i = document.querySelectorAll('.buttons_i');

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

const final_i = document.querySelector('.add-i');

final_i.addEventListener("click", () => {
    add_data_i();
    printing(expense_data);
    calculateIncome();
    dash_income();
    dash_total_balance();
    updateAnalyticsChart(); 
    print_recent_transaction();

    merchant_i.value = ""; 
    date_i.value = "";
    textarea_i.value = "";
    price_i.value = "";

    form_add_income.classList.remove("able");
    form_add_income.classList.add("disable");
    header.classList.remove("disable");
    plus_add.classList.remove("disable");
    transaction.classList.remove("disable");
});
