import requests
from random import sample

class CountryFetcher:
    API_URL = "https://restcountries.com/v2/all"

    def fetch_random_countries(self, count=10):
        try:
            response = requests.get(self.API_URL)
            response.raise_for_status()
            countries = response.json()
            return sample(countries, min(count, len(countries)))
        except requests.exceptions.RequestException as e:
            raise Exception(f"Failed to fetch random countries: {e}")