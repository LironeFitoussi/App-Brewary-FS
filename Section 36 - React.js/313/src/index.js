// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom/client";
import cars from "./practice";

const root = ReactDOM.createRoot(document.getElementById("root"));

import animals, { useAnimals } from "./data";
const [cat, dog] = animals;
const [animal, makeSound] = useAnimals(cat);
console.log(animal);
makeSound();

console.log(animals);

// const [name, sound] = animals;
// const [name: catName, sound: catSound] = animals;
// const [name="catName", sound="catSound"] = animals;
// const {feedingRequirments: {food, water}} = cat;
const {food, water} = feedingRequirments
console.log(food);
