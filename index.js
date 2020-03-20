const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = batteryBatches.reduce((accumulator, number) => {return accumulator + number}, 0)
