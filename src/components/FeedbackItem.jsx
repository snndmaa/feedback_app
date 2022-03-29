import React, {useContext} from 'react'
// import { useState } from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackItem({ item }) {
    // const [rating, setRating] = useState(7)
    // const [text, setText] = useState('This an example of a feedback item')

    // const handleClick = ()=> {
    //     setRating((prev)=> {
    //         console.log(prev)
    //         return prev + 1
    //     })
    // }

  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    // <div className='card'>         //Former
    <Card>
        <div className="num-display">{ item.rating }</div>
        <button onClick={ () => deleteFeedback(item.id) } className="close">
          <FaTimes color='purple' />
        </button>
        <button className="edit" onClick={ ()=> editFeedback(item) } >
          <FaEdit color='purple'/>
        </button>
        <div className="text-display">
            { item.text }
        </div>
        {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem