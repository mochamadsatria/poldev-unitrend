#!/bin/bash

# https://crontab.guru/
# At 07:30 on every day.
# 30 7 * * * /PATH/TO/scrape_indonesian_election.sh

# Edit crontab
# crontab -e

# restart the cron service
# systemctl restart cron

ROOT="/_/poldev-old/poldev-unitrend/"
UPDATE_OTHER=0

source /home/poldev/miniconda3/bin/activate
conda activate poldev

cd $ROOT
mkdir -p assets/data
if [[ ! -f assets/data/Data_GT.json ]]; then
    UPDATE_OTHER=1
fi

cd $ROOT/utils
gdown --folder https://drive.google.com/drive/folders/1KBz0MBHf7BcK9EQCNK4szh1tYG_Z7GXf
python3 scrape_indonesian_election.py
if [ $UPDATE_OTHER = 1 ]; then
    python3 scrape_economic_development.py
fi

cd $ROOT
# git add .
# git commit -m "update election data"
# git pull
# git push

#docker compose down
#docker compose up --build -d
