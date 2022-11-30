import { useState, useContext, createContext, useEffect } from "react"
import { getPostRequest, createPostRequest, deletePostRequest, getPosttRequest, updatePostRequest } from "../api/posts"


export const postContext = createContext()

export const usePost = () =>{
   const context =  useContext(postContext)
    return context
}



export const PostProvider = ({children}) =>{

    const[post, setPost] = useState([])

    
    
    const getPosts = async () =>{
       const res = await getPostRequest()
       setPost(res.data);
    }


    const createPost = async (posta) =>{
        const res = await createPostRequest(posta)
        setPost([...post, res.data])
    }

     const deletePost = async (id) => {
         await deletePostRequest(id);
        setPost(post.filter(post => post._id !== id ))
    }

    const getPost = async(id) =>{
        const res = await getPosttRequest(id)
        return res

    }

    const updatePost= async(id, posta) => {
        const res = await updatePostRequest(id, posta)
        setPost(post.map((posta) => posta._id === id ? res.data : posta))
    }


    useEffect(() => {
        getPosts()
      }, [])



    return <postContext.Provider value={{
        post,
        getPosts,
        createPost,
        deletePost,
        getPost,
        updatePost
    }}>
        {children}
    </postContext.Provider>
} 