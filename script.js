// CLASSES PROJECT
// In this project, you will build a Mazda car factory that manufactures both cars and trucks.
// Read each set of instructions carefully!

// BUILD YOUR FACTORY!

// DECLARE A FACTORY CLASS
// All automobiles manufacutered should have the following properties: make (Mazda), location (USA), airbags (true), abs (true), warranty (60,000 miles / 3 years)
// This factory should also run two functions: massBuild() and customerBuild()

// massBuild should receive the following parameters: quantity, options.
// It should print "Building QUANTITY COLOR TRIM MODEL's" i.e: "Building 100 blue Touring CX-5's"

// customerBuild should receive the following parameters: color, options.
// It should print "Building one COLOR TRIM MODEL with the following options: OPTIONS", i.e: "Building one red Sport Mazda3 with the following options: heated seats, rear spoiler"

// Create the Factory class below:

class Factory {
    constructor (factoryInfo = {}){
        this.make = "Mazda";
        this.location = "USA";
        this.airbags = true;
        this.abs = true;
        this.warranty = "60,000 miles / 3 years"
        this.massBuild = (quantity, options) =>{
            console.log("Building " + quantity + " " + this.color + " " + this.trim + " " + this.model + "'s.")
        }
        this.customerBuild = (color, options) => {
            console.log("Building one " + color + " " + this.trim + " " + this.model + " with the following options: " + options.extras)
        }
    }
}

// CREATE A SUB-CLASS CALLED CAR
// It should extend from Factory.
// The constructor should have the following properties: model, doors, color, enginetype, transmission, trim, wheelstrim, audio, seatstrim, moonroof. The values should be specified when creating an instance of Car.
// It should specifically inherit the warranty property from Factory so we can modify it.
// Car should also have the following additional properties: enginesize (4), navigation (true), backupcamera (true), warranty (100,000 miles / 5 years)
// Write your code below:

class Car extends Factory{
    constructor(carInfo = {}){
        super(carInfo.factoryInfo)
        this.model = carInfo.model,
        this.doors = 4,
        this.color = carInfo.color,
        this.enginetype = carInfo.enginetype,
        this.transmission = carInfo.transmission,
        this.trim = carInfo.trim,
        this.wheelstrim = carInfo.wheelstrim,
        this.audio = carInfo.audio,
        this.seatstrim = carInfo.seatstrim,
        this.moonroof = carInfo.moonroof,
        this.enginesize = 4,
        this.navigation = true,
        this.backupcamera = true,
        this.warranty = "100,000 miles / 5 years"
    }
}

// changing doors to 4 fixes all of cars 

// CREATE A SUB-CLASS CALLED SPORT
// It should extend from Car.
// The constructor should have the following properties: model, trim, transmission, top, color, seatstrim, audio, wheelstrim. The values should be specified when creating an instance of Sport.
// Sports cars should also have the following additional properties: moonroof (false), enginetype (gasoline), convertible (true), doors (2)
// Write your code below:

class Sport extends Car{
    constructor(sportCarInfo = {}){
        super(sportCarInfo.carInfo)
        this.top = sportCarInfo.top,
        this.moonroof = false,
        this.enginetype = "gasoline",
        this.convertible = true,
        this.doors = 2
    }
}


// CREATE A SUB-CLASS CALLED TRUCK
// Yes...this Mazda factory makes trucks....
// It should extend from 'Factory'.
// The constructor should have the following properties: model, color, enginesize, hitch, bed, navigation. The values should be specified when creating an instance of Truck.
// Truck should also have the following properties, standard: backupcamera (true), audio (basic)
// It should also inherit the warranty property so we can extend it to: 150,000 miles / 6 years.
// Write your code below:

class Truck extends Factory {
    constructor(truckInfo = {}){
        super(truckInfo.factoryInfo)
        this.model = truckInfo.model,
        this.color = truckInfo.color,
        this.enginesize = truckInfo.enginesize,
        this.hitch = truckInfo.hitch,
        this.bed = truckInfo.bed,
        this.navigation = truckInfo.navigation,
        this.backupcamera = true,
        this.audio = "basic",
        this.warranty = "150,000 miles / 6 years", 
        this.trim = "Sport"
    }
}

// LET'S BUILD SOME CARS AND TRUCKS!

// MAZDA3 MASS PRODUCTION
// Create an instance  Car.
// The following properties must be specified: model (mazda3), color (red), enginetype (hybrid), transmission (automatic), trim (touring), wheels (base), audio (premium), seats (leather), and moonroof (true)

// Write your 'mazda3' instance below:

