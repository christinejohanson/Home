const pollenStats = document.getElementById('pollenStats')
const pollenDescr = document.getElementById('pollenDescr')


////// Pollen city Östersund
// fetch('https://api.pollenrapporten.se/v1/regions')
//     //runs when the request is complete.
//     //takes the response object as an argument and returns a promise
//     .then((response) => {
//         //.json parse the response body as json.
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         //för att ta ut namnet på nr 22
//         //const regionName = data.items[22].name;
//         //get a list w all the regions
//         const regionName = data.items.map(region => region.name);
//         //join tar alla element i arrayen o skapar en sträng
//         const regionsString = regionName.join(", ");
//         console.log(regionsString);
//         //rubrik med array som kommaseparerad sträng
//         //pollenStats.innerHTML = `<h1>${regionName}</h1>`; 
//         //använder join för att skriva ut med , och mellanslag
//         pollenStats.innerHTML = `<h2>${regionName.join(", ")}</h2>`;
//     })    


    fetch("https://api.pollenrapporten.se/v1/regions")
    .then(response => response.json())
    .then(data => {
      // Bygg en lista av alla ortnamn
      const listItems = data.items
        .map(region => `<li>${region.name}</li>`) // ett <li> per ort
        .join(""); // slå ihop till en sträng
  
      // Skriv ut i DOM
      pollenStats.innerHTML = `
        <ul>${listItems}</ul>
      `;
    })


////////////////
/////// get pollen text östersund region //////////
fetch('https://api.pollenrapporten.se/v1/forecasts?region_id=2a2a2a2a-2a2a-4a2a-aa2a-2a2a303a3230&current=true')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        const pollenTextArray = data.items[0].text;
        pollenDescr.innerHTML = `<p>${pollenTextArray}</p>`;
})    