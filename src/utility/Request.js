const Api_key = 'a14184b50b9558e803afdc35f0f3f431';

const requests = {
  Api_key,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=1`,
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${Api_key}`,
  requestGenre: `https://api.themoviedb.org/3/genre/movie/list?api_key=${Api_key}&language=en-US,`, 
  requestTvShow: `https://api.themoviedb.org/3/tv/popular?api_key=${Api_key}&language=en-US&page=1`,
  requestAnime: `https://api.themoviedb.org/3/discover/movie?api_key=${Api_key}&with_original_language=ja&sort_by=popularity.desc&page=1`,
  requestSearch: `https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&query=`,
};

export default requests;
