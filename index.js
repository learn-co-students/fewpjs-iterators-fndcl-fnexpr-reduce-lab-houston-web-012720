const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// array.reduce(callback, initialValue)
let totalBatteries = batteryBatches.reduce((acc, val) => {
  return acc + val
}, 0)


