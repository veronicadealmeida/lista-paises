let countriesPromise = fetch('https://restcountries.com/v2/all');

countriesPromise.then((resp) => {
  resp.json().then((countries) => {
    renderTable(countries);
  });
});

function renderTable(countries) {
  let listcontries = document.getElementById('countryList_ul');
  countries.map((country) => {
    let countryCard = document.createElement('li');

    let cardInner = document.createElement('div');
    let cardFront = document.createElement('div');
    let cardBack = document.createElement('div');

    let imgCardFront = document.createElement('img');

    let CountryH3 = document.createElement('h3');

    let countryNativeName = document.createElement('p');
    let countryCapital = document.createElement('p');
    let countryRegion = document.createElement('p');
    let countrySubregion = document.createElement('p');

    let countryRegionValue = country.region;

    countryCard.classList.add('countryCard');
    countryCard.classList.add(countryRegionValue.replace(' ', '-'));

    cardInner.classList.add('countryCard__flip-card-inner');

    cardFront.classList.add('countryCard__flip-card-front');
    cardBack.classList.add('countryCard__flip-card-back');
    imgCardFront.classList.add('countryCard__flag');

    imgCardFront.src = country.flag;
    imgCardFront.alt = country.name;

    CountryH3.innerHTML = country.name;
    countryNativeName.innerHTML = country.nativeName;
    countryCapital.innerHTML = country.capital;
    countryRegion.innerHTML = country.region;
    countrySubregion.innerHTML = country.subregion;

    cardFront.appendChild(imgCardFront);

    cardBack.appendChild(CountryH3);
    cardBack.appendChild(countryNativeName);
    cardBack.appendChild(countryCapital);
    cardBack.appendChild(countryRegion);
    cardBack.appendChild(countrySubregion);

    cardInner.appendChild(cardBack);
    cardInner.appendChild(cardFront);

    countryCard.appendChild(cardInner);
    listcontries.appendChild(countryCard);
  });
}
