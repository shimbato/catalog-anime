import { Grid, Link } from "@mui/material";
import React from "react";
import { Img, MovieCard, Titles } from "./styles/Poster";

export const GhibliCard = ({ movie }) => {
  return (
    <>
    {/* <Link to={`/movie?${movie.id}`}> */}
      <Grid item key={movie.id} xs={12} sm={6} md={4}>
        {/* <MovieCard> */}
          <Img
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.image}`}
            alt="poster"
          />
          <Titles>{movie.title} </Titles>
    
        {/* </MovieCard> */}
      </Grid>
      {/* </Link> */}
    </>
  );
};