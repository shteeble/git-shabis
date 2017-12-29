#!/bin/bash

echo Kashering Git...
git config --global alias.vus status
sleep 1.5
echo -ne '#####                     (10%)\r'
git config --global alias.chulent merge
sleep 1.5
echo -ne '########                  (30%)\r'
git config --global alias.shlep pull
sleep 1.5
echo -ne '#############             (50%)\r'
git config --global alias.shep fetch
sleep 1.5
echo -ne '##################        (70%)\r'
git config --global alias.shtup push
sleep 1.5
echo -ne '#######################   (90%)\r'
git config --global alias.loshon_hora blame
sleep 1.5
echo -ne '\n'
echo Shkuyach, Git is now Kosher.
