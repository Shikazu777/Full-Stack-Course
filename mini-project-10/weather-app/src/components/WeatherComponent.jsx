import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const WeatherComponent = ({ weather, city }) => {
  const sunsetTime = new Date(weather.sys.sunset * 1000);
  const formattedSunset = `${sunsetTime.getHours()} : ${sunsetTime.getMinutes()}`;

  return (
    <div className="text-center">
      <h3>{weather.main.temp}°C | {weather.weather[0].main}</h3>
      <p>{city}, {weather.sys.country}</p>
      <h5>Weather Info</h5>

      <Row className="mt-4">
        <Col><Card><Card.Body><p>{formattedSunset}</p><small>sunset</small></Card.Body></Card></Col>
        <Col><Card><Card.Body><p>{weather.main.humidity}%</p><small>humidity</small></Card.Body></Card></Col>
        <Col><Card><Card.Body><p>{weather.wind.speed} m/s</p><small>wind</small></Card.Body></Card></Col>
        <Col><Card><Card.Body><p>{weather.main.pressure} hPa</p><small>pressure</small></Card.Body></Card></Col>
      </Row>
    </div>
  );
};

export default WeatherComponent;
