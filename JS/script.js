// Making add expense/ cancel button work 
// in development
const plus_add = document.querySelector('.add-expense');
const form_add_expense = document.querySelector('.add-expense-main');
const form_add_income = document.querySelector('.add-income-main');
const form_add_saving = document.querySelector('.add-saving-main');
const form_add_budget = document.querySelector('.budget-form-add');
const form_add_special_saving = document.querySelector('.add-special-save-main');
const header = document.querySelector('.navBar-header');
const transaction_b = document.querySelector('.Transaction')
const cancel = document.querySelector('.cancel');
const cross = document.querySelector('.class-cancel');
const add_e = document.querySelector('.add-expense-to');
const add_i = document.querySelector('.add-income');
const add_s = document.querySelector('.add-saving');
const add_sspec = document.querySelector('.add-sp-Btn')
const cancel_i = document.querySelector('.cancel-i');
const cancel_sspec = document.querySelector('.cancel-sspec');
const cross_i = document.querySelector('.class-cancel-i');
const cancel_s = document.querySelector('.cancel-s');
const cancel_b = document.querySelector('.cancel-b');
const cross_s = document.querySelector('.class-cancel-s');
const cross_spec = document.querySelector('.class-cancel-ss');
const cross_b = document.querySelector('.class-cancel-b')
const dashboard = document.querySelector('.dashboard')
const dashboard_b = document.querySelector('.Dashboard')
const transaction = document.querySelector('.transaction')
const analytics_b = document.querySelector('.Analytics')
const analytics = document.querySelector(".analytic")
const budget = document.querySelector(".budget")
const budget_b = document.querySelector(".Budgets")
const add_b = document.querySelector('.budget-btn');
const setting_b = document.querySelector('.Setting');
const setting = document.querySelector('.setting');


transaction_b.addEventListener("click", () => {
    dashboard.classList.add("disable")
    transaction.classList.remove("disable")
    analytics.classList.add("disable")
    budget.classList.add("disable")
})

dashboard_b.addEventListener("click", () => {
    dashboard.classList.remove("disable")
    transaction.classList.add("disable")
    analytics.classList.add("disable")
    budget.classList.add("disable")
    setting.classList.add("disable")
})

analytics_b.addEventListener("click", () => {
    dashboard.classList.add("disable");
    transaction.classList.add("disable");
    analytics.classList.remove("disable");
    budget.classList.add("disable")
    setting.classList.add("disable")
});

budget_b.addEventListener("click", () => {
    dashboard.classList.add("disable");
    transaction.classList.add("disable");
    analytics.classList.add("disable");
    budget.classList.remove("disable")
    setting.classList.add("disable")
});

setting_b.addEventListener("click", () => {
    dashboard.classList.add("disable");
    transaction.classList.add("disable");
    analytics.classList.add("disable");
    budget.classList.add("disable")
    setting.classList.remove("disable")
});

add_e.addEventListener("click", () => {

    form_add_expense.classList.remove("disable");
    form_add_expense.classList.add('able');
    header.classList.add("disable")
    transaction.classList.add("disable");
    dashboard.classList.add("disable")
    analytics.classList.add("disable")
    budget.classList.add("disable")
    plus_add.classList.add("disable")

})

add_i.addEventListener("click", () => {

    form_add_income.classList.remove("disable");
    form_add_income.classList.add('able');
    header.classList.add("disable")
    transaction.classList.add("disable");
    dashboard.classList.add("disable")
    analytics.classList.add("disable")
    budget.classList.add("disable")
    plus_add.classList.add("disable")

})

add_b.addEventListener("click", () => {

    form_add_budget.classList.remove("disable");
    form_add_budget.classList.add('able');
    header.classList.add("disable")
    transaction.classList.add("disable");
    dashboard.classList.add("disable")
    analytics.classList.add("disable")
    budget.classList.add("disable")
    plus_add.classList.add("disable")

})

add_s.addEventListener("click", () => {

    form_add_saving.classList.remove("disable");
    form_add_saving.classList.add('able');
    header.classList.add("disable")
    transaction.classList.add("disable");
    dashboard.classList.add("disable")
    analytics.classList.add("disable")
    budget.classList.add("disable")
    plus_add.classList.add("disable")

})

add_sspec.addEventListener("click", () => {

    form_add_special_saving.classList.remove("disable");
    form_add_special_saving.classList.add('able');
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

cancel_b.addEventListener("click", () => {

    form_add_budget.classList.add("disable")
    form_add_budget.classList.remove("able")
    header.classList.remove("disable")
    plus_add.classList.remove("disable")

});

cancel_sspec.addEventListener("click", () => {

    form_add_special_saving.classList.add("disable")
    form_add_special_saving.classList.remove("able")
    header.classList.remove("disable")
    plus_add.classList.remove("disable")

});

cross_i.addEventListener("click", () => {

    form_add_income.classList.add("disable")
    form_add_income.classList.remove("able")
    plus_add.classList.remove("disable")
    header.classList.remove("disable")
    
});

cross_spec.addEventListener("click", () => {

    form_add_special_saving.classList.add("disable")
    form_add_special_saving.classList.remove("able")
    plus_add.classList.remove("disable")
    header.classList.remove("disable")
    
});

cross_b.addEventListener("click", () => {

    form_add_budget.classList.add("disable")
    form_add_budget.classList.remove("able")
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
    dash_expense()
    dash_income()
    dash_saving()
    dash_total_balance()
    updateAnalyticsChart();

    if (budget_data.length > 0) {
        data_budget_pri(budget_data);
    }
});

const themeBtn = document.querySelector('#theme-toggle');
const themeIcon = document.querySelector('#theme-icon');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
});


const respouiLogic = window.matchMedia('(min-width: 450px)');

function showPage(activePage) {

  [dashboard, transaction, analytics, budget].forEach(page => {
    page.classList.add("disable");
  });
  

  activePage.classList.remove("disable");

  if (respouiLogic.matches) {
    main_Navbar.style.display = 'none';
    navBtn_respui.style.display = 'flex';
  } else {
    main_Navbar.style.display = ''; 
    navBtn_respui.style.display = '';
  }
}

transaction_b.addEventListener("click", () => showPage(transaction));
dashboard_b.addEventListener("click", () => showPage(dashboard));
analytics_b.addEventListener("click", () => showPage(analytics));
budget_b.addEventListener("click", () => showPage(budget));
