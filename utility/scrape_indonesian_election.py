from scraper import UnitrendScraper
import pandas as pd
import slugify
import json
import os
import collections

capres_keywords = {
    "Anies Baswedan" : "/m/02vrsyl",
    "Ganjar Pranowo" : "/g/12b02cxjk",
    "Prabowo Subianto" : "/m/085brj",
    "Puan Maharani" : "/m/010263fr",
    "Ridwan Kamil" : "/m/0k2fm41",
    "Muhaimin Iskandar" : "/m/010r7xt1",
    "Erick Thohir" : "/m/0h_9zgb",
    "Agus Harimurti Yudhoyono" : "/m/0j5vnmx",
    "Airlangga Hartarto" : "/g/122mqpxm",
    "Andika Perkasa" : "/g/11b6b4vtms"
}

capres_keywords_inverse = {v:k for k,v in capres_keywords.items()}

partai_keywords = {
    "Partai Kebangkitan Bangsa" : "/m/024qsx",
    "Partai Gerakan Indonesia Raya" : "/m/04f3hq1",
    "Partai Demokrasi Indonesia Perjuangan" : "/m/023cgx",
    "Partai Golongan Karya" : "/m/024qrb",
    "Partai NasDem" : "/m/0h3lgx6",
    "Partai Keadilan Sejahtera" : "/m/07dg_t",
    "Partai Persatuan Pembangunan" : "/m/024qs4",
    "Partai Amanat Nasional" : "/m/07dh5b",
    "Partai Demokrat" : "/m/03vnv8",
}

partai_keywords_inverse = {v:k for k,v in partai_keywords.items()}

def scrape_indonesia_election(scraper):
    data_pemilu = collections.defaultdict(lambda: collections.defaultdict(dict))

    df_capres_trends_12m = scraper.biannually_trends([v for k,v in capres_keywords.items()], cat=0, timeframe = "today 12-m")
    df_capres_trends_12m = df_capres_trends_12m.rename(columns=capres_keywords_inverse)
    data_pemilu["capres"]["trends"]["12m"] = df_capres_trends_12m.to_dict()

    df_capres_trends_3m = scraper.biannually_trends([v for k,v in capres_keywords.items()], cat=0, timeframe = "today 3-m")
    df_capres_trends_3m = df_capres_trends_3m.rename(columns=capres_keywords_inverse)
    data_pemilu["capres"]["trends"]["3m"] = df_capres_trends_3m.to_dict()

    df_partai_trends_12m = scraper.biannually_trends([v for k,v in partai_keywords.items()], cat=0, timeframe = "today 12-m")
    df_partai_trends_12m = df_partai_trends_12m.rename(columns=partai_keywords_inverse)
    data_pemilu["partai"]["trends"]["12m"] = df_partai_trends_12m.to_dict()

    df_partai_trends_3m = scraper.biannually_trends([v for k,v in partai_keywords.items()], cat=0, timeframe = "today 3-m")
    df_partai_trends_3m = df_partai_trends_3m.rename(columns=partai_keywords_inverse)
    data_pemilu["partai"]["trends"]["3m"] = df_partai_trends_3m.to_dict()

    df_capres_region_12m = scraper.region_trends([v for k,v in capres_keywords.items()], cat = 0, timeframe = "today 12-m")
    df_capres_region_12m = df_capres_region_12m.rename(columns=capres_keywords_inverse)
    data_pemilu["capres"]["region"]["12m"] = df_capres_region_12m.to_dict()

    df_capres_region_3m = scraper.region_trends([v for k,v in capres_keywords.items()], cat = 0, timeframe = "today 3-m")
    df_capres_region_3m = df_capres_region_3m.rename(columns=capres_keywords_inverse)
    data_pemilu["capres"]["region"]["3m"] = df_capres_region_3m.to_dict()
        
    df_partai_region_12m = scraper.region_trends([v for k,v in partai_keywords.items()], cat = 0, timeframe = "today 12-m")
    df_partai_region_12m = df_partai_region_12m.rename(columns=partai_keywords_inverse)
    data_pemilu["partai"]["region"]["12m"] = df_partai_region_12m.to_dict()

    df_partai_region_3m = scraper.region_trends([v for k,v in partai_keywords.items()], cat = 0, timeframe = "today 3-m")
    df_partai_region_3m = df_partai_region_3m.rename(columns=partai_keywords_inverse)
    data_pemilu["partai"]["region"]["3m"] = df_partai_region_3m.to_dict()

    if not os.path.isdir('../assets/data'):
        os.mkdir('Dataset')

    with open('../assets/data/Data_Pemilu.json', 'w') as fp:
        json.dump(data_pemilu, fp, indent = 4)


def main():
    scraper = UnitrendScraper()

    scrape_indonesia_election(scraper)


if __name__ == "__main__":
    main()