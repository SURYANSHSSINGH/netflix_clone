//import React from 'react';
const API_KEY = "b8d9549b9c90b3e5f02d037f745e1045";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOrigials:`/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}%with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}%with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}%with_genres=27`,
    fetchRomanticMovies:`/discover/movie?api_key=${API_KEY}%with_genres=10749`,
    fetchDocumentary:`/discover/movie?api_key=${API_KEY}%with_genres=99`,
}

export default requests;