import "./App.css";
import CurrentWeather from "./companents/current-weather/current-weather";
import Search from "./companents/search/search";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
