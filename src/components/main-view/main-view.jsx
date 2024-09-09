useEffect(() => {
  fetch('https://movies-flix-hartung-46febebee5c5.herokuapp.com/movies')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      const moviesFromApi = data.map((movie) => {
        return {
          id: movie._id, 
          title: movie.Title,  
          image: movie.ImagePath || "https://via.placeholder.com/150",  
          director: movie.Director?.Name || "Unknown Director", 
          description: movie.Description || "No description available",
          genre: movie.Genre?.Name || "Unknown genre", 
        };
      });

      setMovies(moviesFromApi);
    })
    .catch((error) => {
      console.error('Error fetching movies:', error);
    });
}, []);

