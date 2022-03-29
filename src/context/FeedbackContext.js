import {createContext, useState, useEffect} from 'react'
// import { v4 as uuidv4 } from 'uuid'


const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([

    ])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchFeedback()
    }, [])  //Empty Dependency list means it runs once when the page loads

    const fetchFeedback = async () => {
        try{
        const response = await fetch(
            `/api?_sort=id&_order=desc`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
            )
        // console.log(response)
        const data = await response.json()
        setFeedback(data)}
        catch(error){
            console.log(error)
        }
        setIsLoading(false)
    }

    const addFeedback = async (newFeedback) => {
        const response = await fetch('/api',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)       //To change from javascript object to JSON String
        })

        const data = await response.json()
        console.log(data)

        // newFeedback.id = uuidv4()
        setFeedback([ data, ...feedback ])
    }

    const deleteFeedback = async (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            await fetch(`/api/${id}`, {method: 'DELETE'})

            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    // Set Item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    } 

    const[rating, setRating] = useState(10)

    const updateFeedback = async (id, updItem)=>{
        const response = await fetch(`/api/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updItem)
        })

        const data = await response.json()

        setFeedback(
            feedback.map((item) => (item.id === id ? { ...item, ...data } : item)
            ))
    }

    return (
        <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        rating,
        deleteFeedback,
        addFeedback,
        editFeedback,
        setRating,
        updateFeedback,
        isLoading,
    }}>
        { children }
    </FeedbackContext.Provider>
    )}

export default FeedbackContext
