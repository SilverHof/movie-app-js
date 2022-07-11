import { getTopRatedApi, getUpcomingApi } from "./getShowsApi";

export const createMain = () => {
    const mainBlock = document.createElement('main');
    mainBlock.classList.add('main');

    // getUpcomingApi();
    getTopRatedApi();
    
    const bodyBlock = document.querySelector('body');
    bodyBlock.append(mainBlock);
}