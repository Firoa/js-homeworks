'use strict';

const findBestEmployee = function(employees) {
  let bestWorker;
  let taskQuantity = 0;
  for (const entry of Object.entries(employees)) {
    if (entry[1] > taskQuantity) {
      bestWorker = entry[0];
      taskQuantity = entry[1];
    }
  }
  return bestWorker;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
