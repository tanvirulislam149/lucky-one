import React from 'react';

const MovieSuggestion = (props) => {
    const { movie } = props;
    return (
        <div>
            <h5>{movie.name} </h5>
        </div>
    );
};

export default MovieSuggestion;