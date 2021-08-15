const {
    calculateBMI,
    recommendWorkout,
    weightStatus,
    reciept,
    heightToMeters,
    weightToKG

} = require("./healthApp")


describe("Feet to meters", () => {
    it("should return error if no number inputted", () => {
        let actual = heightToMeters()
        let expected = 0
        expect(actual).toBe(expected)
    })

    it("should convert Feet to meters", () => {
        let actual = heightToMeters(5)
        let expected = 1.524
        expect(actual).toBe(expected)

        actual = heightToMeters(6)
        expected = 1.828
        expect(actual).toBe(expected)
        
        actual = heightToMeters(7)
        expected = 2.133
        expect(actual).toBe(expected)
    })
})

describe("Inches/cm to meters", () => {
    it("should convert the given 'key' to meters", () => {
        let actual = heightToMeters(60, "in")
        let expected = 1.524
        expect(actual).toBe(expected)

        actual = heightToMeters(72, "in")
        expected = 1.828
        expect(actual).toBe(expected)

        actual = heightToMeters(84, "in")
        expected = 2.133
        expect(actual).toBe(expected)
    })

    it("should convert the given 'key' to meters", () => {
        let actual = heightToMeters(152.4, "cm")
        let expected = 1.524
        expect(actual).toBe(expected)

        actual = heightToMeters(182.88, "cm")
        expected = 1.828
        expect(actual).toBe(expected)

        actual = heightToMeters(213.36, "cm")
        expected = 2.133
        expect(actual).toBe(expected)
    })
})

describe("Pounds to Kg", () => {
    it("should return error if no number inputted", () => {
        let actual = weightToKG()
        let expected = 0
        expect(actual).toBe(expected)
    })

    it("should convert pounds to kg", () => {
        let actual = weightToKG(100)
        let expected = 45.359
        expect(actual).toBe(expected)
        
        actual = weightToKG(150)
        expected = 68.039
        expect(actual).toBe(expected)
        
        actual = weightToKG(200)
        expected = 90.719
        expect(actual).toBe(expected)
    })
})

describe("BMI", () => {
    it("should return a number", () => {
        let actual = typeof calculateBMI(1.524, 54.431)
        let expected = 'number'
        expect(actual).toBe(expected)
    })

    it("should calculate BMI using height and weight", () => {
        let actual = calculateBMI(1.524, 54.431)
        let expected = 23.4
        expect(actual).toBe(expected)

        actual = calculateBMI(1.828, 54.431)
        expected = 16.3
        expect(actual).toBe(expected)

        actual = calculateBMI(1.219, 54.431)
        expected = 36.6
        expect(actual).toBe(expected)
    })

    it("should return an error if no height or weight is inputted", () => {
        let actual = calculateBMI(1.4)
        let expected = "No weight inputted"
        expect(actual).toBe(expected)
        
        actual = calculateBMI(null, 1.4)
        expected = "No height inputted"
        expect(actual).toBe(expected)
        
        actual = calculateBMI(1.4, null)
        expected = "No weight inputted"
        expect(actual).toBe(expected)
    })
    
})

describe("Workout", () => {
    it("shoud return a error message", () => {
        let actual = recommendWorkout()
        let expected = "No BMI found"
        expect(actual).toBe(expected)
    })
    
    it("shoud return a error message", () => {
        let actual = recommendWorkout('error')
        let expected = "Invalid input"
        expect(actual).toBe(expected)
    })


    it("should give user different workout recommendations depending on the given BMI ", () => {
        let actual = recommendWorkout(23.4)
        let expected = "Workout 2 days a week"
        expect(actual).toBe(expected)


        actual = recommendWorkout(18.5)
        expected = "Needs more calories"
        expect(actual).toBe(expected)

        actual = recommendWorkout(16.3)
        expected = "Needs to eat 3 full meals a day"
        expect(actual).toBe(expected)

        actual = recommendWorkout(36.6)
        expected = "Workout 5 days a week"
        expect(actual).toBe(expected)
    })
})

describe("Weight Status", () => {
    it("shoud return a error message", () => {
        let actual = recommendWorkout()
        let expected = "No BMI found"
        expect(actual).toBe(expected)
    })

    it("should return message telling the user their weight status", () => {
        let actual = weightStatus(23.4)
        let expected = "Normal"
        expect(actual).toBe(expected)

        actual = weightStatus(16.3)
        expected = "UnderWeight"
        expect(actual).toBe(expected)

        actual = weightStatus(36.6)
        expected = "Obese"
        expect(actual).toBe(expected)
        
        actual = weightStatus(26.5)
        expected = "OverWeight"
        expect(actual).toBe(expected)

    })
    
    it("should return message telling the users with 'activity level key' their adjusted weight status", () => {
        let actual = weightStatus(18.5, "high")
        let expected = "Normal"
        expect(actual).toBe(expected)
        
        actual = weightStatus(18.5, "extreme")
        expected = "Underweight"
        expect(actual).toBe(expected)
        
        actual = weightStatus(22.3, "high")
        expected = "Normal"
        expect(actual).toBe(expected)
        
        actual = weightStatus(26.8, "high")
        expected = "Normal"
        expect(actual).toBe(expected)
        
        actual = weightStatus(26.8, "high")
        expected = "Normal"
        expect(actual).toBe(expected)
        
        actual = weightStatus(36, "high")
        expected = "Overweight"
        expect(actual).toBe(expected)

    })
})

describe("Personal Status", () => {
    it("should return a object with users BMI, weight status and workout recommendation", () => {
        let actual = reciept(1.524, 54.431, "high")
        let expected = {
            height: "5 feet",
            weight: "120 pounds",
            activityLevel: "high",
            weightStatus: "Normal",
            workOut: "Workout 2 days a week"

        }
        expect(actual).toBe(expected)
    })
})