class DataDisplay:
    def display_countries(self, countries):
        print("Randomly Selected Countries:")
        for country in countries:
            print(f"Name: {country.get('name', 'N/A')}")
            print(f"Capital: {country.get('capital', 'N/A')}")
            print(f"Region: {country.get('region', 'N/A')}")
            print(f"Population: {country.get('population', 'N/A')}")
            print("-" * 40)