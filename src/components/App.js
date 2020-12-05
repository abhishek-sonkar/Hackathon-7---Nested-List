import React, { Component, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];

export function GetTowns(props) {
  const { city } = props;
  const townList = city.towns.map((town, idx) => <li key={town.name} id={ `town${idx + 1}` }>{town.name}</li>);
  const [showList, setShowList] = useState(false);
  const toggleList = () => {
    if(showList) {
      setShowList(false);
    } else {
      setShowList(true);
    }
  }
  return (
  <div>
    <button id={props.id} onClick={toggleList}>{city.name}</button>
    { showList ? <ul>{townList}</ul> : null }
  </div>);
}

export function GetCities(props) {
  const { state } = props;
  const cityList = state.cities.map((city, idx) => <li key={city.name}>{ <GetTowns id={`city${idx + 1}`} city={city} />}</li>);
  const [showList, setShowList] = useState(false);
  const toggleList = () => {
    if(showList) {
      setShowList(false);
    } else {
      setShowList(true);
    }
  }
  return (
    <div>
      <button id={props.id} onClick={toggleList}>{state.name}</button>
      { showList ? <ul>{cityList}</ul> : null }
    </div>);
}

function App() {
  return (
    <div id="main">
      <ul>{
        states.map((state, idx) => <li key={state.name}>{ <GetCities id={`state${idx + 1}`} state={state} /> }</li>)
      }</ul>
    </div>
  );
}

export default App;