const pollenStats = document.getElementById('pollenStats')
const pollenDescr = document.getElementById('pollenDescr')

    fetch("https://api.pollenrapporten.se/v1/regions")
    .then(response => response.json())
      .then(data => {
        let cards = "";

        for (const region of data.items) {
          if (region.name !== "Sverige") { // ta bort Sverige
            cards += `
              <div class="card">
                <div class="card-header" onclick="toggleDetails(this)">
                  ${region.name}
                </div>
                <div class="card-details">
                  <p>Här är polleninfo för ${region.name}.</p>
                </div>
              </div>
            `;
          }
        }
    
        pollenStats.innerHTML = cards;
      })
      .catch(error => {
        console.error("Fel vid hämtning:", error);
      })

// Funktion som öppnar/stänger detaljrutan
function toggleDetails(element) {
  const details = element.nextElementSibling;
  details.classList.toggle("open");
}      


// ////////////////
// /////// get pollen text östersund region //////////
// fetch('https://api.pollenrapporten.se/v1/forecasts?region_id=2a2a2a2a-2a2a-4a2a-aa2a-2a2a303a3230&current=true')
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         const pollenTextArray = data.items[0].text;
//         pollenDescr.innerHTML = `<p>${pollenTextArray}</p>`;
// })    