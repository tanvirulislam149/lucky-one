import MovieSuggestion from '../MovieSuggestion/MovieSuggestion';

const Cart = (props) => {
    const { cart } = props;
    return (
        <div className='text-center'>
            <h2 className='fw-bold'>Select Movie</h2>
            {
                cart.map(movie => <MovieSuggestion key={movie.id} movie={movie}></MovieSuggestion>)
            }
            <button className='btn btn-danger fw-bold mb-2'>Choose 1 for me</button>
            <br />
            <button onClick={props.reset} className='btn btn-success fw-bold'>Reset </button>
        </div>
    );
};

export default Cart;