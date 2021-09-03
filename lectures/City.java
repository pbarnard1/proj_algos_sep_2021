public class City {
    private String name;
    private String country;
    private int population;

    public City(String cityName, String countryName, int currentPopulation) {
        this.name = cityName;
        this.country = countryName;
        this.population = currentPopulation;
    }

    public City(String countryName, int currentPopulation) {
        this.name = "Anonymous City";
        this.country = countryName;
        this.population = currentPopulation;
    }

    public void takeCensus(int newPopulation) {
        this.population = newPopulation;
    }
}