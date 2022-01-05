import React from "react";
import { HomeMovieSlide } from "../components/HomeMovieSlide/HomeMovieSlide";
import { MovieListContainer } from "../components/MovieList/MovieListContainer";
export default function Home() {
  return (
    <div>
      <HomeMovieSlide />
      <MovieListContainer />
    </div>
  );
}
