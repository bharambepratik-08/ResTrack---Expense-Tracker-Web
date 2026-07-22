// Making add expense/ cancel button work 

const plus_add = document.querySelector('.add-expense');
const form_add_expense = document.querySelector('.add-expense-main');
const form_add_income = document.querySelector('.add-income-main')
const header = document.querySelector('.navBar-header');
// const dashboard = document.querySelector('.dashboard')
const cancel = document.querySelector('.cancel');
const cross = document.querySelector('.class-cancel');
const add_e = document.querySelector('.add-expense-to');
const add_i = document.querySelector('.add-income');
const cancel_i = document.querySelector('.cancel-i');
const cross_i = document.querySelector('.class-cancel-i');
const final_i = document.querySelector('.add-i');
const final_e = document.querySelector('.add-e');

add_e.addEventListener("click", () => {

    form_add_expense.classList.remove("disable");
    form_add_expense.classList.add('able');
    header.classList.add("disable")
    // dashboard.classList.add("disable");
    plus_add.classList.add("disable")

})

add_i.addEventListener("click", () => {

    form_add_income.classList.remove("disable");
    form_add_income.classList.add('able');
    header.classList.add("disable")
    // dashboard.classList.add("disable");
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

final_i.addEventListener("click", () => {

    form_add_income.classList.remove("able")
    form_add_income.classList.add("disable")
    header.classList.remove("disable")
    plus_add.classList.remove("disable")

});

final_e.addEventListener("click", () => {

    form_add_expense.classList.remove("able")
    form_add_expense.classList.add("disable")
    header.classList.remove("disable")
    plus_add.classList.remove("disable")

});

