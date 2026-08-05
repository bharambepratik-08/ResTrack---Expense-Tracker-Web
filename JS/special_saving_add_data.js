// special_saving_add_data.js


// naming the component
const final_sspec = document.querySelector('.add-sspec');
let special_saving_data = JSON.parse(localStorage.getItem("mySaving")) || [];
let Sspec_adding = JSON.parse(localStorage.getItem("mySspec")) || [];


// adds the data
function special_savings_data() {
    
    const special_saving_input = document.querySelector('.special-saving-input');

    const for_special_saving = document.querySelector('.for-special-saving');

    const data = {
        id: Date.now(),
        for: for_special_saving.value,
        limit: Number(special_saving_input.value)
    };

    special_saving_data.push(data);
    localStorage.setItem("mySaving", JSON.stringify(special_saving_data));
}

final_sspec.addEventListener("click", () => {
    special_savings_data();
    special_data_printing(special_saving_data);
    run_msg("Special saving added successfully!") // runs the notification function

    form_add_special_saving.classList.remove("able");
    form_add_special_saving.classList.add("disable");
    header.classList.remove("disable");
    plus_add.classList.remove("disable");
});