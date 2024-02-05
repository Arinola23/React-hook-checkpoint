import React, { useState } from 'react';
import MovieList from './movieList';
import Filter from './filter';


const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      image: 'dark october.jpg',
      title: "Dark October",
      description: "Dark October is a movie based on the true-life story  of four students from the University of Port-Harcourt who were wrongfully accused of theft in the Aluu community, Port-Harcourt and were lynched to death by a mob in October 2012.",
      posterURL: " https://youtu.be/eJVxo6EXTQ0",
      rating: 8.8 
    },
    // Add more movies here
  ]);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0
  });

  const handleTitleChange = (e) => {
    setTitleFilter(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRatingFilter(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const addMovie = () => {
    if (newMovie.title && newMovie.description && newMovie.posterURL && newMovie.rating) {
      setMovies(prevMovies => [...prevMovies, { ...newMovie, id: Date.now() }]);
      setNewMovie({
        title: '',
        description: '',
        posterURL: '',
        rating: 0
      });
    } else {
      alert("Please fill in all fields.");
    }
  };

  const filteredMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
    );
  });

  return (
    <div className="app">
      <h1>NetMovie</h1>
        <div className='filter'>
          <Filter
           handleTitleChange={handleTitleChange}
           handleRatingChange={handleRatingChange}
         />
      </div>

      <MovieList movies={filteredMovies} />
      <div className="add-movie">
        <h2>Add New Movie</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newMovie.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newMovie.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="posterURL"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={handleInputChange}
        />
        <button onClick={addMovie}>Add Movie</button>
      </div>
    </div>
  );
};

export default App;
