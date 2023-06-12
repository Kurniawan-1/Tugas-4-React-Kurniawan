import React from 'react'
import { useState } from 'react';

const Galaxy = (props) => {
    const { nama, gambar, deskripsi, penemu } = props;
    const [liked, setLiked] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [background, setBackground] = useState(true);

    const handleLikeClick = () => {
        setLiked(!liked);
        setBackground(!background);
    };

    const handleMoreClick = () => {
        setShowDescription(!showDescription);
    };

    return (
        <div className='Galaxy'>
            <h2>{nama}</h2>
            <img src={gambar} alt={nama} />
            {showDescription && <p>{deskripsi}</p>}
            <p>{penemu}</p>
            <button style={{ backgroundColor: background ? 'green' : 'blue' }} onClick={handleLikeClick}>
                {liked ? "Batal Suka" : "Suka"}
            </button>
            <button onClick={handleMoreClick}>
                {showDescription ? "Sembunyikan" : "Selengkapnya"}
            </button>
        </div>
    );
}


export default Galaxy