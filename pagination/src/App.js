import React, {useState,useEffect} from 'react'
import Posts from './components/Posts';
import Pagination from './components/Pagination';

const App = () => {

  const [posts,setPosts] = useState([])

  const [loading,setLoading] = useState(false);

  const [postsPerPage] = useState(10);

  const [currentPage,setCurrentPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
        setLoading(true);

        const options = {
          method:"GET"
        }

        const res = await fetch("https://jsonplaceholder.typicode.com/posts",options);
        const data = await res.json(); 
        setPosts(data);
        setLoading(false)
    }
    getData()
  },[])

  // Get current post

  const indexOfLastPost  = currentPage * postsPerPage;

  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost)

  // Change page

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
      <h1>Data</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  )
}

export default App

