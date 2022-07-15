import { delegateEvents } from '../addEvents';
import { getTrendingApi, getPopularApi, getUpcomingApi, getTopRatedApi } from '../getShowsApi';


export const createMain = () => {
    // check if main blocl already exists
    if(document.querySelector('.main')) {
        document.querySelector('.main').remove();
    }

    
    const mainBlock = document.createElement('main');
    mainBlock.classList.add('main');
    mainBlock.innerHTML = ``;


    // fill main block by responses
    getTrendingApi();
    getPopularApi();
    getUpcomingApi();
    getTopRatedApi();
    
    
    setTimeout(delegateEvents, 1000);
    const bodyBlock = document.querySelector('body');
    bodyBlock.append(mainBlock);
}