import { render, screen, fireEvent } from '@testing-library/react';
import SearchBox from './SearchBox';

const mockSetSearchValue = jest.fn()

it('should render the input element', () => {
    render(
        <SearchBox
            searchValue={[]}
            setSearchValue={mockSetSearchValue}
        />
    );
    const inputElement = screen.getByPlaceholderText(/Type to search../i);
    expect(inputElement).toBeInTheDocument();
});

it('should change the input when typed', ()=>{
    render(
        <SearchBox
            searchValue={[]}
            setSearchValue={mockSetSearchValue}
        />
    );
    const inputElement = screen.getByPlaceholderText(/Type to search../i);
    fireEvent.change(inputElement,{target:{value:"Harry Potter"}});
    expect(inputElement.value).toBe("Harry Potter");
})

