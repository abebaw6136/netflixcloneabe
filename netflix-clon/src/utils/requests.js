
const API_KEY =process.env.REACT_APP_API_KEY;


const requests={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
    fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
    fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    ffetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchTvShow: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};
export default requests;