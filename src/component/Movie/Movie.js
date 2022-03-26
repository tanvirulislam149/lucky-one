import React from 'react';
import "./Movie.css"

const Movie = (props) => {
    const { movie } = props;
    return (
        <div className="">
            <div className="col">
                <div className="card h-100 mx-4 mx-sm-0">
                    <img src={movie.picture} className="card-img-top poster" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{movie.name}</h5>
                        <p className='fs-bold'>Price: ${movie.price}</p>
                    </div>
                    <div className="card-footer">
                        <button className='btn btn-danger fw-bold w-100'>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movie;