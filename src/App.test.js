import { render, screen, fireEvent } from '@testing-library/react';
import App from './App'

const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");
const mock = new MockAdapter(axios);

mock.onGet("http://www.omdbapi.com/?s=Star Wars&apikey=9a61c8c4").reply(200, {
    Search: [
        {
            "Title": "Star Wars Mayank Edition",
            "Year": "1977",
            "imdbID": "tt0076759",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNzg4MjQxNTQtZmI5My00YjMwLWJlMjUtMmJlY2U2ZWFlNzY1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
        },
        {
            Poster: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
            Title: "Star Wars: Episode V - The Empire Strikes Back",
            Type: "movie",
            Year: "1980",
            imdbID: "tt0080684"
        }
    ]
});

describe('When the user types something', () => {
    it('component has header of Movies',  () => {
        render(<App/>);
        const inputElement = screen.getByPlaceholderText(/Type to search../i);
        fireEvent.change(inputElement,{target:{value:"Star Wars"}});
        const headingElement = screen.getByText("Movies");
        expect(headingElement).toBeInTheDocument();
    });

    it('initially gets object from api',  async () => {
        render(<App/>);
        const posterElements = await screen.findAllByTestId(/image-container image-item/);
        expect(posterElements.length).toBe(2);
    });

});

// integration tests
describe("Favourites", ()=>{
    it("clicking on Add to favourites adds the movie to favourites", async ()=>{
        render(<App/>);
        const buttonElement = await screen.findByTestId("overlay-click-AddFavourites-0");
        fireEvent.click(buttonElement);
        const favouriteElement = await screen.findByTestId("image-container image-item-0-RemoveFavourites");
        expect(favouriteElement).toBeInTheDocument();
    })

    it("clicking on Remove from Favourites removes the item" , async ()=>{
        render(<App/>);
        const buttonElement1 = await screen.findByTestId("overlay-click-AddFavourites-0");
        fireEvent.click(buttonElement1);
        const buttonElement = await screen.findByTestId("overlay-click-RemoveFavourites-0");
        fireEvent.click(buttonElement);

        expect(buttonElement).not.toBeInTheDocument();
    })
})

