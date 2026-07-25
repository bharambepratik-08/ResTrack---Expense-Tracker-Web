const transacbox = document.querySelector('.transaction-box-his');

function printing (data) {

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

        deleteButton.addEventListener("click", () => {
            const customID = pack.id;
            clear_specific(customID);
            calculateExpense();
            calculateIncome();
            calculateSavings();
            calculateDailyAvg ();
            updateAnalyticsChart();
        });

        transacbox.appendChild(card);
    });
}


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

    printing(expense_data);
}

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


printing(expense_data);