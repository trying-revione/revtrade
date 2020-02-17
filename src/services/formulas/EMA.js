const EMA = require('technicalindicators').EMA

const getEMA = (period, values) => {
  return EMA.calculate({period : period, values : values})                    
}
         
export default getEMA;