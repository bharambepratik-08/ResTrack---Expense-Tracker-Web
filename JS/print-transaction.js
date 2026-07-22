const transacbox = document.querySelector('.transaction-box-his');

function printing (data) {

    transacbox.innerHTML = "";
    
    data.forEach(pack => {
        const card = document.createElement("div");
        card.classList.add("transaction-history");
        card.classList.add("grid-prop")

        const merchant_details = pack.merchant;
        const date_details = pack.date;
        const method_details = pack.method;
        const price_details = pack.price;
        const cato_details = pack.catogery;
        const act = pack.act;
        card.innerHTML = `
            <h3>${date_details}</h3>
            <h3>${merchant_details}</h3>
            <h3>${cato_details}</h3>
            <h3>${act}</h3>
            <h3>Completed</h3>
            <h3>${price_details}</h3>
            <h3>ED</h3>
        `;

        transacbox.appendChild(card);
    });
}

printing(expense_data)