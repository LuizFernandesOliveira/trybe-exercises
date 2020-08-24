#!/bin/bash

ARQS=`ls | grep ".png" | cat `

for ARQ in ${ARQS[@]}
do
    if [ -f "$ARQ" ]
    then
        DATA=`date +%F`
        `mv $ARQ $DATA-$ARQ`
         echo "nomes modificados"
    fi
done



