const SMA = require('technicalindicators').SMA               

const getSMA = (period, values) => {
  return SMA.calculate({period : period, values : values})
}

export default getSMA;
