import conectarDB from "./db.js"
import {app} from "./app.js"
conectarDB()

app.listen(3000)
console.log("server un running port", 3000)

