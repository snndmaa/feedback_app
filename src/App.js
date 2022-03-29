import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutPage from './components/pages/AboutPage'
import AboutIconLink from './components/shared/AboutIconLink'
// import Card from './components/shared/Card'
import Footer from './components/shared/Footer'
import Post from './components/Post'
import {FeedbackProvider} from './context/FeedbackContext'


function App() {
    const [feedback, setFeedback] = useState(FeedbackData)




    // function linkHoverStyle(){
    //     link = document.querySelectorAll('a')
    //     console.log(link.length)
    //     for(i=0; i<link.length; i++){
    //         link[i].classList.add("linkHoverStyle")
    //     }
    // }

    return (
            <FeedbackProvider>
                <Router>
                    {/* <Header text='Hello World' /> */}
                    
                    <Header />
                    <div className="container">
                        <Routes>
                            <Route exact path="/" element={
                                <>
                                    <FeedbackForm/>
                                    <FeedbackStats/>
                                    <FeedbackList/>
                                </>
                            }>
                                
                            </Route>

                            <Route exact path="/about" element={ <AboutPage/> } />
                            <Route exact path="/post/*" element={ <Post/> } />
                            {/* <Route exact path="/post/:id" element={ <Post/> } />
                            <Route exact path="/post/:id/:title" element={ <Post/> } /> */}
                        </Routes>

                        
                    </div>
                    <AboutIconLink/>
                    {/* <Footer> */}
                            {/* <NavLink to='/' activeClassName='active'>
                                Home
                            </NavLink>
                            <NavLink to='/about' activeClassName='active'>
                                About
                            </NavLink> */}
                    <Footer/>
                </Router>
            </FeedbackProvider>
    )}


// function App(){
//     const title = 'Blog Post'
//     const body = 'This is my blog post.'
//     const comments = [
//         {id: 1, text: 'comment one'},
//         {id: 2, text: 'comment two'},
//         {id: 3, text: 'comment three'},
//     ]

//     const loading = false
//     const showComment = true

//     if (loading){
//         return <h1>Loading...</h1>
//     }

//     const commentBlock = (
//                 <div className='comments'>
//                     <h3>Comments ({ comments.length })</h3>
//                     <ul>
//                         {comments.map(
//                             (comment, index) => (
//                          <li key={ index }>{ comment.text }</li>
//                         )
//                         )}
//                     </ul>
//                 </div>
//     )

//     return(
//         <>
//             <h1>{ title.toUpperCase() }</h1>
//             <p>{ body }</p>

//             {showComment ? 'yes' : 'no'}

//             {
//              showComment
//              && commentBlock
//             }


//         </>
//     )
// }



// function App(){
//     return React.createElement('div', {className: 'container'},
//     React.createElement('h1', {}, 'Hello from the app component')
//     )
// }

export default App