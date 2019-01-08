const { slugger } = require("./index")
const marker = require("@ajar/marker")

let str = "sarah shara shir sameah"
let str2 = "ganan gidel dagan bagan"

marker.magenta(str, str2)
marker.magenta(slugger(str, str2))
