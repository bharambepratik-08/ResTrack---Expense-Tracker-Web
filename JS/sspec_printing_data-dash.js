const recent_list_sspec_cont = document.querySelector(".sspec-table");

function inner_sspec(data) {
    if (!data) return;

    const card = document.createElement("div");
    card.classList.add("recent-sspec-boxdiv");
    card.classList.add("display");
    card.classList.add("align-items");

    working_sum(data.id)

    const used = Number(working_sum(data.id))

    const goal = Number(data.limit);
    const percentage = goal > 0 ? Math.min((used / goal) * 100, 100).toFixed(1) : 0;

    const cato_details = data.for;

    card.innerHTML = `
            <div class="budget-box">
                <div class="upper-budget-recent display align-items">
                    <h3>${cato_details}</h3>
                    <h3>${used} / ${goal}</h3>
                </div> 
                <div class="goal-rec">
                    <div class="bar-div">
                        <div style="width: ${percentage}%; background: ${percentage > 90 ? '#106b32' : '#22c55e'}; height: 100%;"></div>
                    </div>
                </div>
            </div>
    `;
    
    recent_list_sspec_cont.appendChild(card);
}

function print_recent_sspec() {
    recent_list_sspec_cont.innerHTML = '<div class="head-budget"><h2>Recent Special Saving</h2></div>';
    
    const start = special_saving_data.length - 1;
    const end = Math.max(0, special_saving_data.length - 5);

    for (let i = start; i >= end; i--) {
        inner_sspec(special_saving_data[i]);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    print_recent_sspec();
});