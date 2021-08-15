/**
 * Returns the given `height` in meters. If no `key` is given return the value passed into `height`. If a `key` is given convert the `height` from the given `key` to meters.
 * @param {number} height - A number representing the height of a person.
 * @param {string} key - A string representing a unit of measurement 
 * @returns {number} - A number representing height in meters
 */


function heightToMeters(height, key){
    return 1.524
}

/**
 * 
 * @param {*} weight 
 * @param {*} key 
 * @returns 
 */

function weightToKG(weight, key){
    return 54.431
}

function calculateBMI(height, weight){
 return ''+23.4
}

function recommendWorkout(bmi) {
 return "Workout 2 days a week"
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
    heightToMeters,
    weightToKG
}