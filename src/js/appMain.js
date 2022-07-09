import '../scss/main.scss';
import '../html/index.html';
import { getKeywordsSearchApi, getMovieSearchApi, getMultipleSearchApi, getTopRatedApi, getTVShowsApi } from './getShowsApi';
import { createHeader } from './createHeader';
import { createMainByHomeButton } from './createMainByHomeButton';


const appMain = () => {
    createHeader();
    createMainByHomeButton();
    getMultipleSearchApi();
    // getTopRatedApi();
    // getMovieSearchApi();
    // getTVShowsApi();
}


appMain();