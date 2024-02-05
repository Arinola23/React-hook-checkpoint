import React from 'react';

const movieCard = ({ title, description, image, posterURL,rating}) =>{
    return (
        <div className='movie-card'>
            {/* <img src= {image} alt={title} /> */}
            <img src={posterURL} alt= {title}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Rating:{rating}</p>
        </div>
    )
}


export default movieCard;