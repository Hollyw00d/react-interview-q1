import { useState } from "react";
import { getLocations } from "../api/apis";

export default function GetLocations() {
  const [locations, setLocations] = useState([]);

  async function getLocationsFunc() {
    try {
      const data = await getLocations();
      setLocations(data);
    } catch (error) {
      setLocations(
        "Something went wrong and the form is not loading correctly."
      );
    }
  }
  getLocationsFunc();

  if (typeof locations === "string") {
    return <div className="col-12 col-md-9">{locations}</div>;
  }

  const locationsList = locations.map((location) => (
    <option value={location} key={location}>
      {location}
    </option>
  ));

  return (
    <div className="col-12 col-md-9">
      <select name="location" id="location" className="p-2 w-100">
        {locationsList}
      </select>
    </div>
  );
}
