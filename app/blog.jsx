const axios = require('axios')
const { useEffect } = require('react')
const React = require('react')
const SERVER_URL = 'http://localhost:3000'

const Blog = ()=>{
    const [posts, setPosts] = React.useState([])
    const fetchPosts = ()=>{
        return axios.get(`${SERVER_URL}/post`).then(({data})=>{
            setPosts(data)
        })
    }

    const addPost =()=>{
        return axios.post(`${SERVER_URL}/post`,{
            title: 'New Post' + Math.random(),
            body: 'This is a new post'+ Math.random(),
            author : 'Niva'+ Math.random()
        })
    }

    useEffect(fetchPosts,[])
    return(
        <div>
            <h1>Blog</h1>
            <button onClick={()=> addPost()}>add post</button>
            <button onClick={fetchPosts}>fetch posts</button>

            {posts.map((post)=>(
                    <div>
                        <h2>{post.title}</h2>
                        <h5>{post.author}</h5> 
                        <p>{post.body}</p>
                    </div>
                ))
            }
        </div>
    )
}


module.exports = Blog