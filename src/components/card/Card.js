import React from'react'

const card = props => {
    return(
        <div className='card'>
            <h3 className='title'>{props.title}</h3>
            <p className='description'>{props.description}</p>
            <button className="button">Read More...</button>
        </div>                    
    )
}

export default card