import React, { useState, useEffect } from "react";
import { Box, Modal, Stack, Typography } from "@mui/material";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import tmdbApi, { movieType, category } from "../../api/tmdbApi";
import apiStore from "../../api/apiStore";
import { useStyles } from "./MovieSlideStyle";
import StarIcon from "@mui/icons-material/Star";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { MyButton } from "../Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CustomBox from "../CustomBox";
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
  const [open, setOpen] = useState(false);
  const [trailerSrc, setTrailerSrc] = useState("");
  const handleOpen = async () => {
    const videos = await tmdbApi.getVideos(category.movie, item.id);
    if (videos.results.length > 0) {
      setTrailerSrc("https://www.youtube.com/embed/" + videos.results[0].key);
      setOpen(true);
    }
  };
  const handleClose = () => {
    setTrailerSrc("");
    setOpen(false);
  };

  const classes = useStyles();
  const background = apiStore.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);
  return (
    <Box sx={{ backgroundImage: `url(${background})` }} className={classes.movie_container}>
      <Stack className={classes.movie_content} spacing={3}>
        <Typography variant="h4">Movflx</Typography>
        <Typography variant="h2">{item.title}</Typography>
        <Stack direction="row" spacing={1} className={classes.movie_describe}>
          <CustomBox boxType="white">PG18</CustomBox>
          <CustomBox boxType="black">HD</CustomBox>
          <EventNoteIcon />
          <Typography variant="span">{item.release_date}</Typography>
          <StarIcon />
          <Typography variant="span">{item.vote_average}</Typography>
        </Stack>
        <Typography variant="paragraph">{item.overview}</Typography>
        <Stack direction="row" spacing={2}>
          <MyButton sx={{ width: "200px", padding: "10px 34px" }}>
            <PlayArrowIcon
              sx={{
                marginRight: "3px",
              }}
            />
            WATCH NOW
          </MyButton>
          <MyButton onClick={handleOpen} sx={{ width: "230px", padding: "10px 34px" }}>
            <PlayArrowIcon
              sx={{
                marginRight: "3px",
              }}
            />
            WATCH TRAILER
          </MyButton>
        </Stack>
      </Stack>
      <Modal open={open} onClose={handleClose}>
        <Box className={classes.trailerModal}>
          <iframe src={trailerSrc} width="100%" height="500px" title="trailer"></iframe>
        </Box>
      </Modal>
    </Box>
  );
};
