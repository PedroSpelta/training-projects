import logo from './logo.svg';
import './App.css';


function CountryCard(props) {

}

class Countries {
  constructor() {
    this.baseUrl = 'https://restcountries.eu/rest/v2/all';
  }

  async getCountries() {
    const response = await fetch(this.baseUrl);
    const data = await response.json();
    return data;
  }

  async getCountriesData(obj) {
    const rawData = await this.getCountries();
    
  }
}


const test = new Countries();
test.getCountries();

function App() {
  return (
    <h1>eae</h1>
  );
}

export default App;
