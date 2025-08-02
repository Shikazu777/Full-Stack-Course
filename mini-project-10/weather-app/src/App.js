import React, { useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import CityComponent from "./components/CityComponent";
import WeatherComponent from "./components/WeatherComponent";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState();
  const [error, setError] = useState("");

  const fetchWeather = async (cityName) => {
    try {
      const apiKey = "";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");

      const data = await response.json();
      setWeather(data);
      setCity(cityName);
    } catch (err) {
      setError("Error fetching the weather data, please provide a correct city name");
    }
  };

  return (
    <Container className="mt-5">
      <h3 className="text-center">React Weather App</h3>

      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={setCity} fetchWeather={fetchWeather} />
      )}

      {error && (
        <Modal show={true} onHide={() => setError("")}>
          <Modal.Header closeButton>
            <Modal.Title>Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>{error}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setError("")}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
}

export default App;
