import React, { useState, useEffect, useRef } from "react";
import { Box, Card, Container, Stack, Typography } from "@mui/material";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import tmdbApi, { movieType } from "../../api/tmdbApi";
import apiStore from "../../api/apiStore";
import { useStyles } from "./MovieSlideStyle";
import StarIcon from "@mui/icons-material/Star";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { MyButton } from "../Button";
import "./MovieSlide.scss";
export const HomeMovieSlide = () => {
  const [movieList, setMovieList] = useState([]);

  SwiperCore.use([Autoplay, EffectFade]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, { params });
        setMovieList(response.results.slice(0, 4));
        console.log(response);
      } catch (e) {
        console.error(e);
      }
    };
    getMovies();
  }, []);

  return (
    <div>
      <Swiper modules={[Autoplay, EffectFade]} spaceBetween={0} slidesPerView={1} autoplay={{ delay: 10000 }} effect="fade">
        {movieList.map((item, index) => (
          <SwiperSlide key={index}>
            <MovieItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
const MovieItem = ({ item }) => {
  const classes = useStyles();
  const background = apiStore.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);
  return (
    <Box sx={{ backgroundImage: `url(${background})` }} className={classes.movie_container}>
      <Stack className={classes.movie_content} spacing={3}>
        <Typography variant="h4">Movflx</Typography>
        <Typography variant="h2">{item.title}</Typography>
        <Stack direction="row" spacing={1}>
          <Typography variant="span" className={classes.pg18}>
            PG18
          </Typography>
          <Typography variant="span" className={classes.hd}>
            HD
          </Typography>
          <EventNoteIcon />
          <Typography variant="span">{item.release_date}</Typography>
          <StarIcon />
          <Typography variant="span">{item.vote_average}</Typography>
        </Stack>
        <MyButton sx={{ width: "200px", padding: "16px 34px" }}>WATCH NOW</MyButton>
      </Stack>
    </Box>
  );
};
