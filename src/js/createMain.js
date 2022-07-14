import { getTrendingApi, getPopularApi, getUpcomingApi, getTopRatedApi } from './getShowsApi';


export const createMain = () => {
    const mainBlock = document.createElement('main');
    mainBlock.classList.add('main');
    mainBlock.innerHTML = ``;

    getTrendingApi();
    getPopularApi();
    getUpcomingApi();
    getTopRatedApi();
    
    const bodyBlock = document.querySelector('body');
    bodyBlock.append(mainBlock);
}