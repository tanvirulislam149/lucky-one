import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import "./Movie.css"

const Movie = (props) => {
    const { movie, sendMovieId } = props;
    return (
        <div className="">
            <div className="col movie">
                <div className="card h-100">
                    <img src={movie.picture} className="card-img-top poster" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{movie.name}</h5>
                        <p className='fs-bold'>Price: ${movie.price}</p>
                    </div>
                    <div className="card-footer">
                        <button onClick={() => sendMovieId(movie.id)} className='btn btn-danger fw-bold w-100'>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movie;