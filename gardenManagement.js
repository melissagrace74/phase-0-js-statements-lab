let temperature = 90;
let timeOfDay = "morning";
let soilMoisture = 30;

// Watering Control
temperature = 85; 

if (temperature > 80) {
  console.log("Watering on");
} else {
  console.log("Watering off");
}

// Garden Lights Control
if (timeOfDay === "evening" || timeOfDay === "night") {
  console.log("Lights on");
} else {
  console.log("Lights off");
}

// Soil Moisture Adjustment
soilMoisture = 0;

while (soilMoisture < 40) {
  soilMoisture += 5;
  console.log(soilMoisture);
}
