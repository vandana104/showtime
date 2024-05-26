import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("https://hoblist.com/api/movieList", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            category: "movies",
            language: "kannada",
            genre: "all",
            sort: "voting",
          }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data)
        setMovies(data.result || []);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Box padding="20px">
      <Typography variant="h4" pb="15px" gutterBottom>
        Movies
      </Typography>
      {error ? (
        <Typography color="error">Error: {error}</Typography>
      ) : (
        <Box
          display="flex"
          flexWrap="wrap"
          gap="15px"
          justifyContent="center"
          alignItems="center">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default MovieList;
