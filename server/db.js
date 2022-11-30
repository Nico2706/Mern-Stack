import mongoose from "mongoose";

const conectarDB = async() =>{
    try {
        const connection = await mongoose.connect("mongodb+srv://nico27:root@cluster0.z4jc9c1.mongodb.net/?retryWrites=true&w=majority"
        ,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        const url =`${connection.connection.host}:${connection.connection.port}`
        console.log(`"mongodb conectado en ${url}`);
    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1)
    }
}
export default conectarDB