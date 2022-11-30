from scraper import UnitrendScraper
import pandas as pd
import slugify
import json
import os

def scrape_google_trends(scraper):
    df_keywords = pd.read_excel("Keywords/Keyword GT.xlsx").fillna(method='ffill')

    brand_list = list(df_keywords["Brand"].unique())
    brand_list = list(set(scraper.normalize_comma(brand_list)))
    brand_sector_map = dict(set(list(zip(df_keywords["Brand"], df_keywords["Sector"]))))
    brand_sector_map = scraper.normalize_dict_key_comma(brand_sector_map)

    df_brand_trends_all = scraper.biannually_individual_trends(brand_list)

    word_list = list(df_keywords["Word"].unique())
    word_list = list(set(scraper.normalize_comma(word_list)))
    word_sector_map = dict(set(list(zip(df_keywords["Word"], df_keywords["Sector"]))))
    word_sector_map = scraper.normalize_dict_key_comma(word_sector_map)

    df_word_trends_all = scraper.biannually_individual_trends(word_list)

    data_combined = {sector:{} for sector in df_keywords["Sector"].unique()}
    for k, v in data_combined.items():
        v["brand_list"] = []
        v["brand_data"] = {}
        
        v["word_list"] = []
        v["word_data"] = {}
    
    for k, v in brand_sector_map.items():
        if k in list(df_brand_trends_all.columns):
            data_combined[v]["brand_list"].append(k)
        
    for k, v in word_sector_map.items():
        if k in list(df_word_trends_all.columns):
            data_combined[v]["word_list"].append(k)

    for k, v in data_combined.items():
        if (len(v["brand_list"])):
            v["biannually_brand_trends_mean"], v["brand_trends_mean_change"] = scraper.trends_percentage_change(df_brand_trends_all[v["brand_list"]])
        if (len(v["word_list"])):
            v["biannually_word_trends_mean"], v["word_trends_mean_change"] = scraper.trends_percentage_change(df_word_trends_all[v["word_list"]])
        if (len(v["brand_list"])) or (len(v["word_list"])):
            v["biannually_combined_trends_mean"], v["combined_trends_mean_change"] = scraper.trends_percentage_change(df_brand_trends_all.join(df_word_trends_all)[v["brand_list"] + v["word_list"]])
        v["slug"] = slugify.slugify(k)
        
        for brand in v["brand_list"]:
            _, brand_trends_mean = scraper.trends_percentage_change(df_brand_trends_all[[brand]])
            v["brand_data"][brand] = brand_trends_mean 
        
        for word in v["word_list"]:
            _, word_trends_mean = scraper.trends_percentage_change(df_word_trends_all[[word]])
            v["word_data"][word] = word_trends_mean

    data_combined_slugged = {}
    for k, v in data_combined.items():
        data_combined_slugged[v["slug"]] = v
        data_combined_slugged[v["slug"]]['name'] = k
    
    if not os.path.isdir('Dataset'):
        os.mkdir('Dataset')

    with open('../assets/data/Data_GT.json', 'w') as fp:
        json.dump(data_combined_slugged, fp, indent = 4)

def scrape_sdgs(scraper):
    df_keywords_sdgs = pd.read_excel("Keywords/Keyword SDGs.xlsx").fillna(method='ffill').drop(columns=["index"])

    sdgs_keywords = list(set([keyword for column in df_keywords_sdgs.columns for keyword in df_keywords_sdgs[column]]))
    sdgs_map = {keyword:column for column in df_keywords_sdgs.columns for keyword in df_keywords_sdgs[column]}

    df_sdgs_trends_all = scraper.biannually_individual_trends(sdgs_keywords)

    data_combined_sdgs = {sdg:{} for sdg in df_keywords_sdgs.columns}

    for k, v in data_combined_sdgs.items():
        v["word_list"] = []
        v["word_data"] = {}

    for k, v in sdgs_map.items():
        if k in list(df_sdgs_trends_all.columns):
            data_combined_sdgs[v]["word_list"].append(k)
        
    # for k, v in sdgs_map.items():
    #     data_combined_sdgs[v]["word_list"].append(k)
        
    for k, v in data_combined_sdgs.items():
        v["biannually_word_trends_mean"], v["word_trends_mean_change"] = scraper.trends_percentage_change(df_sdgs_trends_all[v["word_list"]])
        v["biannually_combined_trends_mean"], v["combined_trends_mean_change"] = v["biannually_word_trends_mean"], v["word_trends_mean_change"]
        v["slug"] = slugify.slugify(k)
            
        for word in v["word_list"]:
            _, word_trends_mean = scraper.trends_percentage_change(df_sdgs_trends_all[[word]])
            v["word_data"][word] = word_trends_mean

    data_combined_sdgs_slugged = {}
    for k, v in data_combined_sdgs.items():
        data_combined_sdgs_slugged[v["slug"]] = v
        data_combined_sdgs_slugged[v["slug"]]['name'] = k

    if not os.path.isdir('Dataset'):
        os.mkdir('Dataset')

    with open('../assets/data/Data_SDGs.json', 'w') as fp:
        json.dump(data_combined_sdgs_slugged, fp, indent = 4)

def main():
    scraper = UnitrendScraper()

    scrape_google_trends(scraper)
    scrape_sdgs(scraper)


if __name__ == "__main__":
    main()