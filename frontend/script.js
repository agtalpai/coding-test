console.log("This is a js file!");


console.log('load');

// console.log(document);

async function loadEvent() {
    let countriesData = await fetch("https://restcountries.com/v3.1/all");
    let countriesJSON = await countriesData.json();
    console.log(countriesJSON[11]);
    let countriesSection = document.getElementById('countries');

    // console.dir(countriesSection);
    // countriesSection.innerHTML+="hali";
    countriesSection.insertAdjacentHTML("beforeend",`
    <h1>Hello, world</h1>
    `);

 /*   let countryComponent = `
    <div class="country>
        <h2>ide kerül az ország neve</h2>
    </div>
    `*/

    function countryComponent(countryName) {
        return `
        <h2>${countryName}</h2>
        `
    }

    for (let index = 0; index < countriesJSON.length; index++) {
        // const element = array[index];
        // 0
        console.log(index);
        // countriesSection.insertAdjacentHTML("beforeend", countriesJSON[index].name.common);
        countriesSection.insertAdjacentHTML("beforeend", countryComponent(countriesJSON[index].name.common));
    }

}

window.addEventListener('load',loadEvent)

function logger(logThis) {
        console.log(logThis);
    }

logger("Hello");
