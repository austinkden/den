document.getElementById('airportForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const airportCode = document.getElementById('airportCode').value.toUpperCase();
    const resultDiv = document.getElementById('result');
    
    const routes = {
        // Example data structure
        "SLC": {
            name: "Salt Lake City",
            SID: "ZIMMR3",
            RNAV: "MUGBE"
        },
    };

    if (routes[airportCode]) {
        const route = routes[airportCode];
        resultDiv.innerHTML = `
            ${route.name}  -  
            ${route.SID}  -  
            ${route.RNAV} 
        `;
    } else {
        resultDiv.innerHTML = 'No information available for this airport code.';
    }
    resultDiv.style.display = 'block';
});

