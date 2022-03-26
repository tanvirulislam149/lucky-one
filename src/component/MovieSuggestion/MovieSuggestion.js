import "./MovieSuggestion.css"

const MovieSuggestion = (props) => {
    const { movie } = props;
    return (
        <div className="suggestion">
            <h5 className="py-2">{movie.name} </h5>
        </div>
    );
};

export default MovieSuggestion;