#!/bin/bash

if [ -e "$1" ] #-e verifica se o arquivo existe
then
    if [ -d "$1" ] #-c verifica se é um diretorio
    then
        echo "é um diretório"
    else
        if [ -f "$1" ] #-f verifica se é um arquivo normal
        then
            echo "é um arquivo normal"
        else
            echo "É outro tipo de arquivo"
        fi
    fi
    
    ls -F $1
    
else
    echo "o diretorio $1 nao existe"
fi
