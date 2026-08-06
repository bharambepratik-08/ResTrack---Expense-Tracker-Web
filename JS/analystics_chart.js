// analystics_chart.js
let analyticsChart = null;

function updateAnalyticsChart() {
    const ctx = document.getElementById("analyticsChart");
    if (!ctx) return;

    const data = JSON.parse(localStorage.getItem("myExpenses")) || [];
    console.log("Chart is processing data:", data); // Check your console (F12)

    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const labels = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const dailyIncome = new Array(daysInMonth).fill(0);
    const dailyExpense = new Array(daysInMonth).fill(0);
    const dailySaving = new Array(daysInMonth).fill(0);

    data.forEach(item => {
        if (!item.date) return;

        const [year, month, day] = item.date.split('-').map(Number);
        const itemDate = new Date(year, month - 1, day);


        if (itemDate.getMonth() === currentMonth && itemDate.getFullYear() === currentYear) {
            const dayIndex = itemDate.getDate() - 1; 
            const amount = parseFloat(item.price) || 0;

            if (item.act === "Income") dailyIncome[dayIndex] += amount;
            else if (item.act === "Expense") dailyExpense[dayIndex] += amount;
            else if (item.act === "Saving") dailySaving[dayIndex] += amount;
        }
    });

    if (analyticsChart) {
        analyticsChart.destroy();
    }

    const monthName = now.toLocaleString('default', { month: 'long' });

    analyticsChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [
                {
                    label: `Income (${monthName})`,
                    data: dailyIncome,
                    borderColor: "#10b981",
                    backgroundColor: "rgba(16, 185, 129, 0.1)",
                    borderWidth: 3,
                    tension: 0.3,
                    fill: true
                },
                {
                    label: `Expense (${monthName})`,
                    data: dailyExpense,
                    borderColor: "#ef4444",
                    backgroundColor: "rgba(239,68,68,0.2)",
                    borderWidth: 3,
                    tension: 0.3,
                    fill: true
                },
                {
                    label: `Saving (${monthName})`,
                    data: dailySaving,
                    borderColor: "#3b82f6",
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                    borderWidth: 3,
                    tension: 0.3,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { labels: { color: 'grey' } }
            },
            scales: {
                x: { 
                    ticks: { color: 'gray' },
                    grid: { color: 'rgba(255,255,255,0.05)' }
                },
                y: { 
                    beginAtZero: true,
                    ticks: { 
                        color: 'gray',
                        callback: (value) => '₹' + value 
                    },
                    grid: { color: 'rgba(255,255,255,0.05)' }
                }
            }
        }
    });
}