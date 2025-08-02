let gSENTICount = 0; // Simulate stored count, replace with actual data if available

function countgSENTIs() {
    const username = document.getElementById('username').value;
    if (username) {
        // Example: Increment gSENTICount based on username length
        gSENTICount += username.length * 2;
        displayResults();
    } else {
        alert("Please enter a username!");
    }
}

function displayResults() {
    document.getElementById('input-box').style.display = 'none';
    document.getElementById('result-box').style.display = 'block';
    document.getElementById('gSENTI-count').textContent = gSENTICount;
    document.getElementById('prev-target').textContent = gSENTICount > 621 ? 621 : 0;
    document.getElementById('next-target').textContent = gSENTICount < 1000 ? 1000 : 2000;
}
