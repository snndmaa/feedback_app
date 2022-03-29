import React from 'react'
import { useParams, Navigate, useNavigate, Routes, Route } from 'react-router-dom'

function Post() {
    const params = useParams()
    const status = 200

    const navigation = useNavigate()

    const onClick = ()=> {
      console.log('Taking you home...')
      navigation('/about')
    }

    if(status === 404){
      return <Navigate to='/notfound'/>
    }

  return (
    <div>
        Post
        {/* <h1>Post: { params.id }</h1> */}
        <h2>Title: { params.title }</h2>
        <button onClick={ onClick }>Click to Redirect</button>
        <Routes>
          <Route path='/show' element={<h1>Path/Show Route</h1>}/>
        </Routes>
    </div>
    )
}

export default Post