import { render, screen } from '@testing-library/react';
import MovieList from './MovieList';
import AddFavourites from './AddFavourites';
import RemoveFavourites from './RemoveFavourites';
import React from "react";

const mockFavouritesClick = jest.fn()
const movieObject = [{
    "Title": "Star Wars",
    "Year": "1977",
    "imdbID": "tt0076759",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzg4MjQxNTQtZmI5My00YjMwLWJlMjUtMmJlY2U2ZWFlNzY1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
}];

it('should have an element with a class name image-container image-item',  () => {
    const {container} =render(
        <MovieList
            movies = {movieObject}
            favouriteComponent={AddFavourites}
            handleFavouritesClick={mockFavouritesClick}
        />
    );
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const imageElement = container.getElementsByClassName('image-container image-item');
    expect(imageElement.length).toBe(1);
});

it('should not have an element with a class name image-container image-item when no movie object is passed',  () => {
    const {container} =render(
        <MovieList
            movies = {[]}
            favouriteComponent={AddFavourites}
            handleFavouritesClick={mockFavouritesClick}
        />
    );
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const imageElement = container.getElementsByClassName('image-container image-item');
    expect(imageElement.length).toBe(0);
});

describe('renders the passed favouriteComponent', ()=>{
    it('renders AddFavourites',  () => {
        render(
            <MovieList
                movies = {movieObject}
                favouriteComponent={AddFavourites}
                handleFavouritesClick={mockFavouritesClick}
            />
        );
        const FavouriteComponent = screen.getByText("Add to Favourites")
        expect(FavouriteComponent).toBeTruthy();
    });

    it('renders RemoveFavourites',  () => {
        const {container} =render(
            <MovieList
                movies = {movieObject}
                favouriteComponent={RemoveFavourites}
                handleFavouritesClick={mockFavouritesClick}
            />
        );
        const FavouriteComponent = screen.getByText("Remove from favourites")
        expect(FavouriteComponent).toBeTruthy();
    });
})





