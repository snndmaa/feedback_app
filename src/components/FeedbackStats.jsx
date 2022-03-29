import React, {useContext} from 'react'
// import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext)
  // Calculate ratings avg
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / feedback.length

  average = average.toFixed(1).replace(/[.,]0$/, '')        // To get average rounded to one decimal place but then remove the .0 in the number using regex.

  return (
    <div className='feedback-stats'>
      <h4>{ feedback.length } Reviews</h4>
      <h4>Average Rating: { isNaN(average) ? 0 : average }</h4>
    </div>
  )
}

// FeedbackStats.propTypes = {
//   feedback: PropTypes.array.isRequired,
// }

export default FeedbackStats