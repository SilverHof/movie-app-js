import '../scss/main.scss';
import '../html/index.html';
import { createHeader } from './createHeader';
import { createMain } from './createMain';
import { getMultipleSearchApi, testApi } from './getShowsApi';
import { delegateEvents } from './delegateEvents';



const appMain = () => {
    createHeader();
    createMain();
    getMultipleSearchApi();

    // testApi();
}


appMain();