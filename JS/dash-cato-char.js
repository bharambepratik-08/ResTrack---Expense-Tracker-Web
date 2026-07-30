// spending-chart.js

// creates the chart on dashboard
let spendingChart = null;

function updateSpendingCategoryChart() {
    const ctx = document.getElementById('spendingCategoryChart');
    if (!ctx) return;

    const expenses = expense_data.filter(item => item.act === "Expense");
    
    const catMap = {
        "Housing": { total: 0, color: "#059669" },
        "Dining": { total: 0, color: "#EA580C" },
        "Shopping": { total: 0, color: "#2563EB" },
        "Transport": { total: 0, color: "#7C3AED" },
        "Bills": { total: 0, color: "#DB2777" },
        "Health": { total: 0, color: "#0891B2" },
        "Leisure": { total: 0, color: "#4F46E5" },
        "Other": { total: 0, color: "#4B5563" }
    };

    let totalSpending = 0;

    expenses.forEach(item => {
        const amt = parseFloat(item.price) || 0;
        if (catMap[item.catogery]) {
            catMap[item.catogery].total += amt;
            totalSpending += amt;
        }
    });

    document.getElementById('chart-total-amount').innerText = `₹${totalSpending.toLocaleString()}`;

    const activeLabels = Object.keys(catMap).filter(cat => catMap[cat].total > 0);
    const activeData = activeLabels.map(cat => catMap[cat].total);
    const activeColors = activeLabels.map(cat => catMap[cat].color);

    if (spendingChart) {
        spendingChart.destroy();
    }

        spendingChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: activeLabels,
            datasets: [{
                data: activeData,
                backgroundColor: activeColors,
                borderWidth: 0,
                hoverOffset: 10,
                cutout: '75%' 
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom', 
                    labels: {
                        color: 'gray',
                        usePointStyle: true,
                        padding: 20,
                        font: { size: 12, family: 'Inter' }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const val = context.raw;
                            const percent = ((val / totalSpending) * 100).toFixed(1);
                            return ` ₹${val.toLocaleString()} (${percent}%)`;
                        }
                    }
                }
            }
        }
    });
}



document.addEventListener("DOMContentLoaded", updateSpendingCategoryChart);