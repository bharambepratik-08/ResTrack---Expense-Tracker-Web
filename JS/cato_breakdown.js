// cato_breakdown.js

function breakdown_co_si() {
    const divcard = document.querySelector(".cato-breakdown");
    if (!divcard) return;
    
    divcard.innerHTML = "";

    const expenses = expense_data.filter(item => item.act === "Expense");

    if (expenses.length === 0) return;
    
    const grandTotal = expenses.reduce((sum, item) => sum + Number(item.price), 0);
   
    const categories = [
        { name: "Housing", class: "housing-div" },
        { name: "Dining", class: "dining-div" },
        { name: "Shopping", class: "shopping-div" },
        { name: "Transport", class: "transport-div" },
        { name: "Bills", class: "bills-div" },
        { name: "Health", class: "health-div" },
        { name: "Leisure", class: "leisure-div" },
        { name: "Other", class: "other-div" }
    ];
   
    categories.forEach(cat => {
     
        const catTotal = expenses
            .filter(item => item.catogery === cat.name)
            .reduce((sum, item) => sum + Number(item.price), 0);

        
        if (catTotal > 0) {
            const percentage = (catTotal / grandTotal) * 100;

            const card = document.createElement("div");
            card.classList.add("grid-item", cat.class);
            
            card.style.flex = `1 1 calc(${percentage}% - 10px)`;
            card.style.minWidth = "120px";

            card.innerHTML = `
                <div class="cat-info">
                    <span class="cat-name">${cat.name.toUpperCase()}</span>
                    <h2 class="cat-amount">₹${catTotal.toLocaleString()}</h2>
                </div>
            `;

            divcard.appendChild(card);
        }
    });
}

document.addEventListener("DOMContentLoaded", breakdown_co_si);