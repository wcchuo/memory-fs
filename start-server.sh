if [ -d "node_modules" ] 
then
    echo "Directory node_modules/ exists." 
else
    echo "Directory node_modules/ does not exists. Install now..."
    npm install
fi

if [ -d "extract" ] 
then
    echo "Directory extract/ exists." 
else
    echo "Directory extract/ does not exists. Creating now..."
    mkdir extract
fi

if [ -d "public" ] 
then
    echo "Directory public/ exists." 
else
    echo "Directory public/ does not exists. Creating now and a sample zip file..."
    mkdir public && cd public
    npm init -f && npm i axios --save
    zip -r functionA.zip *
    rm -r node_modules package.json package-lock.json
    cd ../
fi

node server