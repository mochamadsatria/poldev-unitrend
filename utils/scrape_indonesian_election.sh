#!/bin/bash

# https://crontab.guru/
# At 07:30 on every day.
# 30 7 * * * /PATH/TO/scrape_indonesian_election.sh

# Edit crontab
# crontab -e

# restart the cron service
# systemctl restart cron

ROOT="/home/poldev/work/poldev-unitrend"
UPDATE_OTHER=0

conda activate poldev

cd $ROOT
mkdir -p assets/data
if [[ ! -f assets/data/Data_GT.json ]]; then
    UPDATE_OTHER=1
fi

cd $ROOT/utils
gdown --folder https://drive.google.com/drive/folders/1KBz0MBHf7BcK9EQCNK4szh1tYG_Z7GXf
python scrape_indonesian_election.py
if [ $UPDATE_OTHER = 1 ]; then
    python scrape_economic_development.py
fi

cd $ROOT
# git add .
# git commit -m "update election data"
# git pull
# git push

docker compose down
docker compose up --build -d