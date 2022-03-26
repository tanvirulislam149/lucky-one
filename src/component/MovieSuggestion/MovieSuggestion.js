import React, { useState } from 'react';

const MovieSuggestion = (props) => {
    const { movie } = props;
    // console.log(movie)
    // const [suggestion, setSuggestion] = useState([]);
    // const exists = suggestion.find(existingMovie => existingMovie.id === movie.id)
    // if (!exists) {
    //     const newSuggestion = [...suggestion, movie]
    //     setSuggestion(newSuggestion)
    // }
    // console.log(suggestion);
    return (
        <div>
            <h5>{movie.name} </h5>
        </div>
    );
};

export default MovieSuggestion;