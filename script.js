document.getElementById('airportForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const airportCode = document.getElementById('airportCode').value.toUpperCase();
    const resultDiv = document.getElementById('result');
    
    const routes = {
        // Example data structure
        "SLC": {
            name: "Salt Lake City",
            SID: "ZIMMR3",
            RNAV: "ALL: MUGBE"
        },

        "PHX": {
            name: "Phoenix",
            SID: "SMMUR2",
            RNAV: "8: KIDNG  -  25: BRKEM  -  17L: RAYDR  -  17R/16L/16R: BOEGI"
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

