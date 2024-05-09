document.getElementById('airportForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const airportCode = document.getElementById('airportCode').value.toUpperCase();
    const resultDiv = document.getElementById('result');
    
    const routes = {
        // Example data structure
        "SLC": {
            name: "Salt Lake City",
            SID: "ZIMMR3",
            RNAV: "<strong>ALL:</strong> MUGBE"
        },

        "PHX": {
            name: "Phoenix",
            SID: "SMMUR2",
            RNAV: "<strong>8:</strong> KIDNG  -  <strong>25:</strong> BRKEM  -  <strong>17L:</strong> RAYDR  -  <strong>17R/16L/16R:</strong> BOEGI"
        },
    };

    if (routes[airportCode]) {
        const route = routes[airportCode];
        resultDiv.innerHTML = `
            ${route.RNAV}<br>
            ${route.SID}<br>
            ${route.name} 
        `;
    } else {
        resultDiv.innerHTML = 'No information available for this airport code.';
    }
    resultDiv.style.display = 'block';
});

