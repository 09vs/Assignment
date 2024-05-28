document.getElementById("calculateBtn").addEventListener("click", function () {
  const distance = parseFloat(document.getElementById("distance").value);
  const vehicle = document.getElementById("vehicle").value;

  const vehicles = {
    //List Of Vehicles
    "Maruti Suzuki Alto": {
      speed: 140,
      efficiency: 22.05,
      tank: 35,
      range: 771.75,
    },
    "Hyundai i20": { speed: 180, efficiency: 20.35, tank: 37, range: 753.05 },
    "Tata Nexon": { speed: 180, efficiency: 17.57, tank: 44, range: 772.68 },
    "Mahindra Thar": { speed: 155, efficiency: 15.2, tank: 57, range: 866.4 },
    "Toyota Innova Crysta": {
      speed: 179,
      efficiency: 11.25,
      tank: 55,
      range: 618.75,
    },
    "Kia Seltos": { speed: 170, efficiency: 16.8, tank: 50, range: 840 },
    "Renault Kwid": { speed: 150, efficiency: 22.3, tank: 28, range: 624.4 },
    "Ford EcoSport": { speed: 182, efficiency: 15.9, tank: 52, range: 826.8 },
    "Tata Tiago": { speed: 150, efficiency: 23.84, tank: 35, range: 834.4 },
  };

  if (distance && vehicle) {
    const selectedVehicle = vehicles[vehicle];
    if (selectedVehicle) {
      const time = distance / selectedVehicle.speed;
      const fuelConsumption = distance / selectedVehicle.efficiency;
      const outOfRange =
        distance > selectedVehicle.range ? " (Out of Range)" : "";

      document.getElementById("result").innerText =
        `Time to travel ${distance} km with ${vehicle}: ${time.toFixed(
          2
        )} hours` +
        `\nFuel consumption: ${fuelConsumption.toFixed(2)} liters${outOfRange}`;

      let comparisonText = "";
      for (let key in vehicles) {
        if (key !== vehicle) {
          const otherVehicle = vehicles[key];
          const otherTime = distance / otherVehicle.speed;
          const otherFuel = distance / otherVehicle.efficiency;
          const otherOutOfRange =
            distance > otherVehicle.range ? " (Out of Range)" : "";
          comparisonText += `${key}: ${otherTime.toFixed(
            2
          )} hours, ${otherFuel.toFixed(2)} liters${otherOutOfRange}\n`;
        }
      }

      document.getElementById("comparisonResult").innerText = comparisonText;
    } else {
      alert("Please select a valid vehicle.");
    }
  } else {
    alert("Please enter a valid distance and select a vehicle.");
  }
});
