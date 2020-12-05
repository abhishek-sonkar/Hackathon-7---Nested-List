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
  const { towns } = props;
  return (
    <div>
      {towns.map((town, idx) => {
        return (
        <div>
          <button key={idx} id={ `town${idx + 1}` }>{town.name}</button>
        </div>)
      })}
    </div>)
}

export function GetCities(props) {
  const { cities } = props;
  const [showStates, setShowStates] = useState(Array(cities.length).fill(false));
  const toggleList = (idx) => {
    showStates[idx] = !showStates[idx];
    setShowStates([...showStates]);
  }
  return (
  <div>
    {cities.map((city, idx) => {
      return (
      <div>
        <button key={idx} id={ `city${idx + 1}` } onClick={() => toggleList(idx)}>{city.name}</button>
        { showStates[idx] ? <GetTowns towns={city.towns}/> : null }
      </div>)
    })}
  </div>)
}

function App() {
  const [showStates, setShowStates] = useState(Array(states.length).fill(false));
  const toggleList = (idx) => {
    showStates[idx] = !showStates[idx];
    setShowStates([...showStates]);
  }
  return (
    <div id="main">{
        states.map((state, idx) => {
          return (<div>
            <button key={idx} id={ `state${idx + 1}` } onClick={() => toggleList(idx)}>{state.name}</button>
            { showStates[idx] ? <GetCities cities={state.cities}/> : null }
          </div>)
         })
      }
    </div>
  );
}

export default App;