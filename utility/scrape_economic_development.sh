#!/bin/bash

# https://crontab.guru/#0_12_*_*_1
# At 12:00 on Monday.
# 0 12 * * 1 /PATH/TO/scrape_economic_development.sh

# Edit crontab
# crontab -e

# restart the cron service
# systemctl restart cron

ROOT="/home/poldev/work/poldev-unitrend"

cd $ROOT
mkdir -p assets/data

cd $ROOT/utility
gdown --folder https://drive.google.com/drive/folders/1KBz0MBHf7BcK9EQCNK4szh1tYG_Z7GXf
python scrape_economic_development.py

cd $ROOT

# git add .
# git commit -m "update economic development data"
# git pull
# git push

docker compose down
docker compose up --build -d