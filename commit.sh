# !/bin/sh
#
# Copyright (C) 2019 Ihwan Mualana <ihwan.cfc@gmail.com>
#
#########################################################


echo "Git Username : "
read username

echo "Git Password : "
read password

echo "Commit Message"
read message


git config --global user.name $username

git config --global user.password $password

git init

git add .

git commit -m $message

git push -u origin master
