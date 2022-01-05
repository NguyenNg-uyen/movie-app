import { Box, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./MovieListStyle";
import SwiperCore, { Navigation } from "swiper";
import { MovieList } from "./MovieList";
import { movieType, tvType } from "../../api/tmdbApi";
export const MovieListContainer = () => {
  const classes = useStyles();

  SwiperCore.use([Navigation]);

  return (
    <Box className={classes.container}>
      <Typography variant="caption" sx={{ fontWeight: "600" }} className={classes.caption}>
        ONLINE STREAMING
      </Typography>
      <MovieList generalType="Upcoming" movieType={movieType.upcoming} tvType={tvType.on_the_air} />
      <MovieList generalType="Top Rated" movieType={movieType.top_rated} tvType={tvType.top_rated} />
      <MovieList generalType="Popular" movieType={movieType.popular} tvType={tvType.popular} />
    </Box>
  );
};
