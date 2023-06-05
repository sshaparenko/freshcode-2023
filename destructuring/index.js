const monitor = {
  model: 'test',
  price: 999.9,
  sizes: {
    width: {
      value: 50,
      unit: 'cm',
    },
    height: {
      value: 50,
      unit: 'cm',
    }
  },
  color: 'red',
};

const monitorWidthUnits = monitor.sizes.width.unit;

const { 
  sizes: {
    width: {
      //new name
      unit : newUnit
    },
  },
} = monitor;

//access through newUnit
console.log(newUnit); 