import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
  cases: {
    hex: "#ff0000",
    multiplier: 800,
  },
  recovered: {
    hex: "#3eee2e",
    multiplier: 1200,
  },
  deaths: {
    hex: "#333333",
    multiplier: 2000,
  },
};
export const sortData = (data) =>{
    const sortedData=[...data];
    sortedData.sort( (a,b)=> (a.cases>b.cases)?-1:1 );
    return sortedData;
};

//Draw circles on the map with interactive tooltips

export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
    <div className="popContainer">
    <div
            className="flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="Name"><b>{country.country}</b></div>
          <div className="Confirmed">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="Recovered">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="Deaths">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
    </div>       
      </Popup>
    </Circle>
  ));
  export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";