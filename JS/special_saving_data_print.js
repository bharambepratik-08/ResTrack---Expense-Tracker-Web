// special_saving_data_print.js


// naming the component
const printing_div = document.querySelector('.data-printing-special');


// prints the data in budgets page under special saving 
function special_data_printing (item) {

    // clears the older savings to update them to new one's
    printing_div.innerHTML = '';
    saving_main_form.innerHTML = '';
    
    
    item.forEach(data => {

        if (!data) return;

        const card = document.createElement("div");
        card.classList.add("special-saving-boxdiv");
        card.classList.add("display");
        card.classList.add("align-items"); 

        const used = Number(working_sum(data.id))


        const goal = Number(data.limit);
        const per_data = goal > 0 ? Math.min((used / goal) * 100, 100).toFixed(1) : 0;  // calculate the percentage of money saved for the saving 

        const for_detail = data.for;

         card.innerHTML = `
            <div class="special-saving-print-box display">
                <div class="upper-budget-recent display align-items">
                    <h3>${for_detail}</h3>
                    <h3>${used} / ${goal}</h3>
                </div> 
                <div class="bar-sspec">
                    <div style="width: ${per_data}%; background: ${per_data > 90 ? '#106b32' : '#22c55e'}; height: 100%;"></div>
                </div>
                <div class="per-sspec display ">
                    <h4>${per_data} %</h4>
                    <button class="delete-button-sspec">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>
        `;

        const deleteButton = card.querySelector(".delete-button-sspec");

        // to delete a specific special saving 
        deleteButton.addEventListener("click", () => {
            const customID = data.id;
            clear_sspec(customID);
            
        });

        add_saving_main(data);

        printing_div.appendChild(card);
    })
}


// deletes the specific saving 
function clear_sspec(idToDelete) {

    const delete_div = document.querySelector(`.${CSS.escape(idToDelete)}`);
    
    if (delete_div) {
        delete_div.remove();
    } 
    
    special_saving_data = special_saving_data.filter(item => item.id !== idToDelete);

    localStorage.setItem(
        "myExpenses",
        JSON.stringify(special_saving_data)
    );

    special_data_printing(special_saving_data)

}


// naming the component
const saving_main_form = document.querySelector('.sspec-buttons')


// adding the button (under catogery) to add saving page 
function add_saving_main (item) {  

    const card = document.createElement("button")
    card.classList.add("buttons_s")
    card.classList.add("buttons_ei")
    card.classList.add("display")
    card.classList.add("align-items")
    card.classList.add("justify-items")
    card.classList.add("sppec-button-save")
    card.setAttribute("type", "button")
    card.setAttribute("value", `${item.for}`)
    card.setAttribute("id", `${item.id}`) // this specific id matches to the only single specific saving which helps to update it when ever saving is added

    card.innerHTML = `
        <i class="fa-solid fa-ellipsis"></i>
        <p>${item.for}</p>
    `
    
    saving_main_form.appendChild(card);
}


document.addEventListener("DOMContentLoaded", () => {
    special_data_printing(special_saving_data);
});


// for adding the total moeny added to saving for special saving 
function working_sum(value) {
        
    const valuemap = expense_data.filter(data => value == data.key && data.act == 'Saving')

    const used = valuemap.reduce(
        (sum, item) => sum + Number(item.price),
        0
    )

    return used;

}