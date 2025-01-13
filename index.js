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
    

    // Calculate the total area required
    let plantSpaceNeeded = plantSpaceNeeded * plantSpace;
  
    // Check if the area exceeds the garden's capacity
    if (plantSpaceNeeded > area) {
      throw new Error(
        "The garden is too small! Required area: " +
        plantSpaceNeeded +
          " square meters, but available area is only " +
          area +
          " square meters."
      );
    }
  
    console.log("Plants after 10 weeks:", plantSpaceNeeded);
    console.log("Total area required:", plantSpaceNeeded, "square meters");
    console.log("Garden capacity is sufficient.");
  } catch (error) {
    console.error("Error:", error.message);
  }
   
