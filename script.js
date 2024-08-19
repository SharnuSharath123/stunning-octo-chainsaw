// script.js
document.getElementById('fetchData').addEventListener('click', async () => {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        document.getElementById('dataDisplay').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('dataDisplay').innerText = 'Failed to fetch data.';
    }
});
