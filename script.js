function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
document.addEventListener('DOMContentLoaded', () => {

    // --- Chart Configurations ---
    const chartFontColor = '#343a40';
    const chartGridColor = 'rgba(0, 0, 0, 0.05)';
    Chart.defaults.font.family = "'Poppins', sans-serif";
    Chart.defaults.color = chartFontColor;

    // 1. Sustainable Material Source Chart (Doughnut Chart)
    const materialCtx = document.getElementById('materialSourceChart').getContext('2d');
    new Chart(materialCtx, {
        type: 'doughnut',
        data: {
            labels: ['Organic Cotton', 'Recycled Polyester', 'Linen', 'Hemp', 'Tencel/Lyocell'],
            datasets: [{
                label: 'Adoption by Projects',
                data: [35, 25, 18, 12, 10],
                backgroundColor: [
                    '#005f73',
                    '#0a9396',
                    '#94d2bd',
                    '#e9d8a6',
                    '#ee9b00'
                ],
                borderColor: '#f8f9fa',
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                },
                title: {
                    display: false,
                    text: 'Sustainable Material Adoption'
                }
            }
        }
    });

    // 2. Durability Comparison Chart (Line Chart)
    const durabilityCtx = document.getElementById('durabilityChart').getContext('2d');
    new Chart(durabilityCtx, {
        type: 'line',
        data: {
            labels: ['0', '10', '20', '30', '40', '50'], // Wash Cycles
            datasets: [{
                label: 'Data-Optimized Blend',
                data: [100, 98, 97, 95, 92, 90], // Strength Retention %
                borderColor: '#0a9396',
                backgroundColor: 'rgba(10, 147, 150, 0.1)',
                fill: true,
                tension: 0.3
            }, {
                label: 'Traditional Fabric',
                data: [100, 95, 88, 80, 72, 65], // Strength Retention %
                borderColor: '#ee9b00',
                backgroundColor: 'rgba(238, 155, 0, 0.1)',
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: { display: true, text: 'Number of Wash Cycles' },
                    grid: { color: chartGridColor }
                },
                y: {
                    title: { display: true, text: 'Strength Retention (%)' },
                    beginAtZero: false,
                    grid: { color: chartGridColor }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });

    // 3. Design Variability Chart (Bar Chart)
    const variabilityCtx = document.getElementById('variabilityChart').getContext('2d');
    new Chart(variabilityCtx, {
        type: 'bar',
        data: {
            labels: ['Color Match', 'Shrinkage', 'Pilling', 'Seam Strength'],
            datasets: [{
                label: 'Variability Before Analysis (%)',
                data: [12, 8, 15, 10],
                backgroundColor: '#ee9b00',
                borderRadius: 4
            }, {
                label: 'Variability After Analysis (%)',
                data: [3, 2, 4, 3],
                backgroundColor: '#005f73',
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Deviation from Spec (%)'
                    },
                    grid: { color: chartGridColor }
                }
            },
             plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });

});