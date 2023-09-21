import { useLoaderData } from "react-router-dom"
import Post from "../post/Post"
import './posts.css'


function Posts() {
  const posts = useLoaderData()
  return (
    <div>
        <h2>post:{posts.length}</h2>
        <div className="kotopito">
          {
            posts.map(post =><Post key={post.id} post={post}/>)
          }
        </div>
    </div>
  )
}

export default Posts
