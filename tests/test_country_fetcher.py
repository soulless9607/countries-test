import unittest
from src.country_fetcher import CountryFetcher

class TestCountryFetcher(unittest.TestCase):
    def setUp(self):
        self.fetcher = CountryFetcher()

    def test_fetch_random_countries(self):
        countries = self.fetcher.fetch_random_countries(10)
        self.assertEqual(len(countries), 10)

    def test_fetch_single_country(self):
        country = self.fetcher.fetch_random_countries(1)[0]
        self.assertIn('name', country)
        self.assertIn('capital', country)
        self.assertIn('region', country)
        self.assertIn('population', country)

if __name__ == '__main__':
    unittest.main()