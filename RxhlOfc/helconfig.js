global.prefa = ['','!','.',',','🐤','🗿']
global.falown = "Anda bukan Owner 🥲"
global.falmurbug = "Anda bukan Murbug 🥲"
global.inputnum = "0858052849310"
global.falgrup = "Only Group 😁"
global.imagemenu = ["https://files.catbox.moe/9rljat.jpg", "https://files.catbox.moe/ifbth9.jpg", "https://files.catbox.moe/nck1gx.jpg", "https://files.catbox.moe/9ysmz5.jpg", "https://files.catbox.moe/ozuu64.jpg", "https://files.catbox.moe/hsx5kw.jpg", "https://files.catbox.moe/toshzh.jpg"];

global.owner = [
  "62858052849310", //should start with country code
  ""  //second number if available
]


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})