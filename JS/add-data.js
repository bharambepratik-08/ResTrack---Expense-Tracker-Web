//Expense data naming

const merchant_e = document.querySelector('.merchant-expense');
const dining_e = document.querySelector('.dining');
const shopping_e = document.querySelector('.shopping');
const transport_e = document.querySelector('.transport');
const bills_e = document.querySelector('.bills');
const health_e = document.querySelector('.health');
const leisure_e = document.querySelector('.leisure');
const housing_e = document.querySelector('.housing');
const other_e = document.querySelector('.other');
const date_e = document.querySelector('.date-value');
const method_e = document.querySelector('.select-method');
const textarea_e = document.querySelector('.textarea-exp');
const price_e = document.querySelector('.price_expense');


function add_cato_data () {

    return dining_e.addEventListener("click", () => {
                return "dining";
            });
            shopping_e.addEventListener("click", () => {
                return "shopping";
            });
            transport_e.addEventListener("click", () => {
                return "transport";
            });
            bills_e.addEventListener("click", () => {
                return "bills";
            });
            health_e.addEventListener("click", () => {
                return "health";
            });
            housing_e.addEventListener("click", () => {
                return "housing";
            });
            leisure_e.addEventListener("click", () => {
                return "leisure";
            });
            other_e.addEventListener("click", () => {
                return  "other";
            });

}


let expense_data = [];

final_e.addEventListener("click", () => {

    const cato_expense = add_cato_data();


        const data = {
            merchant: merchant_e.value,
            date: date_e.value,
            method: method_e.value,
            textarea: textarea_e.value,
            price: price_e.value,
            catogery: cato_expense
        }

        expense_data.push(data)
    
})