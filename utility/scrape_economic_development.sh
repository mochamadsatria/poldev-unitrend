#!/bin/bash

# https://crontab.guru/#0_12_*_*_1
# At 12:00 on Monday.
# 0 12 * * 1 /PATH/TO/scrape_economic_development.sh

# Edit crontab
# crontab -e

# restart the cron service
# systemctl restart cron

gdown --folder https://drive.google.com/drive/folders/1KBz0MBHf7BcK9EQCNK4szh1tYG_Z7GXf
python scrape_economic_development.py