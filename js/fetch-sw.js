"use strict";

let dom = require("./dom-stuff");

let api_calls = {};
let base = "https://swapi.co/api";
let planets = [];

api_calls.getAllPlanets = () =>{
    console.log("happy to get all planets");

    let planetXHR = new XMLHttpRequest();

    planetXHR.addEventListener("load", function(){
        let data = JSON.parse(this.responseText);
        console.log("data in the call", data);
        planets = data.results;
        /// show the planets
        planets.map(dom.populatePage);
    }); 

    planetXHR.addEventListener("error", function (){
        console.log("you have an error with the XHR call - check spelling");
    });

    planetXHR.open("GET", `${base}/planets`);
    planetXHR.send();
};

module.exports = { api_calls };

api_calls.getPlanets = () =>{
    return planets;
};

module.exports = { api_calls };