const mazda3 = {
    model: "Mazda3",
    color: "Red",
    enginetype: "Hybrid",
    transmission: "Automatic",
    trim: "Touring",
    wheelstrim: "Base",
    audio: "Premium",
    seatstrim: "Leather",
    moonroof: true
}

const mazda3car = new Car(mazda3);

// Print mazda3. I should have all the above properties.
// Write your code below:

console.log(mazda3car);

// Print calling massBuild(), building 35000 cars.
// It should print: "Building 35000 Red Touring Mazda3's."
// Write your code below:

mazda3car.massBuild(35000, {
    color: mazda3car.color, 
    trim: mazda3car.trim, 
    model: mazda3car.model
});



// Print, calling customerBuild(), building one yellow mazda3 with the following options, as an array: weather package, satellite radio, rear spoiler.
// It should read: "Building one yellow Touring Mazda3 with the following options: weather package, satellite radio, rear spoiler"
// Write your code below:

mazda3car.customerBuild(mazda3car.color,{
    trim: mazda3car.trim,
    model: mazda3car.model,
    extras: "weather package, satellite radio, rear spoiler."
})


// MIATA-RF MASS PRODUCTION
// Create an instance  Sport.
// The following properties must be specified: model (Miata-RF), trim (Grand Touring), transmission (manual),  top (hard top), color (red), seats (leather), audio (premium), wheels (premium).

// Write your 'miataRf' instance below:
// Write your code below:

const miataRf = {
    carInfo:{
    model: "Miata-RF",
    trim: "Grand Touring",
    transmission: "Manual",
    color: "Red",
    seatstrim: "Leather",
    audio: "Premium",
    wheelstrim: "Premium"
    },
    top: "Hard Top",
}

const miataCar = new Sport(miataRf)

// Print miataRf. It should have all of the above properties. Plus, the extended warranty.
// Write your code below:

console.log(miataCar);

// Print miataRf, calling massBuild(), building 15,000
// It should print: "Building 15000 Red Grand Touring Miata-RF's."
// Write your code below:

miataCar.massBuild(15000, {color: miataCar.color, trim: miataCar.trim, model: miataCar.model});



// Print miataRf, calling customerBuild(), building one black Miata-Rf with the following options, as an array: hid headlights, sports suspension, leather steering wheel, heated seats, adaptive cruise control.
// It should read: "Building one black Grand Touring Miata-RF with the following options: hid headlights, sports suspension, leather steering wheel, heated seats, adaptive cruise control"
// Write your code below:

miataCar.customerBuild(miataCar.color, {
    trim: miataCar.trim,
    model: miataCar.model,
    extras: "hid headlights, sports suspension, leather steering wheel, heated seats, adaptive cruise control."
})

// console.log(trailBlazerTruck.customerBuild(trailBlazerTruck.color, {
//     trim: "Sport",
//     color: trailBlazerTruck.color,
//     model: trailBlazerTruck.model,
//     extras: "seat warmers, tinted windows, fog lamps."
// }))

// TRAIL BLAZER MASS PRODUCTION
// The Trail Blazer should inherit from truck.
// The following properties must be specified: model (Trail Blazer), color (blue), trim (Sport), enginesize (8), hitch (true), bed (standard), navigation (true), doors (2)

// Write your 'trailBlazer' instance below:
// Write your code below:

const trailBlazer = {
    model: "Trail Blazer",
    color: "Blue",
    trim: "Sport",
    enginesize: 8,
    hitch: true,
    bed: "Standard",
    navigation: true,
    doors: 2
}

const trailBlazerTruck = new Truck(trailBlazer)

// Print trailBlazer. It should have all the above properties. Plus, the extended warranty.
// Write your code below:

console.log(trailBlazerTruck)

// Print trailBlazer, calling massBuid(). It should build 35000 trucks.
// It should print: "Building 35000 blue Sport Trail Blazer's."
// Wrint your code below:

trailBlazerTruck.massBuild(35000,{ 
    color: trailBlazerTruck.color, 
    trim: trailBlazerTruck.trim, 
    model: trailBlazerTruck.model
})

// Print trailBlazer, calling customerBuild(). It should build a red Trail Blazer with the following options, as an array: seat warmers, tinted windows, fog lamps.
// It should print: "Building one red Sport Trail Blazer with the following options: seat warmers, tinted windows, fog lamps"
// Write your code below:

trailBlazerTruck.customerBuild(trailBlazerTruck.color, {
    trim: "Sport",
    color: trailBlazerTruck.color,
    model: trailBlazerTruck.model,
    extras: "seat warmers, tinted windows, fog lamps."
})