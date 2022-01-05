import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { MyButton } from "../Button";
import { useStyles } from "./MovieListStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import tmdbApi from "../../api/tmdbApi";
import { globalStyle } from "../../scss/globalStyle";
import MovieCard from "../MovieCard/MovieCard";
export const MovieList = ({ generalType, movieType, tvType }) => {
  const [activeType, setActiveType] = useState("tv");
  const [movieList, setMovieList] = useState([]);
  const [tvList, setTvList] = useState([]);

  const classes = useStyles();
  const handleShow = (type) => {
    setActiveType(type);
  };
  useEffect(() => {
    const getData = async () => {
      const params = { page: 1 };
      try {
        const movieResponse = await tmdbApi.getMoviesList(movieType, { params });
        const tvResponse = await tmdbApi.getTvList(tvType, { params });
        setMovieList(movieResponse.results);
        setTvList(tvResponse.results);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieType, tvType]);
  return (
    <Box sx={{ marginTop: "10px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4" sx={{ fontWeight: "700" }}>
          {generalType} Movies
        </Typography>
        <Stack direction="row" spacing={1} className={classes.button_wrap}>
          <MyButton onClick={() => handleShow("tv")} sx={activeType !== "tv" ? { borderColor: globalStyle.yellow } : {}}>
            TV Shows
          </MyButton>
          <MyButton onClick={() => handleShow("movies")} sx={activeType !== "movies" ? { borderColor: globalStyle.yellow } : {}}>
            Movies
          </MyButton>
        </Stack>
      </Box>
      <Swiper
        spaceBetween={40}
        style={{ marginTop: "20px" }}
        breakpoints={{
          600: {
            slidesPerView: 1,
          },
          900: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },

          1200: {
            slidesPerView: 4,
          },
        }}>
        {activeType === "tv"
          ? tvList.map((item, index) => (
              <SwiperSlide key={index}>
                <MovieCard item={item} type="tv" />
              </SwiperSlide>
            ))
          : movieList.map((item, index) => (
              <SwiperSlide key={index}>
                <MovieCard item={item} type="movie" />
              </SwiperSlide>
            ))}
      </Swiper>
    </Box>
  );
};
