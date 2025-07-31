import React, { useState } from "react";
import { Button, Form, FormGroup, InputGroup, FormControl } from "react-bootstrap";

const CityComponent = ({ updateCity, fetchWeather }) => {
  const [cityInput, setCityInput] = useState("");

  const handleSearch = () => {
    if (cityInput.trim() === "") return;
    fetchWeather(cityInput);
  };

  return (
    <Form className="text-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1116/1116453.png"
        width={60}
        alt="cloud"
        className="mb-3"
      />
      <h4>Find Weather of your city</h4>
      <InputGroup className="mb-3 mt-3 w-75 mx-auto">
        <FormControl
          placeholder="Enter city"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </InputGroup>
    </Form>
  );
};

export default CityComponent;
