#!/usr/bin/env python3
# Script to generate all city pages with exact template structure

import os
import re

# City data for computerhulp pages
computerhulp_cities = [
    {"name": "Zoetermeer", "gps": "52.0575, 4.4937", "wikidata": "Q9927", "url_name": "zoetermeer"},
    {"name": "Dordrecht", "gps": "51.8133, 4.6901", "wikidata": "Q26421", "url_name": "dordrecht"},
    {"name": "Delft", "gps": "52.0116, 4.3571", "wikidata": "Q33433", "url_name": "delft"},
    {"name": "Gouda", "gps": "52.0115, 4.7108", "wikidata": "Q33456", "url_name": "gouda"},
    {"name": "Schiedam", "gps": "51.9186, 4.3997", "wikidata": "Q34047", "url_name": "schiedam"},
    {"name": "Alphen aan den Rijn", "gps": "52.1285, 4.6573", "wikidata": "Q213061", "url_name": "alphen-aan-den-rijn"},
    {"name": "Vlaardingen", "gps": "51.9122, 4.3419", "wikidata": "Q9920", "url_name": "vlaardingen"},
    {"name": "Rijswijk", "gps": "52.0367, 4.3208", "wikidata": "Q9920", "url_name": "rijswijk"},
    {"name": "Capelle aan den IJssel", "gps": "51.9289, 4.5778", "wikidata": "Q33422", "url_name": "capelle-aan-den-ijssel"},
]

# Student cities (all 11 including Rotterdam)
student_cities = [
    {"name": "Rotterdam", "gps": "51.9225, 4.47917", "wikidata": "Q34370", "url_name": "rotterdam"},
    {"name": "Leiden", "gps": "52.1601, 4.4970", "wikidata": "Q43631", "url_name": "leiden"},
    {"name": "Zoetermeer", "gps": "52.0575, 4.4937", "wikidata": "Q9927", "url_name": "zoetermeer"},
    {"name": "Dordrecht", "gps": "51.8133, 4.6901", "wikidata": "Q26421", "url_name": "dordrecht"},
    {"name": "Delft", "gps": "52.0116, 4.3571", "wikidata": "Q33433", "url_name": "delft"},
    {"name": "Gouda", "gps": "52.0115, 4.7108", "wikidata": "Q33456", "url_name": "gouda"},
    {"name": "Schiedam", "gps": "51.9186, 4.3997", "wikidata": "Q34047", "url_name": "schiedam"},
    {"name": "Alphen aan den Rijn", "gps": "52.1285, 4.6573", "wikidata": "Q213061", "url_name": "alphen-aan-den-rijn"},
    {"name": "Vlaardingen", "gps": "51.9122, 4.3419", "wikidata": "Q9920", "url_name": "vlaardingen"},
    {"name": "Rijswijk", "gps": "52.0367, 4.3208", "wikidata": "Q9920", "url_name": "rijswijk"},
    {"name": "Capelle aan den IJssel", "gps": "51.9289, 4.5778", "wikidata": "Q33422", "url_name": "capelle-aan-den-ijssel"},
]

print(f"Computerhulp cities: {len(computerhulp_cities)}")
print(f"Student cities: {len(student_cities)}")
print(f"Total to generate: {len(computerhulp_cities) + len(student_cities)}")
