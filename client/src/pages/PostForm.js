import {Formik, Form, Field, ErrorMessage,} from "formik"
import * as Yup from "yup"
import { usePost } from "../context/postContext"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"



export const PostForm = () => {

  const {createPost, getPost, updatePost} = usePost()
  const navigate = useNavigate()
  const params = useParams()
  useEffect(() => {
   (async ()=>{ if(params.id){
    const res = await getPost(params.id)
    setPost(res.data)
   }})()
  }, [params.id])
  const [post, setPost] = useState({
    title:"",
    description:"",
    image: null
  })
  
 
 
 
  return (
    <div className="flex items-center justify-center">
      <div className="bg-zinc-800 shadow-md shadow-black p-10">

      <header className="flex justify-between items-center py-4 text-white">
        <h3 className="text-xl flex">New Post</h3>
        <Link to="/" className="text-gray-400 text-sm hover:text-gray-300 ">Go Back</Link>
      </header>


      <Formik initialValues={post}
      validationSchema={Yup.object({
        title:Yup.string().required("El titulo es necesario"),
        description:Yup.string().required("La descripcion es necesario")
        
      })}
      onSubmit={async (values, actions) => {
     if(params.id){
          await updatePost(params.id, values)
      }else{await createPost(values)}
      navigate("/")
     }}
     enableReinitialize
    >
      {({handleSubmit, setFieldValue}) =>(
        <Form onSubmit={handleSubmit}>
        <label className="text-sm block font-bold text-gray-400" htmlFor="tile">Title</label>
        <Field name="title" placeholder="title" className="px-3 py-2 focus:outline-none rounded bg-gray-400 text-white w-full"/>
        <ErrorMessage component="p" name="title"  className="bg-red-600 text-white"/>
        <label className="text-sm block font-bold text-gray-400" htmlFor="description">Description</label>
        <Field  component="textarea" rows={3} name="description" placeholder="description" className="px-3 py-2 focus:outline-none rounded bg-gray-400 text-white w-full"/>
        <ErrorMessage component="p" name="description" className="bg-red-600 text-white"/>
        <label className="text-sm block font-bold text-gray-400" htmlFor="description">Description</label>
        <input type="file" name="image" className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full" onChange={(e) => setFieldValue("image", e.target.files[0])}/>
        <button className="bg-gray-300 hover:bg-gray-500 hover:animate-pulse font-bold text-black hover:text-white text-xl rounded-xl px-3 py-3 block w-full mb-3" type="submit">Save</button>
      </Form>
      )}
    </Formik>
      </div>

    </div>
  )
}


