const getYieldForPlant = (corn) => {
  return corn.yield;
};

module.exports = getYieldForPlant;

///////////////////////////////////////////////////

const getYieldForCrop = (input) => {
  return input.crop.yield * input.numCrops;
};

module.exports = getYieldForCrop;

///////////////////////////////////////////////////

/* const getTotalYield = ({ crops }) => {
 return 
}

module.exports = getTotalYield; */
