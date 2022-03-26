import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Movie from '../Movie/Movie';
import "./Shop.css"

const Shop = () => {
    const [movies, setMovies] = useState([])
    const [cart, setCart] = useState([])
    const [randomMovie, setRandomMovie] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setMovies(data));
    }, [])
    const sendMovieId = (id) => {
        const selectedId = movies.find(movie => movie.id === id)

        const exists = cart.find(existingMovie => existingMovie.id === selectedId.id)
        if (!exists) {
            const newCart = [...cart, selectedId]
            setCart(newCart);
        }
    }
    const choose1 = () => {
        if (cart.length) {
            let number = parseInt(Math.random() * 10);
            if (number < cart.length) {
                const choosenMovie = cart[number];
                setRandomMovie(choosenMovie);
            }
            else {
                choose1();
            }
        }
    }
    const reset = () => {
        const emptyCart = [];
        setCart(emptyCart)
        const emptyRandomMovie = [];
        setRandomMovie(emptyRandomMovie)
    }
    return (
        <div className='mx-2 mx-sm-5'>
            <div className='row'>
                <div className='col-8'>
                    <div className='row row-cols-1 row-cols-md-3 g-4'>
                        {
                            movies.map(movie => <Movie
                                key={movie.id}
                                movie={movie}
                                sendMovieId={sendMovieId}
                            ></Movie>)
                        }
                    </div>
                </div>
                <div className='col-4'>
                    <div className='cart'>
                        <Cart
                            cart={cart}
                            reset={reset}
                            choose={choose1}
                            randomMovie={randomMovie}
                        ></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;