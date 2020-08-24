#!/bin/bash


ARQS=`ls $1 | grep "$2" | cat `

for ARQ in ${ARQS[@]} ; do
    if [ -f "$1/$ARQ" ]
    then
    echo "o nome era: $ARQ"
        DATA=`date +%F`
        NAME=$1'/'$ARQ
        NEW_NAME=$1'/'$DATA-$ARQ
        `mv $NAME $NEW_NAME`
        echo "foi alterado para: $DATA-$ARQ"
    else
    echo "nao: $ARQ"
    fi
done

