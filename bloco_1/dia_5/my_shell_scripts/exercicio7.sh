#!/bin/bash

if [ -d "$1" ] #-c verifica se é um diretorio
then
    QT=`ls -l $1 | grep "^-" -c`
    echo "O $1 tem $QT arquivos"
else
    echo "o argumento $1 não é um diretorio"
fi
