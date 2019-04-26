# memory-fs

NodeJS fs in-memory example. `server.js` with start a local fileserver. `test.js` will GET a zip file from `http://localhost:3001/public`, load into memory-js, read and extract to a local `extract/` directory. This exercise shows how to `fs.createWriteStream` and `fs.createReadStream` using memory-js .


### Run
`./start-server.sh`

Run this script to build a zip file called 'public/functionA.zip' and create a local fileserver.

### Test
`./test.sh`

Run this script to download the zip file via HTTP, load into memory-fs, read from memory and extract zip content to local file system.

