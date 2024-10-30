/*
   * by balzz
   * dont delate my wm
   * follow more instagram: @iqstore78
*/
const app = require("./server/app")
const port = require("./declaration/port.jsx")
const conect = require("./declaration/conect.jsx")

app.listen(port.portnya, () => {
   setTimeout(() => {
    console.clear()
    console.log("\x1b[34m" + "\n " + "Server Is Conected...")
 }, 2000) 
   console.log("\x1b[34m" + conect.data)
})