import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox';
import MovieListHeading from './components/MovieListHeading';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';
import axios from 'axios';

const App = () => {
	const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('Star Wars');
  const [favourites, setFavourites] = useState([]);

	const getMovieRequest = async (searchValue) => {
		const url = 'http://www.omdbapi.com/?s='+searchValue+'&apikey=9a61c8c4';
		const {data} = await axios.get(url);
		console.log(data);
		if (data.Search) {
			setMovies(data.Search);
		}
	};

  const addFavouriteMovie = (movie) => {
    if (favourites.includes(movie)) return;
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
	};

  const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);
	
	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<MovieList movies={movies} favouriteComponent={AddFavourites} handleFavouritesClick={addFavouriteMovie}/>
			</div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Favourites' />
			</div>
			<div className='row'>
				<MovieList movies={favourites} favouriteComponent={RemoveFavourites} handleFavouritesClick={removeFavouriteMovie}/>
			</div>
		</div>
	);
};

export default App;
// Passing the movies list to Movie component
// we are rendering the movielist and passing the movies we stored in state as props to movie component
// fetch defaults to get request
//By saving the state of the input in App.js, 
//it makes it easy for us to pass the search value to the getMovieRequest function
//When the useEffect hooks runs, it passes the new searchValue to our getMovieRequest function
