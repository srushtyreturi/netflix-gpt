import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    mainTrailerVideo: null,
    popularMovies: null,
    trendingMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addMainTrailerVideo: (state, action) => {
      state.mainTrailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addMainTrailerVideo,
  addPopularMovies,
  addUpcomingMovies,
  addTrendingMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
