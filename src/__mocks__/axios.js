const mockResponse = {
    data: {
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
    }
}

export default{
    get: jest.fn().mockResolvedValue(mockResponse)
}
