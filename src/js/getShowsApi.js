const API_KEY = `870bc8b39701543761f51393e7d7467f`;
const moviename = `Transformers`;
const showname = `sex education`;
const name = `game of thrones`;



export const getMultipleSearchApi = async () => {
    // make a request
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=870bc8b39701543761f51393e7d7467f&language=en-US&query=${name}&page=1&include_adult=true`);
        const parsedResponse = await response.json();
        console.log(parsedResponse);
        
    } catch(error) {
        console.log(error);
    }
}


export const getMovieSearchApi = async () => {
    // make a request
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=870bc8b39701543761f51393e7d7467f&language=en-US&page=1`);
        const parsedResponse = await response.json();
        console.log(parsedResponse);
        
    } catch(error) {
        console.log(error);
    }
}


export const getTVShowsApi = async () => {
    // make a request
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=${showname}&include_adult=true`);
        const parsedResponse = await response.json();
        console.log(parsedResponse);
        
    } catch(error) {
        console.log(error);
    }
}


export const getTopRatedApi = async () => {
    // make a request
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        const parsedResponse = await response.json();
        console.log(parsedResponse);
        
    } catch(error) {
        console.log(error);
    }
}


export const getTrendingApi = async () => {
    // make a request
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        const parsedResponse = await response.json();
        console.log(parsedResponse);
        
    } catch(error) {
        console.log(error);
    }
}

