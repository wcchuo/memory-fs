const http = require('http'),
      MemoryFileSystem = require("memory-fs"),
      fs = new MemoryFileSystem(),
      unzip = require('unzip'),
      rFs = require('fs'),
      tmp = '/tmp',
      url = process.env.URL,
      dest = tmp + '/' + process.env.DEST,
      extractPath = __dirname+'/extract/'

var download = (url, dest, cb) => {
  fs.mkdirpSync(tmp)
  var file = fs.createWriteStream(dest)
  var request = http.get(url, (response) => {
    response.pipe(file)
    file.on('finish', () => {
      fs.createReadStream(dest)
      .pipe(unzip.Extract({
        path: extractPath
      }))
      cb(true)
    })
  })
}

download(url, dest, (d)=>{
  let readDir = rFs.readdirSync(extractPath)
  console.log(DEST + 'extracted: ' + readDir)
})
