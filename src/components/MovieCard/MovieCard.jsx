import React from "react";
import { Box, Card, CardContent, CardMedia, Stack, Typography, Modal } from "@mui/material";
import { useState } from "react";
import { MyButton } from "../Button";
import { useStyles } from "./MovieCardStyle";
import tmdbApi, { category } from "../../api/tmdbApi";
import apiStore from "../../api/apiStore";
import CustomBox from "../CustomBox";
import StarIcon from "@mui/icons-material/Star";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { globalStyle } from "../../scss/globalStyle";

const MovieCard = ({ item, type }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [trailerSrc, setTrailerSrc] = useState("");
  const handleOpen = async () => {
    const videos = await tmdbApi.getVideos(category[type], item.id);
    if (videos.results.length > 0) {
      setTrailerSrc("https://www.youtube.com/embed/" + videos.results[0].key);
      setOpen(true);
    }
  };
  const handleClose = () => {
    setTrailerSrc("");
    setOpen(false);
  };
  return (
    <Card sx={{ backgroundColor: globalStyle.background }}>
      <Box className={classes.poster}>
        <CardMedia component="img" alt="movie_poster" image={apiStore.w500Image(item.poster_path)} />
        <Stack spacing={3} className={classes.button_group}>
          <MyButton sx={{ width: "200px", padding: "10px 10px", fontSize: "100%" }}>
            <PlayArrowIcon
              sx={{
                marginRight: "3px",
              }}
            />
            DETAIL
          </MyButton>
          <MyButton sx={{ width: "200px", padding: "10px 10px", color: "red", fontSize: "100%" }} onClick={handleOpen}>
            <PlayArrowIcon
              sx={{
                marginRight: "3px",
              }}
            />
            WATCH TRAILER
          </MyButton>
        </Stack>
      </Box>
      <CardContent sx={{ backgroundColor: globalStyle.background, paddingLeft: "0", paddingRight: "0" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtitle2" sx={{ fontWeight: "700" }} className={classes.title}>
            {item.name || item.title}
          </Typography>
          <Typography variant="subtitle2" className={classes.date_release}>
            {item.first_air_date || item.release_date}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
          <CustomBox boxType="black" color="yellow">
            HD
          </CustomBox>
          <Box sx={{ display: "flex" }}>
            <StarIcon className={classes.date_release} />
            <Typography className={classes.date_release}>{item.vote_average}</Typography>
          </Box>
        </Box>
      </CardContent>
      <Modal open={open} onClose={handleClose}>
        <Box className={classes.trailerModal}>
          <iframe src={trailerSrc} width="100%" height="500px" title="trailer"></iframe>
        </Box>
      </Modal>
    </Card>
  );
};
export default MovieCard;
