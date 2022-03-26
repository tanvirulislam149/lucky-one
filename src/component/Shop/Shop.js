import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';
import "./Shop.css"

const Shop = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setMovies(data));
    }, [])
    return (
        <div className='mx-2 mx-sm-5'>
            <div className='row'>
                <div className='col-8'>
                    {/* <div className='row'> */}
                    <div className='row row-cols-1 row-cols-md-3 g-4'>
                        {
                            movies.map(movie => <Movie
                                key={movie.id}
                                movie={movie}
                            ></Movie>)
                        }
                    </div>
                    {/* </div> */}
                </div>
                <div className='col-4'>
                    <div className='cart'>
                        <h2 className='text-center'>Cart</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;