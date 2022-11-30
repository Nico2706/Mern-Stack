import {v2 as cloudinary} from "cloudinary"

cloudinary.config({
    cloud_name:"dt61ppmbu",
    api_key:"184564382218417",
    api_secret:"udHivKTJT8zUw56hjbRCZ-rCc9E"
})

export const uploadImage  = async filePath =>{
   return await cloudinary.uploader.upload(filePath,{
        folder:"posts"
    })
}

export const deleteImage = async id=>{
    return await cloudinary.uploader.destroy(id)
}