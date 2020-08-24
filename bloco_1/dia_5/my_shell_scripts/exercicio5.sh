#!/bin/bash

echo "=========================================="
echo "digite um caminho de arquivo ou diretorio"
echo "======== para verificar seu tipo ========="
echo "=========================================="

read DIR_OR_FILE_NAME

if [ -e "$DIR_OR_FILE_NAME" ] #-e verifica se o arquivo existe
then
    if [ -d "$DIR_OR_FILE_NAME" ] #-c verifica se é um diretorio
    then
        echo "é um diretório"
    else
        if [ -f "$DIR_OR_FILE_NAME" ] #-f verifica se é um arquivo normal
        then
            echo "é um arquivo normal"
        else
            echo "É outro tipo de arquivo"
        fi
    fi
    
    ls -l $DIR_OR_FILE_NAME
else
    echo "o diretorio $DIR_OR_FILE_NAME nao existe"
fi
