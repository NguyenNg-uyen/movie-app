const apiStore = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "cc6431e52dd37d58901bc4cf12ab6617",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiStore;
