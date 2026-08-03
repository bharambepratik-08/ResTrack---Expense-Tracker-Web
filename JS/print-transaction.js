// print-transaction.js


const transacbox = document.querySelector('.transaction-box-his');


// prints all the transaction on transaction page
function printing (data) {


    // clear all the inner text/html so that there will be no over writting 
    transacbox.innerHTML = "";
    
    data.forEach(pack => {
        const card = document.createElement("div");
        card.classList.add("transaction-history");
        card.classList.add("grid-prop")
        card.classList.add("font")
        card.classList.add(`${pack.id}`)

        const merchant_details = pack.merchant;
        const date_details = pack.date;
        const method_details = pack.method;
        const price_details = pack.price;
        const cato_details = pack.catogery;
        const act = pack.act;

        card.innerHTML = `
            <h3 class="date_div display align-items justify-items">${date_details}</h3>
            <div class="merchant-box display align-items justify-items"> 
                <i class="${merchant_detailing(pack)}" id="iconic-merchant"></i>
                <h3 class="merchant_div">${merchant_details}</h3>
            </div>
            <h3 class="cato_div display align-items justify-items">${cato_details}</h3>
            <h3 class="act_div display align-items justify-items">${act}</h3>
            <h3 class="display-type display align-items justify-items">Completed</h3>
            <h3 class="price_div ${price_color(pack)} display align-items justify-items">${price_details}</h3>
            <div class="button_div display align-items justify-items">
                <button class="clear_div"><i class="fa-regular fa-trash-can"></i></button>
            </div>
        `;

        const deleteButton = card.querySelector(".clear_div");


        // adding the event listener to the delete btn and giving the function that updates the website according to the transaction that's deleted
        deleteButton.addEventListener("click", () => {
            const customID = pack.id;
            clear_specific(customID);
            calculateExpense();
            calculateIncome();
            calculateSavings();
            calculateDailyAvg ();
            updateAnalyticsChart();
            dash_expense();
            dash_income();
            dash_saving();
            dash_total_balance();
            print_recent_transaction();
            print_recent_budget();
            updateSpendingCategoryChart()
        });

        transacbox.appendChild(card);
    });
}


const transaction_main_box_respoui = document.querySelector('.transaction-info');
const transabox_his_respoui = document.querySelector('.transaction-box-his-respoui');

// prints all the transaction on transaction page
function printing_respo_ui (data) {

    // clear all the inner text/html so that there will be no over writting 
    transaction_main_box_respoui.innerHTML = "";
    transabox_his_respoui.innerHTML = "";
    
    data.forEach(pack => {
        const card = document.createElement("div");
        // card.classList.add("transaction-history");
        // card.classList.add("grid-prop")
        // card.classList.add("font")
        card.classList.add(`${pack.id}`)

        const merchant_details = pack.merchant;
        const date_details = pack.date;
        const method_details = pack.method;
        const price_details = pack.price;
        const cato_details = pack.catogery;
        const act = pack.act;

        card.innerHTML = `
            <div class="respo-printing-transac display font">
                <h3 class="date_div_respotrans">Date: ${date_details}</h3>
                <div class="iconic_respotrans display align-items">
                    <i class="${merchant_detailing(pack)}" id="iconic-merchant"></i>
                    <h3 class="merchant_div_respotrans">Merchant:${merchant_details}</h3>
                </div>
                <h3 class="cato_div_respotrans">Category: ${cato_details}</h3>
                <h3 class="act_div_respotrans">Type: ${act}</h3>
                <h3 class="display-type_respotrans">Status: Completed</h3>
                <h3 class="price_div_respotrans ${price_color(pack)}">Amount: ${price_details}</h3>
                <div class="button_div_respotrans display align-items justify-items">
                    <button class="clear_div_respotrans"><i class="fa-regular fa-trash-can"></i></button>
                </div>
            </div>
        `;

        const deleteButton = card.querySelector(".clear_div_respotrans");


        // adding the event listener to the delete btn and giving the function that updates the website according to the transaction that's deleted
        deleteButton.addEventListener("click", () => {
            const customID = pack.id;
            clear_specific(customID);
            calculateExpense();
            calculateIncome();
            calculateSavings();
            calculateDailyAvg ();
            updateAnalyticsChart();
            dash_expense();
            dash_income();
            dash_saving();
            dash_total_balance();
            print_recent_transaction();
            print_recent_budget();
            updateSpendingCategoryChart()
        });

        transacbox.appendChild(card);
    });
}


// takes the id of the transaction and deletes that from local storage and then prints the updated transactions
function clear_specific(idToDelete) {

    const delete_div = document.querySelector(`.${CSS.escape(idToDelete)}`);
    
    if (delete_div) {
        delete_div.remove();
    } 
    
    expense_data = expense_data.filter(item => item.id !== idToDelete);

    localStorage.setItem(
        "myExpenses",
        JSON.stringify(expense_data)
    );

    if (respouiLogic.matches) {
        printing_respo_ui(expense_data);
    } else {
        printing(expense_data);
    }
}

// if (respouiLogic.matches) {
//     printing_respo_ui(expense_data);
// } else {
//     printing(expense_data);
// }


// decide the icon  badge for the transaction
function merchant_detailing (data) {
    const cato_icon = data.catogery;

    switch (cato_icon) {
    case 'Dining':
        return 'fa-solid fa-utensils';
    case 'Transport':
        return 'fa-solid fa-bus';
    case 'Shopping':
        return 'fa-solid fa-bag-shopping';
    case 'Bills':
        return 'fa-solid fa-receipt';
    case 'Health':
        return 'fa-solid fa-stethoscope';
    case 'Leisure':
        return 'fa-solid fa-masks-theater';
    case 'Housing' :
        return 'fa-solid fa-home';
    case 'Other':
        return 'fa-solid fa-ellipsis';
    case 'Salary':
        return 'fa-solid fa-money-check-dollar';
    case 'Micro-Business' :
        return 'fa-solid fa-money-bill-trend-up'
    case 'Investment' :
        return 'fa-solid fa-hand-holding-dollar'
    default:
        return 'fa-solid fa-tag';
    }
}


// decide the color of the text-price according to expense/income/saving
function price_color(data) {
const data_color = data.act;

switch (data_color) {
    case 'Expense':
        return "red";
    case 'Income' :
        return "green";
    default:
        return "font";
}

}


if (respouiLogic.matches) {
    printing_respo_ui(expense_data);
} else {
    printing(expense_data);
}