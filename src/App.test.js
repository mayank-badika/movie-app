import { render, screen, fireEvent } from '@testing-library/react';
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox';
import MovieListHeading from './components/MovieListHeading';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';
import App from './App'

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

