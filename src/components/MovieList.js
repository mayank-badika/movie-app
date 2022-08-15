import React from 'react';

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container image-item'>
					<img src={movie.Poster} alt='movie'></img>
                    <div onClick={() => props.handleFavouritesClick(movie)} className='overlay'>
                    <FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;

// list of movies is passed as props
// map function to loop over the movies
// display image for each movie using poster url
//taking our favouriteComponent from props and assigning it to a variable. 
//This lets us use it as a react component
//We're rendering our favouriteComponent in the overlay