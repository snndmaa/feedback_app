import React from 'react'
import { useState, useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'


function RatingSelect() {
  const { feedbackEdit, rating, setRating } = useContext(FeedbackContext)

  // useEffect(()=>{
  //   setRating(feedbackEdit.item.rating)
  // }, [feedbackEdit])

    const handleChange = (e) => {
        setRating(+e.currentTarget.value)     //e.currentTarget.value by default is a string. The + sign at the start turns it to an integer
      }

  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (         //{length:10} create an object without any value, but with length equal to 10; The _ is supposed to stand for the value of the current item but its undefined therefore it is not used
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={rating === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect