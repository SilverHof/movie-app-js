import { createPopularSection } from './createSections/createPopularSection';
import { createTopRatedSection } from './createSections/createTopRatedSection';
import { createTrendingSection } from './createSections/createTrendingSection';
import { createUpcomingSection } from './createSections/createUpcomingSection';
import { createDetailsSection } from './createSections/createDetailsSection';


const API_KEY = `870bc8b39701543761f51393e7d7467f`;


export const getMultipleSearchApi = async (name) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=870bc8b39701543761f51393e7d7467f&language=en-US&query=${name}&page=1&include_adult=true`);
        const parsedResponse = await response.json();

        
    } catch(error) {
        console.log(error);
    }
}


export const getTVShowsApi = async () => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=${showname}&include_adult=true`);
        const parsedResponse = await response.json();

        
    } catch(error) {
        console.log(error);
    }
}


export const getTrendingApi = async () => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`);
        const parsedResponse = await response.json();

        console.log(parsedResponse.results);
        
        createTrendingSection(parsedResponse.results)
        
    } catch(error) {
        console.log(error);
    }
}


export const getPopularApi = async () => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        const parsedResponse = await response.json();

        // run a function to create a popular section
        createPopularSection(parsedResponse.results);
        
    } catch(error) {
        console.log(error);
    }
}


export const getUpcomingApi = async () => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
        const parsedResponse = await response.json();   

        // run a function to create an upcoming section
        createUpcomingSection(parsedResponse.results);
        console.log(parsedResponse.results);
        
    } catch(error) {
        console.log(error);
    }
}


export const getTopRatedApi = async () => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
        const parsedResponse = await response.json();
        
        // run a function to create a top rated section
        createTopRatedSection(parsedResponse.results);
        
    } catch(error) {
        console.log(error);
    }
}


export const getMovieDatailsById = async (MOVIE_ID) => {
    try {
        // get movie details
        const responseMovie = await fetch(`https://api.themoviedb.org/3/movie/${MOVIE_ID}?api_key=${API_KEY}&language=en-US`);
        const parsedResponseMovie = await responseMovie.json();

        // get actor details
        const responseCast = await fetch(`https://api.themoviedb.org/3/movie/${MOVIE_ID}/credits?api_key=${API_KEY}&language=en-US`);
        const parsedResponseCast = await responseCast.json();

        // run a function to pass movie details and movie cast
        createDetailsSection(parsedResponseMovie, parsedResponseCast);
        
    } catch(error) {
        console.log(error);
    }
}



