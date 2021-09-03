class City():
    def __init__(self,city_name,country_name, population_count):
        self.name = city_name
        self.country = country_name
        self.population = population_count

    def take_census(self,new_count):
        self.population = new_count

seattle = City("Seattle","United States",750000)
print(seattle.population)
print(seattle.country)
seattle.take_census(800000)
print(seattle.population)

