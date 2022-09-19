import { render, screen } from '@testing-library/react';
import MovieListHeading from './MovieListHeading';

it('should render same text passed into title prop', () => {
    render(<MovieListHeading heading='Movies'/>);
    const headingElement = screen.getByText("Movies");
    expect(headingElement).toBeInTheDocument();
});

