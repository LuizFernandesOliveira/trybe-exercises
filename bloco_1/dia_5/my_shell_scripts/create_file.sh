#!/bin/bash

echo "====================================="
echo "digite o nome do arquivo com extensão"
echo "====================================="

read NAME

> $NAME

chmod +x $NAME

echo "#!/bin/bash" > $NAME

echo "========================================"
echo "o arquivo foi criado e dado permissoes x"
echo "========================================"

