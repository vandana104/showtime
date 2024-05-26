import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const MovieCard = ({ movie }) => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
  };
  const stars = movie.stars[0].split(",").slice(0, 1).join(", ");
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="25px"
      border="1px solid transparent"
      borderRadius="8px"
      padding="20px"
      boxShadow={3}
      height="230px"
      width="420px"
      justifyContent="space-between">
      <Box display="flex">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mr="20px">
          <ArrowDropUpIcon
            onClick={handleIncrement}
            style={{ cursor: "pointer" }}
          />
          <Typography>{count}</Typography>
          <ArrowDropDownIcon
            onClick={handleDecrement}
            style={{ cursor: "pointer" }}
          />
          <Typography mt="5px">Votes</Typography>
        </Box>
        <img
          src={movie.poster}
          alt="poster"
          width="100px"
          height="150px"
          style={{ borderRadius: "8px" }}
        />
        <Box
          ml={2}
          display="flex"
          flexDirection="column"
          alignItems="flex-start">
          <Typography variant="h6">{movie.title}</Typography>
          <Typography variant="body2">{movie.genre}</Typography>
          <Typography variant="body2">Director: {movie.director}</Typography>
          <Typography
            variant="body2"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}>
            Stars: {stars}
          </Typography>
          <Box mt={1} display="flex" justifyContent="space-between">
            <Typography variant="body2">{movie.pageViews} Mins |</Typography>
            <Typography variant="body2">{" " + movie.language} </Typography>
            <Typography variant="body2">{movie.voting} Date</Typography>
          </Box>
          <Box mt={1} display="flex" justifyContent="space-between">
            <Typography variant="body2">{movie.pageViews} views</Typography>
            <Typography variant="body2">Voted by {movie.voting}</Typography>
          </Box>
        </Box>
      </Box>
      <Button
        variant="contained"
        fullWidth
        color="primary"
        sx={{ backgroundColor: "#1f6e97" }}>
        Watch Trailer
      </Button>
    </Box>
  );
};

export default MovieCard;
