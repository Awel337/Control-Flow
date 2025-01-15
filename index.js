// Part 1: Growing Pains
// Predict plant growth after 1,2,3 weeks

const PI = 3.1415
let radius =5
const area = PI * (radius * radius)
const plantSpace = 0.8

const maximumPlants = area/plantSpace
const startingPlants =20

let weekOne = startingPlants *2;
console.log("Amount of plants in Week 1: ", weekOne)

if (weekOne > 0.8 * maximumPlants) {
    console.log(": Pruned.");
  } else if (weekOne >= 0.5 * maximumPlants) {
    console.log(" Monitored.");
  } else {
    console.log("Planted");
  }
  

let weekTwo = weekOne *2;
console.log("Amount of plants in Week 2: ", weekTwo)
if (weekTwo > 0.8 * maximumPlants) {
    console.log("Pruned");
  } else if (weekTwo >= 0.5 * maximumPlants) {
    console.log("Monitored");
  } else {
    console.log("Planted");
  }
  

let weekThree = weekTwo *2;
console.log("Amount of plants in Week 3 ", weekThree)
if (weekThree > 0.8 * maximumPlants) {
    console.log("Pruned");
  } else if (weekThree >= 0.5 * maximumPlants) {
    console.log("Monitored");
  } else {
    console.log("Planted");
  }

// Part Two: Thinking Bigger
let experimentalPlants = 100
// 2^10 power is 1024
let afterTenWeeks = 100 * 1024

let plantSpaceNeeded = afterTenWeeks * plantSpace

// to the the radius, we wneed to find the square root of area divided by pi

let newRadius = Math.sqrt(plantSpaceNeeded/3.1415)

console.log("Plants after 10 weeks:", afterTenWeeks);
console.log("Total area required:", plantSpaceNeeded, "square meters");
console.log("Radius of the new garden:", newRadius, "meters");

//Part 3: Errors In Judgement

try {
    let experimentalPlants = 100;
    // 2^10 power is 1024
    let afterTenWeeks = experimentalPlants * 1024;
  
    let plantSpace = 1; // Assuming 1 square meter per plant (you can adjust this)
    let availableSpace = 5000; // Total available space in square meters (you can adjust this)
  
    let plantSpaceNeeded = afterTenWeeks * plantSpace;
  
    // Check if the required space exceeds available space
    if (plantSpaceNeeded > availableSpace) {
      throw new Error("Not enough space for the plants after 10 weeks!");
    }
  
    // Calculate the radius of the garden
    let newRadius = Math.sqrt(plantSpaceNeeded / 3.1415);
  
    console.log("Plants after 10 weeks:", afterTenWeeks);
    console.log("Total area required:", plantSpaceNeeded, "square meters");
    console.log("Radius of the new garden:", newRadius, "meters");
  } catch (error) {
    console.error("Error:", error.message);
  }
  
