import '../scss/main.scss';
import '../html/index.html';
import { createHeader } from './createHeader';
import { createMain } from './createMain';
import { getMultipleSearchApi, testApi } from './getShowsApi';



const appMain = () => {
    createHeader();
    createMain();
    getMultipleSearchApi();
    // testApi();
}


appMain();