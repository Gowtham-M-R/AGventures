// Toggle Navigation Menu (Hamburger Menu)
function toggleNavMenu() {
    var navMenu = document.getElementById("navMenu");
    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "flex";
    }
}

// Toggle Logout Menu
function toggleLogoutMenu() {
    const logoutMenu = document.getElementById('logoutMenu');
    logoutMenu.style.display = (logoutMenu.style.display === 'block') ? 'none' : 'block';
}

// Close Logout Menu if clicked outside
document.addEventListener('click', function(event) {
    const userIcon = document.querySelector('.user-profile');
    const logoutMenu = document.getElementById('logoutMenu');

    if (!userIcon.contains(event.target) && logoutMenu.style.display === 'block') {
        logoutMenu.style.display = 'none';
    }
});

// Chart.js Initialization
window.onload = function() {
    var ctx1 = document.getElementById('chlorophyllChart').getContext('2d');
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Chlorophyll Levels',
                data: [65, 59, 80, 81, 56],
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1
            }]
        },
    });

    var ctx2 = document.getElementById('moistureChart').getContext('2d');
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Moisture Levels',
                data: [85, 74, 65, 90, 55],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
            }]
        },
    });

    var ctx3 = document.getElementById('fertilizerChart').getContext('2d');
    new Chart(ctx3, {
        type: 'pie',
        data: {
            labels: ['Nitrogen', 'Phosphorus', 'Potassium', 'Others'],
            datasets: [{
                data: [25, 25, 30, 20],
                backgroundColor: ['#ff6347', '#4caf50', '#ffeb3b', '#00bcd4'],
            }]
        },
    });

    var ctx4 = document.getElementById('yieldChart').getContext('2d');
    new Chart(ctx4, {
        type: 'radar',
        data: {
            labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug'],
            datasets: [{
                label: 'Yield Predictions',
                data: [80, 70, 90, 85, 75],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
            }]
        },
    });
};
