// Making add expense button work 

const plus_add = document.querySelector('.add-expense');
const form_add_expense = document.querySelector('.add-expense-page');
const header = document.querySelector('.navBar-header');

plus_add.addEventListener("click", () => {

    form_add_expense.classList.remove("disable")
    form_add_expense.classList.add("able")
    header.classList.add("able")

});