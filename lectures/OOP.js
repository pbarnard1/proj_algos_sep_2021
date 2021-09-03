class City { // Define your class with "class nameOfClass"
    constructor(cityName, countryName, currentPopulation) { // constructor is equivalent to "__init__"
        this.city = cityName;
        this.country = countryName;
        this.population = currentPopulation;
    }

    // Methods for your class go inside here.
    takeCensus(newPopulation) {
        this.population = newPopulation;
    }
}

var seattle = new City("Seattle","United States",750000); // Creating an instance of a class
console.log(seattle.population);
seattle.takeCensus(800000);
console.log(seattle.population);
