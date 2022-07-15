import '../scss/main.scss';
import '../html/index.html';
import { createHeader } from './createBlocks/createHeader';
import { createMain } from './createBlocks/createMain';
import { getMultipleSearchApi } from './getShowsApi';
import { generateMain } from './addEvents';


const appMain = async () => {
    createHeader();
    createMain();
    getMultipleSearchApi();
    generateMain();
}


appMain();