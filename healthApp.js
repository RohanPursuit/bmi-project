/**
 * Returns the given `height` in meters. If no `key` is given return the value passed into `height`. If a `key` is given convert the `height` from the given `key` to meters. 
 * formula ---> feet * 0.3048 = meters
 * formula ---> cm * 100 = meters
 * 
 * @param {number} height - A number representing the height of a person.
 * @param {string} key - A string representing a unit of measurement 
 * @returns {number} - A number representing height in meters
 */


function toMeters(height, key){
    return 1.524
}

/**
 * Returns the given `weight` in kilograms. If no `key` is given return the value passed into `weight`. If a `key` is given convert the `weight` from the given `key` to kilograms.
 * @param {number} weight - A number representing the weight of a person.
 * @param {string} key - A string representing a unit of measurement 
 * @returns {number} - A number representing weight in kilograms
 */

function weightToKG(weight, key){
    return 0
}

/**
 * Return BMI using the inputted `height` and `weight`. formula --> BMI = kg/m**2
 * @param {number} height - A number representing the height of a person.
 * @param {number} weight - A number representing the weight of a person.
 * @returns {number} - A number representing BMI
 */

function calculateBMI(height, weight){
    if (!height || !weight){
        return !height ? "No height inputted" : "No weight inputted"
    }

 return 1*(weight/height**2).toFixed(1)
}

//calculateBMI(null, 1.4)

/**
 * 
 * @param {*} bmi 
 * @returns 
 */

function recommendWorkout(bmi) {

    let arr = [1];
 return `Workout 2 days a week`
}

function weightStatus(bmi, activity){
    return "Normal"
}

function healthInfo(){
    let obj = {}
    return obj
}

module.exports = {
    calculateBMI,
    recommendWorkout,
    weightStatus,
    healthInfo,
    toMeters,
    weightToKG
}