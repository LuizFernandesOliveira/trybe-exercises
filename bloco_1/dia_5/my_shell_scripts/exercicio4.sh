#!/bin/bash

echo "typing the filename or filepath"
read FILE_PATH

if [ -f "$FILE_PATH" ]
then 
    echo "o caminho $FILE_PATH está habilitado"
    if [ -w "$FILE_PATH" ]
    then
        echo "você tem permissão para editar $FILE_PATH"
    else
        echo "você NAO foi autorizado a editar $FILE_PATH"
    fi
else
    echo "o arquivo $FILE_PATH não existe"
fi


