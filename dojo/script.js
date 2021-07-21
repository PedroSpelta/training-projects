/*
 * Essa função pode ajudar a incluir os elementos na tela.
 * Não existe obrigação em usá-la e vocês podem alterá-la a vontade.
 */
const url = 'https://restcountries.eu/rest/v2/all';


function createTextElement(label, text, className) {
  const element = document.createElement('p');
  element.className = className;
  element.innerText = `${label} ${text}`;
  return element;
}

function createFlagElement(src, alt) {
  const image = document.createElement('img');
  image.src = src;
  image.alt = alt;
  image.className = 'flag';

  return image;
}

function createCountryItem({flag, name, capital, languages}) {
  const countryInfo = document.createElement('li');

  countryInfo.appendChild(createTextElement('', name, 'name'));

  countryInfo.appendChild(createFlagElement(flag, name));
  
  const countryCapital = document.createElement('div');
  countryCapital.className = 'capital-div'
  countryCapital.appendChild(createTextElement('', 'capital', 'capital-title'));
  countryCapital.appendChild(createTextElement('', capital, 'capital-name'));
  countryInfo.appendChild(countryCapital);

  const countryLangs = document.createElement('div');
  countryLangs.className = 'languages-div'
  countryLangs.appendChild(createTextElement('', 'Idiomas', 'languages-title'))
  countryLangs.appendChild(createTextElement('', languages.join(', '), 'languages-name'));
  countryInfo.appendChild(countryLangs);
  countryInfo.className = 'country-info';

  return countryInfo;
}

async function getApiInfo() {
  const response = await fetch(url);
  const data = await response.json();

  const countries = data.map(({ translations, flag, languages, capital }) => {
    
    return { 
    name: translations.br,
    flag,
    languages: languages.map(( { name }) => name ),
    capital,
  }});

  return countries;
}

function appendCountries(countries) {
  const list = document.querySelector('ul');
  countries.forEach((country) => {
    list.appendChild(
      createCountryItem(country)
    )
    });
}

window.onload = async function () {
  const countries = await getApiInfo();
  appendCountries(countries);
};
