// Making add expense/ cancel button work 

const plus_add = document.querySelector('.add-expense');
const form_add_expense = document.querySelector('.add-expense-main');
const form_add_income = document.querySelector('.add-income-main');
const form_add_saving = document.querySelector('.add-saving-main');
const header = document.querySelector('.navBar-header');
const transaction_b = document.querySelector('.Transaction')
const cancel = document.querySelector('.cancel');
const cross = document.querySelector('.class-cancel');
const add_e = document.querySelector('.add-expense-to');
const add_i = document.querySelector('.add-income');
const add_s = document.querySelector('.add-saving');
const cancel_i = document.querySelector('.cancel-i');
const cross_i = document.querySelector('.class-cancel-i');
const cancel_s = document.querySelector('.cancel-s');
const cross_s = document.querySelector('.class-cancel-s');
const dashboard = document.querySelector('.dashboard')
const dashboard_b = document.querySelector('.Dashboard')
const transaction = document.querySelector('.transaction')
const analytics_b = document.querySelector('.Analytics')
const analytics = document.querySelector(".analytic")

transaction_b.addEventListener("click", () => {
    dashboard.classList.add("disable")
    transaction.classList.remove("disable")
    analytics.classList.add("disable")
})

dashboard_b.addEventListener("click", () => {
    dashboard.classList.remove("disable")
    transaction.classList.add("disable")
    analytics.classList.add("disable")
})

analytics_b.addEventListener("click", () => {
    dashboard.classList.add("disable");
    transaction.classList.add("disable");
    analytics.classList.remove("disable");
});
add_e.addEventListener("click", () => {

    form_add_expense.classList.remove("disable");
    form_add_expense.classList.add('able');
    header.classList.add("disable")
    transaction.classList.add("disable");
    plus_add.classList.add("disable")

})

add_i.addEventListener("click", () => {

    form_add_income.classList.remove("disable");
    form_add_income.classList.add('able');
    header.classList.add("disable")
    transaction.classList.add("disable");
    plus_add.classList.add("disable")

})

add_s.addEventListener("click", () => {

    form_add_saving.classList.remove("disable");
    form_add_saving.classList.add('able');
    header.classList.add("disable")
    transaction.classList.add("disable");
    plus_add.classList.add("disable")

})


cancel.addEventListener("click", () => {

    form_add_expense.classList.add("disable")
    form_add_expense.classList.remove("able")
    header.classList.remove("disable")
    plus_add.classList.remove("disable")
    
});

cross.addEventListener("click", () => {

    form_add_expense.classList.add("disable")
    form_add_expense.classList.remove("able")
    plus_add.classList.remove("disable")
    header.classList.remove("disable")
    
});

cancel_i.addEventListener("click", () => {

    form_add_income.classList.add("disable")
    form_add_income.classList.remove("able")
    header.classList.remove("disable")
    plus_add.classList.remove("disable")

});

cross_i.addEventListener("click", () => {

    form_add_income.classList.add("disable")
    form_add_income.classList.remove("able")
    plus_add.classList.remove("disable")
    header.classList.remove("disable")
    
});

cancel_s.addEventListener("click", () => {

    form_add_saving.classList.add("disable")
    form_add_saving.classList.remove("able")
    header.classList.remove("disable")
    plus_add.classList.remove("disable")

});

cross_s.addEventListener("click", () => {

    form_add_saving.classList.add("disable")
    form_add_saving.classList.remove("able")
    plus_add.classList.remove("disable")
    header.classList.remove("disable")
    
});

document.addEventListener("DOMContentLoaded", () => {
    calculateDailyAvg()
    calculateExpense()
    calculateIncome()
    calculateSavings()
    updateAnalyticsChart();
});