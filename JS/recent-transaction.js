const recent_box = document.querySelector(".recent-budget");

function inner_recent(data) {
  
    if (!data) return;

    const card = document.createElement("div");
    card.classList.add("recent-div");
    card.classList.add("display");
    card.classList.add("align-items");

    const merchant_details = data.merchant;
    const price_details = data.price;
    const cato_details = data.catogery;
    const act = data.act;

    card.innerHTML = `
            <div class="recent-left display align-items" style="flex: 1; gap: 15px;">
                <div class="icon-box display align-items justify-items"> 
                    <i class="${merchant_detailing(data)}" id="iconic-merchant"></i>
                </div>
                <div class="details">
                    <h4 style="margin: 0; color: var(--text-color);">${merchant_details}</h4>
                    <p style="margin: 0; font-size: 12px; color: #6d6d6d;">${cato_details}</p>
                </div>
            </div>
            <div class="recent-right">
                <h4 class="${price_color(data)}" style="margin: 0;">
                    ${act === 'Expense' ? '-' : '+'}₹${Number(price_details).toLocaleString()}
                </h4>
            </div>
        `;
    
    recent_box.appendChild(card);
}

function print_recent_transaction() {

    recent_box.innerHTML = '<div class="recent-transaction"><h3>Recent Transaction</h3></div>';
    const start = expense_data.length - 1;
    const end = Math.max(0, expense_data.length - 4);

    for (let i = start; i >= end; i--) {
        inner_recent(expense_data[i]);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    print_recent_transaction();
});