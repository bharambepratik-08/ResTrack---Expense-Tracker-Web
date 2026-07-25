//Saving data naming and adding to local storage

const merchant_s = document.querySelector('.merchant-saving');
const date_s = document.querySelector('.date-values');
const method_s = document.querySelector('.select-method-s');
const textarea_s = document.querySelector('.textarea-sa');
const price_s = document.querySelector('.price-saving');


const buttons_s = document.querySelectorAll('.buttons_s');

buttons_s.forEach(button => {
    button.addEventListener( "click", () => { 
        buttons_s.forEach(c => {
            c.classList.remove("btnfocus")
            c.classList.remove("cato_s")
            })
        button.classList.add("btnfocus")
        button.classList.add("cato_s")
    });
})


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

    expense_data.push(data);
    localStorage.setItem("myExpenses", JSON.stringify(expense_data));
}

const final_s = document.querySelector('.add-s');

final_s.addEventListener("click", () => {
    add_data_s();
    printing(expense_data);
    calculateSavings();
    calculateDailyAvg();
    updateAnalyticsChart(); 

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
