import MovieSuggestion from '../MovieSuggestion/MovieSuggestion';
import "./Cart.css"

const Cart = (props) => {
    const { cart, reset, choose, randomMovie } = props;

    return (
        <div className='cart text-center'>
            <h2 className='fw-bold'>Select Movie</h2>
            {
                cart.map(movie => <MovieSuggestion key={movie.id} movie={movie}></MovieSuggestion>)
            }
            <button onClick={choose} className='choose-and-reset btn btn-danger fw-bold my-2'>Choose 1 for me</button>
            <br />
            <h5 className='randomMovie py-2'>{randomMovie.name}</h5>
            <button onClick={reset} className='choose-and-reset btn btn-success fw-bold my-2'>Reset </button>
        </div>
    );
};

export default Cart;