const pollenStats = document.getElementById('pollenStats')
const pollenDescr = document.getElementById('pollenDescr')


////// Pollen stats Östersund
fetch('https://api.pollenrapporten.se/v1/regions')
    //runs when the request is complete.
    //takes the response object as an argument and returns a promise
    .then((response) => {
        //.json parse the response body as json.
        return response.json();
    })
    .then((data) => {
        console.log(data);
        //get a list w all the regions
        const regionName = data.items[19].name;
        //const regionsString = regionNames.join(", ");
        pollenStats.innerHTML = `<h1>${regionName}</h1>`;            
    })    

////////////////
/////// get östersund region //////////
fetch('https://api.pollenrapporten.se/v1/forecasts?region_id=2a2a2a2a-2a2a-4a2a-aa2a-2a2a303a3230&current=true')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        const pollenTextArray = data.items[0].text;
        pollenDescr.innerHTML = `<p>${pollenTextArray}</p>`;
})    