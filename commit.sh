# !/bin/sh
#
# Copyright (C) 2019 Ihwan Mualana <ihwan.cfc@gmail.com>
#
#########################################################

echo "Commit Message"
read message

git init

git add --all

git commit -m $message

git push -u origin master
