import {VscEmptyWindow} from "react-icons/vsc"
import { usePost } from "../context/postContext"
import {Link} from "react-router-dom"
import { PostCard } from "../components/PostCard"
export const HomePage = () => {

  const{post} = usePost()

  if(post.length === 0) return (
    <div className="flex flex-col justify-center items-center">
      <VscEmptyWindow className="w-48 h-48 text-white"/>
      <h1 className="text-white uppercase text-2xl font-bold">
        No existen publicaciones 
      </h1>
    </div>
  )
  

  return (
    <div>
      <header className="flex justify-between py-4  ">
      <h1 className="text-3xl text-gray-300 font-bold">Posts({post.length})</h1>
      <Link to="/new" className="bg-white rounded-xl font-bold uppercase text-black hover:bg-green-400 hover:animate-pulse">
        Crear Publicacion
      </Link>
      </header>
      
      <div className="grid grid-cols-3 gap-2">
      {post.map(post=>(
        <PostCard post={post} key={post.id}/>
      ))}
      </div>
  
    
    </div>
  )
}
 