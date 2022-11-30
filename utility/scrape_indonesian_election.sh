#!/bin/bash

# https://crontab.guru/#0_12_*_*_1
# At 13:00 on every day.
# 0 13 * * * /PATH/TO/scrape_indonesian_election.sh

# Edit crontab
# crontab -e

# restart the cron service
# systemctl restart cron

ROOT="/home/poldev/work/poldev-unitrend"

cd $ROOT
mkdir -p assets/data

cd $ROOT/utility
gdown --folder https://drive.google.com/drive/folders/1KBz0MBHf7BcK9EQCNK4szh1tYG_Z7GXf
python scrape_indonesian_election.py

cd $ROOT

# git add .
# git commit -m "update election data"
# git pull
# git push

docker compose down
docker compose up --build -d